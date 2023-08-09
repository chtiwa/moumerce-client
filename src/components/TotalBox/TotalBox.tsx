import { useState, useEffect } from 'react'
import { AiOutlineTag } from 'react-icons/ai'
import './TotalBox.scss'
import { useAppSelector } from '../../features/hooks'
import { Link } from 'react-router-dom'

interface TOtalBoxProps {
  state?: string
  page?: string
  handleClick?: () => void
}

const TotalBox = ({ state, page, handleClick }: TOtalBoxProps) => {
  const [voucher, setVoucher] = useState()
  const [shippingCost, setShippingCost] = useState(0)
  const { itemsLength, total } = useAppSelector((state) => state.cart)

  const handleChange = (e: any) => {
    setVoucher(e.target.value)
  }

  useEffect(() => {
    console.log(state)
    if (state === "Alger") {
      setShippingCost(5)
    }
    setShippingCost(8)
  }, [state, setShippingCost])

  return (
    <div className="totalbox">
      <ul className="heading">
        <li className="item">
          <span>{itemsLength} {itemsLength > 1 ? 'items' : 'item'}</span>
          <span>${total !== null ? total : ""}</span>
        </li>
        <li className="item">
          <span>Shipping</span>
          <span>${shippingCost}</span>
        </li>
      </ul>
      <div className="middle">
        <div className="header">
          <span>Total</span>
          <span>${total + shippingCost}</span>
        </div>
      </div>
      <div className="voucher">
        <AiOutlineTag />
        <input type="text" name="voucher" value={voucher || ""} onChange={handleChange} placeholder='Enter your promo code here' />
      </div>
      <div className="checkout-btn">
        <Link to='/checkout' >
          <button onClick={handleClick} >{page !== 'checkout' ? 'Proceed to checkout' : 'Submit your order'}</button>
        </Link>
      </div>
    </div>
  )
}

export default TotalBox