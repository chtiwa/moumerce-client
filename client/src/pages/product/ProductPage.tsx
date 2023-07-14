import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.scss'
import { AiOutlineDown, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUp } from 'react-icons/ai'
// import Products from '../../components/products/Products'
import Loader from '../../components/loader/Loader'
import { useGetProductQuery } from '../../services/products'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { setProductTitle } from '../../features/productsSlice'
import { openPopup } from '../../features/popupSlice'
import { calculateTotal, increaseQuantity, setCart } from '../../features/cartSlice'
import { addToWishlist, setWishlist } from '../../features/wishlistSlice'

const ProductPage = () => {
  const dispatch = useAppDispatch()
  const [currentIndex, setCurrentIndex] = useState(0)
  const { products } = useAppSelector(state => state.cart)
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const { data, isLoading, isError } = useGetProductQuery(id)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    if (!isLoading && !isError) {
      dispatch(setProductTitle(data.product.title))

      // if the product exists in the cart
      const product = products.find(product => product._id === id)
      if (product) {
        setQuantity(product?.quantity)
      }
    }
  }, [isLoading, data])

  if (isLoading) {
    return <div className="loader-container"><Loader /> </div>
  }

  const handleSetCartCalcTotal = () => {
    // update the cart 
    dispatch(setCart())
    dispatch(calculateTotal())
  }

  const handleAddToCart = () => {
    dispatch(openPopup({ success: true, message: `${data.product.title} was added to your cart` }))
    dispatch(increaseQuantity({ product: data.product, quantity: quantity }))
    handleSetCartCalcTotal()
  }


  const handleAddToWishlist = () => {
    dispatch(openPopup({ success: true, message: `${data.product.title} was added to your wishlist` }))
    dispatch(addToWishlist({ data.product.title, data.product.images, data.product.price, data.product._id }))
    dispatch(setWishlist())
  }

  return !isLoading && (
    <div className="product-page">
      <div className="wrapper">
        <div className="img-wrapper">
          <div className="main-image">
            <img src={data.product.images[currentIndex]} alt="" />
          </div>
          <div className="secondary-images">
            {data.product.images.map((image: any, index: any) => (
              <img src={`${image}`} alt="" key={index} className={`${currentIndex === index ? "selected-image" : ""}`} onClick={() => setCurrentIndex(index)} />
            ))}
          </div>
        </div>

        <div className="details">
          <span className="title">{data.product.title} </span>
          <span className="description">{data.product.description} </span>
          <span className='price'>${data.product.price} </span>
          <div className="buttons-wrapper">
            <div className="amount-btns">
              <span>{quantity}</span>
              <div className="up-down-wrapper">
                <button onClick={() => setQuantity(quantity => quantity + 1)} ><AiOutlineUp /> </button>
                <button onClick={() => quantity > 1 ? setQuantity(quantity => quantity - 1) : setQuantity(1)} ><AiOutlineDown /> </button>
              </div>
            </div>
            <div className="inner">
              <button className="cart-button" onClick={handleAddToCart}>
                <AiOutlineShoppingCart />
                <span>Add to cart</span>
              </button>
              <button className='wishlist-button' onClick={handleAddToWishlist} >
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="suggestions">
        <div className="header">
          Products that you might like :
        </div>
        <Products />
      </div> */}
    </div>
  )
}

export default ProductPage