import { useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineDown, AiOutlineLeft, AiOutlineTag, AiOutlineUp } from 'react-icons/ai'
import './CartPage.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { calculateTotal, decreaseQuantity, getCart, increaseQuantity, removeItem, setCart } from '../../features/cartSlice'

const Cart = () => {
  const { products, total, itemsLength } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const [voucher, setVoucher] = useState('')


  useEffect(() => {
    dispatch(getCart())
    dispatch(calculateTotal())
  }, [total])


  const handleChange = (e: any) => {
    setVoucher(e.target.value)
  }
  const handleSetCartCalcTotal = () => {
    dispatch(setCart())
    dispatch(calculateTotal())
  }

  return (
    <div className="cart-page">
      <div className="top">
        Shopping cart
      </div>

      <div className="bottom">
        {products?.length === 0 ? (
          <span className='empty-cart-span'>There are no items in your cart</span>
        ) : (
          <>
            <ul className="left">
              {products?.map((product, index) => (
                <li className="item" key={index}>
                  <div className="img-title">
                    <img src={product.images[0]} alt="" />
                    <span>{product.title} </span>
                  </div>
                  <div className="item-wrapper">
                    <div className="price">${product.price} </div>
                    <div className="amount-btns">
                      <span>{product.quantity} </span>
                      <div className="up-down-wrapper">
                        <button onClick={() => {
                          dispatch(increaseQuantity({ product: product }))
                          handleSetCartCalcTotal()
                        }}>
                          <AiOutlineUp />
                        </button>
                        <button onClick={() => {
                          dispatch(decreaseQuantity(product))
                          handleSetCartCalcTotal()
                        }}>
                          <AiOutlineDown />
                        </button>
                      </div>
                    </div>
                    <div className="total">
                      ${product.price * product.quantity}
                    </div>
                    <div className="delete" onClick={() => {
                      dispatch(removeItem({ _id: product._id }))
                      handleSetCartCalcTotal()
                    }} >
                      <AiOutlineDelete />
                    </div>
                  </div>
                </li>
              ))}
              <div className="continue-wrapper">
                <Link to="/products">
                  <button>
                    <AiOutlineLeft />
                    <span>Continue shopping</span>
                  </button>
                </Link>
              </div>
            </ul>
            <div className="right">
              <ul className="heading">
                <li className="item">
                  <span>{itemsLength} {itemsLength > 1 ? 'items' : 'item'}</span>
                  <span>${total !== null ? total : ""}</span>
                </li>
                <li className="item">
                  <span>Shipping</span>
                  <span>$8</span>
                </li>
              </ul>
              <div className="middle">
                <div className="header">
                  <span>Total</span>
                  <span>${total + 8}</span>
                </div>
              </div>
              <div className="voucher">
                <AiOutlineTag />
                <input type="text" name="voucher" value={voucher || ""} onChange={handleChange} placeholder='Enter your promo code here' />
              </div>
              <div className="checkout">
                <Link to='/prodcuts' >
                  <button>Proceed to checkout </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div >
  )
}

export default Cart