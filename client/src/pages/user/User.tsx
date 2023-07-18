import { useState } from 'react'
import { AiOutlineHeart, AiOutlineHistory, AiOutlineUser } from 'react-icons/ai'
import './User.scss'
import { MdLogout, MdOutlineLocationOn } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { useLogoutMutation } from '../../features/authApiSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import { setCredentials } from '../../features/authSlice'
import Wishlist from './Wishlist'
import Orders from './Orders'

const User = () => {
  const [currentComponent, setCurrentComponent] = useState('wishlist')
  const { isLoggedIn } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [logout, logoutResult] = useLogoutMutation()

  const handleLogout = async () => {
    const { data }: any = await logout('')
    if (!logoutResult.isLoading && !logoutResult.isError) {
      dispatch(setCredentials(data))
      navigate('/products')
    }
  }

  let component
  if (currentComponent === "wishlist") {
    component = <Wishlist />
  } else if (currentComponent === "information") {
    component = <Wishlist />
  } else if (currentComponent === "orders") {
    component = <Orders />
  } else if (currentComponent === "address") {
    component = <Wishlist />
  }

  return !isLoggedIn ? (
    <Navigate to='/products' />
  ) : (
    <div className='user'>
      <div className="top">
        Your account
      </div>
      <div className="bottom">
        <ul className="left">
          <li className="item" onClick={() => setCurrentComponent('information')}>
            <span><AiOutlineUser /></span>
            <span>Information</span>
          </li>
          <li className="item" onClick={() => setCurrentComponent('address')}>
            <span><MdOutlineLocationOn /></span>
            <span>First address</span>
          </li>
          <li className="item" onClick={() => setCurrentComponent('orders')}>
            <span><AiOutlineHistory /></span>
            <span>Order history</span>
          </li>
          <li className="item" onClick={() => setCurrentComponent('wishlist')}>
            <span><AiOutlineHeart /></span>
            <span>Wishlist</span>
          </li>
          <li className="item" onClick={handleLogout} >
            <span><MdLogout /> </span>
            <span>Log out</span>
          </li>
        </ul>
        <ul className="right">
          {component}
        </ul>
      </div>
    </div>
  )
}

export default User