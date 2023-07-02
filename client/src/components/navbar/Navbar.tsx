import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import Cart from '../cart/Cart'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { openCart } from '../../features/cartSlice'
import { openSidebar } from '../../features/sidebarSlice'
import { openSearch } from '../../features/searchSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const { isSidebarOpen } = useAppSelector(state => state.sidebar)
  const { isCartOpen } = useAppSelector(state => state.cart)


  return (
    <div className='navbar'>
      <NavLink to='/' className="logo">
        <h1>
          Moumerce
        </h1>
      </NavLink>

      <ul className="links">
        <li className="item">
          <Link to="/products?categories=all">
            CATEGORIES
          </Link>
        </li>
        <li className="item">
          <Link to="/products?gender=man">
            MEN
          </Link>
        </li>
        <li className="item">
          <Link to="/products?gender=woman">
            WOMEN
          </Link>
        </li>
        <li className="item">
          <Link to="/products?type=sport">
            SPORT
          </Link>
        </li>
        <li className="item">
          <Link to="/products?type=fashion">
            FASHION
          </Link>
        </li>
      </ul>

      <ul className="icons">
        <li className="item search" onClick={() => dispatch(openSearch())}>
          <AiOutlineSearch />
          <span>Search</span>
        </li>
        <Link to="/authentication">
          <li className="item">
            <AiOutlineUser />
            <span>Sign in</span>
          </li>
        </Link>
        <li className="item" onClick={() => {
          if (isSidebarOpen) return
          dispatch(openCart())
        }} >
          <AiOutlineShoppingCart />
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
    </div>
  )
}

export default Navbar