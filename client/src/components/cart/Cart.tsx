import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cart.scss'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { closeCart, removeItem } from '../../features/cartSlice'
import { AiOutlineClose, AiOutlineDelete, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { setCart, getCart, increaseQuantity, decreaseQuantity, calculateTotal } from '../../features/cartSlice'

const Cart = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isCartOpen, total, products, itemsLength } = useAppSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getCart())
    dispatch(calculateTotal())
  }, [total])

  useEffect(() => { })

  const handleSetCartCalcTotal = () => {
    dispatch(setCart())
    dispatch(calculateTotal())
  }

  const handleClickBtn = (to: string) => {
    dispatch(closeCart())
    navigate(to)
  }

  return (
    <div className={`${isCartOpen ? 'show-cart' : 'hide-cart'}`}>
      <div className="heading">
        {itemsLength > 0 ? (<span>Your cart</span>) : (<span>Your cart is empty</span>)}
        <span onClick={() => dispatch(closeCart())} >
          <AiOutlineClose />
        </span>
      </div>

      <ul className="list">
        {products?.length > 0 && products.map((product, index) => (
          <li className="item" key={index}>
            <div className="image">
              <img src={product.images[0]} alt="" />
            </div>

            <div className="info">
              <div className="title">
                {product.title}
              </div>

              <div className="extra-info">
                <div className="amount-btns">
                  <div className="amount">
                    {product.quantity}
                  </div>
                  <div className="btns">
                    <span onClick={() => {
                      dispatch(increaseQuantity({ product: product }))
                      handleSetCartCalcTotal()
                    }}>
                      <AiOutlineUp />
                    </span>
                    <span onClick={() => {
                      dispatch(decreaseQuantity(product))
                      handleSetCartCalcTotal()
                    }}>
                      <AiOutlineDown />
                    </span>
                  </div>
                </div>

                <div className="price">
                  <span className="x" >x</span>
                  <span>${product.price} </span>
                </div>

                <div className="delete-btn" onClick={() => {
                  dispatch(removeItem({ _id: product._id }))
                  handleSetCartCalcTotal()
                }}>
                  <AiOutlineDelete />
                </div>
              </div>

            </div>
          </li>
        ))}
      </ul>

      {itemsLength > 1 && (
        <>
          <div className="pricing-info">
            <div className="items">
              <span>{itemsLength} {itemsLength === 1 ? "item" : "items"}</span>
              <span>${total} </span>
            </div>
            <div className="shipping">
              <span>Shipping</span>
              <span>$8</span>
            </div>
          </div>

          <div className="total">
            <span>Total :</span>
            <span>${total + 8}</span>
          </div>

          <div className="buttons">
            <button className='checkout' onClick={() => handleClickBtn('checkout')}>
              Checkout
            </button>
            <button className="cart" onClick={() => handleClickBtn('cart')}>
              Cart
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart