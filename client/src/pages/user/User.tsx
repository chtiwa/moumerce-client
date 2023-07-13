import { useEffect } from 'react'
import { AiOutlineDelete, AiOutlineHeart, AiOutlineHistory, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import './User.scss'
import { MdLogout, MdOutlineLocationOn } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { increaseQuantity } from '../../features/cartSlice'
import { getWishlist, removeFromWishlist, setWishlist } from '../../features/wishlistSlice'
import { openPopup } from '../../features/popupSlice'
import { useLogoutMutation } from '../../features/authApiSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import { setCredentials } from '../../features/authSlice'

const User = () => {
  const { products } = useAppSelector(state => state.wishlist)
  const { isLoggedIn } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [logout, logoutResult] = useLogoutMutation()

  useEffect(() => {
    dispatch(getWishlist())
  }, [])

  const handleLogout = async () => {
    const { data } = await logout()
    if (!logoutResult.isLoading && !logoutResult.isError) {
      dispatch(setCredentials(data))
      navigate('/products')
    }
  }

  return !isLoggedIn ? (
    <Navigate to='/authentication' />
  ) : (
    <div className='user'>
      <div className="top">
        Your account
      </div>
      <div className="bottom">
        <ul className="left">
          <li className="item">
            <span><AiOutlineUser /></span>
            <span>Information</span>
          </li>
          <li className="item">
            <span><MdOutlineLocationOn /></span>
            <span>First address</span>
          </li>
          <li className="item">
            <span><AiOutlineHistory /></span>
            <span>Order history</span>
          </li>
          <li className="item">
            <span><AiOutlineHeart /></span>
            <span>Wishlist</span>
          </li>
          <li className="item" onClick={handleLogout} >
            <span><MdLogout /> </span>
            <span>Log out</span>
          </li>
        </ul>
        <ul className="right">
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
          )
          }
        </ul>
      </div>
    </div>
  )
}

export default User