import { useState, useEffect } from "react"
import { AiOutlineTag } from "react-icons/ai"
import "./TotalBox.scss"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { Link, useNavigate } from "react-router-dom"
import { useCreateOrderMutation } from "../../services/auth"
import { openPopup } from "../../features/popupSlice"

interface TotalBoxProps {
  state?: string
  page?: string
  handleClick?: () => void
  isCartCreated: boolean
  createCartResult: any
  userId: string
}

const TotalBox = ({
  isCartCreated,
  page,
  handleClick,
  userId,
  createCartResult
}: TotalBoxProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [createOrder, _] = useCreateOrderMutation()
  const [voucher, setVoucher] = useState()
  const shippingCost = 8
  const { itemsLength, total } = useAppSelector((state) => state.cart)

  const handleChange = (e: any) => {
    setVoucher(e.target.value)
  }
  useEffect(() => {
    if (isCartCreated) {
      createOrder({ cartId: createCartResult?.data?.cart?._id, user: userId })
      dispatch(
        openPopup({
          message: "Order was created successfully",
          success: true
        })
      )
      setTimeout(() => {
        navigate("/user")
      }, 2000)
    }
  }, [])
  return (
    <div className="totalbox">
      <ul className="heading">
        <li className="item">
          <span>
            {itemsLength} {itemsLength > 1 ? "items" : "item"}
          </span>
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
        <input
          type="text"
          name="voucher"
          value={voucher || ""}
          onChange={handleChange}
          placeholder="Enter your promo code here"
        />
      </div>
      <div className="checkout-btn">
        <Link to="/checkout">
          <button onClick={handleClick}>
            {page !== "checkout" ? "Proceed to checkout" : "Submit your order"}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TotalBox
