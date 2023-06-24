import { AiOutlineDown, AiOutlineHeart } from 'react-icons/ai'
import './TopSection.scss'

const TopSection = () => {
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
        <li className="item">
          <AiOutlineHeart />
          Wishlist
        </li>
      </ul>
    </div>
  )
}

export default TopSection