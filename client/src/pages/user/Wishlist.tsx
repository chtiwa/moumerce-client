// import './Wishlist.scss'
import { useEffect } from 'react'
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai"
import { increaseQuantity } from "../../features/cartSlice"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { openPopup } from "../../features/popupSlice"
import { removeFromWishlist, setWishlist, getWishlist } from "../../features/wishlistSlice"

const Wishlist = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.wishlist)

  useEffect(() => {
    dispatch(getWishlist())
  }, [])


  return (
    <>
      {products?.length > 0 ? (
        products.map((product, index) => (
          <li className="item" key={index}>
            <img src={product.images[0]} alt="" />
            <div className="title">{product.title} </div>
            <div className="price">${product.price} </div>
            <div className="quantity">x 1 </div>
            <button className="add-to-cart" onClick={() => {
              dispatch(increaseQuantity({ product: product }))
              dispatch(openPopup({ success: true, message: `${product.title} was added to your cart` }))
            }} >
              <AiOutlineShoppingCart />
              <span>Add to cart</span>
            </button>
            <div className="delete-btn" onClick={() => {
              dispatch(removeFromWishlist(product._id))
              dispatch(setWishlist())
            }} >
              <AiOutlineDelete />
            </div>
          </li>
        ))
      ) : (
        <li className="item">
          Your wishlist is empty.
        </li>
      )}
    </>
  )
}

export default Wishlist