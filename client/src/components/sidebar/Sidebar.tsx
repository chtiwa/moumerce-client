import { useAppSelector, useAppDispatch } from '../../features/hooks'
import './Sidebar.scss'
import { closeSidebar } from '../../features/sidebarSlice'
import { AiOutlineClose, AiOutlineRight, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector(state => state.sidebar)
  const dispatch = useAppDispatch()

  return (
    <div className={`${isSidebarOpen ? "show-sidebar" : "hide-sidebar"}`}>
      <div className="top">
        <span onClick={() => dispatch(closeSidebar())}>
          <AiOutlineClose />
        </span>
      </div>
      <ul className="middle">
        <Link to="/products?categories=all" onClick={() => dispatch(closeSidebar())}>
          <li className="item">
            <span>
              Categories
            </span>
            <AiOutlineRight />
          </li>
        </Link>

        <Link to="/products?gender=man" onClick={() => dispatch(closeSidebar())}>
          <li className="item">
            <span>Men</span>
            <AiOutlineRight />
          </li>
        </Link>

        <Link to="/products?gender=woman" onClick={() => dispatch(closeSidebar())}>
          <li className="item">
            <span>Women</span>
            <AiOutlineRight />
          </li>
        </Link>

        <Link to="/products?type=sport" onClick={() => dispatch(closeSidebar())}>
          <li className="item">
            <span>Sport</span>
            <AiOutlineRight />
          </li>
        </Link>

        <Link to="/products?type=fashion" onClick={() => dispatch(closeSidebar())} >
          <li className="item">
            <span>Fashion</span>
            <AiOutlineRight />
          </li>
        </Link>
      </ul>
      <div className="bottom">
        <div>
          <span>English</span>
          <span>USD$</span>
        </div>
        <div>
          <AiOutlineUser />
          <span>Sign in</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar