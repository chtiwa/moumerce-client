// @ts-nocheck
import { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.scss'
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import Cart from '../cart/Cart'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { openCart } from '../../features/cartSlice'
import { openSidebar } from '../../features/sidebarSlice'
import { openSearch } from '../../features/searchSlice'
import { useCheckLoginMutation } from '../../features/authApiSlice'
import { setCredentials } from '../../features/authSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isSidebarOpen } = useAppSelector(state => state.sidebar)
  const { isCartOpen, itemsLength } = useAppSelector(state => state.cart)
  const { isLoggedIn, firstName } = useAppSelector(state => state.auth)
  const [checkLogin, checkLoginResult] = useCheckLoginMutation()

  useEffect(() => {
    const handleCheckLogin = async () => {
      try {
        const { data } = await checkLogin('') as any
        if (!checkLoginResult.isLoading && !checkLoginResult.isError) {
          dispatch(setCredentials(data))
        }
      } catch (error) {
        if (error?.status === 403) {
          const data = { isLoggedIn: false }
          dispatch(setCredentials(data))
          navigate('/authentication')
        }
      }
    }
    handleCheckLogin()
  }, [])

  return (
    <div className='navbar'>
      <NavLink to='/' className="logo">
        <h1>
          Moumerce
        </h1>
      </NavLink>

      <ul className="links">
        <Link to="/products?categories=all">
          <li className="item">
            CATEGORIES
          </li>
        </Link>
        <Link to="/products?gender=man">
          <li className="item">
            MEN
          </li>
        </Link>
        <Link to="/products?gender=woman">
          <li className="item">
            WOMEN
          </li>
        </Link>
        <Link to="/products?type=sport">
          <li className="item">
            SPORT
          </li>
        </Link>
        <Link to="/products?type=fashion">
          <li className="item">
            FASHION
          </li>
        </Link>
      </ul>

      <ul className="icons">
        <li className="item search" onClick={() => dispatch(openSearch())}>
          <AiOutlineSearch />
          <span>Search</span>
        </li>
        <li className="item" >
          {isLoggedIn ? (
            <Link to="/user">
              <span className="first-name">
                {firstName?.charAt(0)}
              </span>
              <span>{firstName?.toUpperCase()}</span>
            </Link>
          ) : (
            <Link to="/authentication">
              <AiOutlineUser />
              <span>Sign in</span>
            </Link>
          )}
        </li>
        <li className="item" onClick={() => {
          if (isSidebarOpen) return
          dispatch(openCart())
        }} >
          <div className="icon-wrapper">
            <AiOutlineShoppingCart />
            {itemsLength > 0 && (
              <span className="items-length" >{itemsLength}</span>
            )}
          </div>
          <span>Cart</span>
          <Cart />
        </li>
        <li className="menu" onClick={() => {
          if (isCartOpen) return
          dispatch(openSidebar())
        }}>
          <AiOutlineMenu />
        </li>
      </ul>
    </div >
  )
}

export default Navbar