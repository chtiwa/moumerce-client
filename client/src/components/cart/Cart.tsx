import './Cart.scss'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { closeCart } from '../../features/cartSlice'
import { AiOutlineClose, AiOutlineDelete, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const Cart = () => {
  const dispatch = useAppDispatch()
  const { isCartOpen } = useAppSelector((state) => state.cart)

  const data = [
    { title: "Blue Shirt", price: 30, quantity: 2, image: "https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60" },
    { title: "Blue Shirt", price: 30, quantity: 2, image: "https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60" },
    { title: "Blue Shirt", price: 30, quantity: 2, image: "https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60" }
  ]

  return (
    <div className={`${isCartOpen ? 'show-cart' : 'hide-cart'}`}>
      <div className="heading">
        {data.length > 0 ? (<span>Your cart</span>) : (<span>Your cart is empty</span>)}
        <span onClick={() => dispatch(closeCart())} >
          <AiOutlineClose />
        </span>
      </div>

      <ul className="list">
        {data.map((item,index) => (
          <li className="item" key={index}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>

            <div className="info">
              <div className="title">
                {item.title}
              </div>

              <div className="extra-info">
                <div className="amount-btns">
                  <div className="amount">
                    {item.quantity}
                  </div>
                  <div className="btns">
                    <span><AiOutlineUp /></span>
                    <hr />
                    <span><AiOutlineDown /></span>
                  </div>
                </div>

                <div className="price">
                  <span className="x" >x</span>
                  <span>$60</span>
                </div>

                <div className="delete-btn">
                  <AiOutlineDelete />
                </div>
              </div>

            </div>
          </li>
        ))}
      </ul>

      <div className="pricing-info">
        <div className="items">
          <span>2 {data.length === 1 ? "item" : "items"}</span>
          <span>$60</span>
        </div>
        <div className="shipping">
          <span>Shipping</span>
          <span>$7</span>
        </div>
      </div>

      <div className="total">
        <span>Total :</span>
        <span>$67</span>
      </div>

      <div className="buttons">
        <button className='checkout'>Checkout</button>
        <button className='cart'>Cart</button>
      </div>

    </div>
  )
}

export default Cart