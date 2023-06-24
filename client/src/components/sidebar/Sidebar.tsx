import { useAppSelector, useAppDispatch } from '../../features/hooks'
import './Sidebar.scss'
import { closeSidebar } from '../../features/sidebarSlice'
import { AiOutlineClose, AiOutlineRight, AiOutlineUser } from 'react-icons/ai'

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
        <li className="item">
          <span>Categories</span>
          <AiOutlineRight />
        </li>
        <li className="item">
          <span>Men</span>
          <AiOutlineRight />
        </li>
        <li className="item">
          <span>Women</span>
          <AiOutlineRight />
        </li>
        <li className="item">
          <span>Sport</span>
          <AiOutlineRight />
        </li>
        <li className="item">
          <span>Fashion</span>
          <AiOutlineRight />
        </li>
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