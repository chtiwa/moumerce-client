// import { useState, useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import './Product.scss'
import { BsFillCartPlusFill } from 'react-icons/bs'
// import ProductSkeleton from './ProductSkeleton'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../features/hooks'
import { openPopup } from '../../../features/popupSlice'
import { increaseQuantity, setCart } from '../../../features/cartSlice'
import { addToWishlist, setWishlist } from '../../../features/wishlistSlice'

interface IProduct {
  title: string
  images: string[]
  price: number
  _id: string
}

const Product = ({ title, images, price, _id }: IProduct) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(increaseQuantity({ product: { title, images, price, _id } }))
    dispatch(openPopup({ success: true, message: `${title} was added to your cart` }))
    dispatch(setCart())
  }

  const handleAddToWishlist = () => {
    dispatch(openPopup({ success: true, message: `${title} was added to your wishlist` }))
    dispatch(addToWishlist({ title, images, price, _id }))
    dispatch(setWishlist())
  }

  return (
    <div className='product'>
      <div className="img-wrapper" >
        <Link to={`/product/${_id}`}>
          <img src={images[0]} alt="" className='img1' />
          <img src={images[1]} alt="" className='img2' />
        </Link>
        <span onClick={handleAddToWishlist} >
          <AiOutlineHeart />
        </span>
      </div>
      <div className="info">
        <span className="title">{title}</span>
        <span className="price">${price}</span>
        <button onClick={handleAddToCart} >
          <BsFillCartPlusFill />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default Product