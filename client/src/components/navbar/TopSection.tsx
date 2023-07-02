import { AiOutlineDown, AiOutlineHeart } from 'react-icons/ai'
import './TopSection.scss'
import { Link } from 'react-router-dom'

const TopSection = () => {
  const user = true
  const wishlist = [0, 0, 0]
  return (
    <div className='top-section'>
      <ul className="left">
        <li className="item">Sitemap</li>
        <hr />
        <li className="item">Contact</li>
      </ul>
      <ul className="right">
        <li className="item">
          English
          <AiOutlineDown />
        </li>
        <hr />
        <li className="item">
          USD
          <AiOutlineDown />
        </li>
        <hr />
        <Link to='/user'>
          <li className="item">
            <AiOutlineHeart />
            Wishlist ({user ? wishlist.length : 0})
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default TopSection