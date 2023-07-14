import { useState, useEffect } from 'react'
import { AiOutlineDown, AiOutlineHeart } from 'react-icons/ai'
import './TopSection.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../features/hooks'

const TopSection = () => {
  const { isLoggedIn } = useAppSelector(state => state.auth)
  const [productsLength, setProductsLength] = useState(0)
  const { products } = useAppSelector(state => state.wishlist)

  useEffect(() => {
    setProductsLength(products.length)
  }, [products])

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
        <Link to={`${isLoggedIn ? '/user' : '/authentication'}`}>
          <li className="item">
            <AiOutlineHeart />
            Wishlist ({productsLength})
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default TopSection