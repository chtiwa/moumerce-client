import { useState } from 'react'
import { AiOutlineDelete, AiOutlineDown, AiOutlineLeft, AiOutlineTag, AiOutlineUp } from 'react-icons/ai'
import './CartPage.scss'
import { Link } from 'react-router-dom'

const Cart = () => {
  const products = [
    { img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60", size: "m", title: "Blue shirt", price: 20, quantity: 2 },
    { img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60", size: "m", title: "Blue shirt", price: 20, quantity: 2 },
    { img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60", size: "m", title: "Blue shirt", price: 20, quantity: 2 },
  ]

  const [voucher, setVoucher] = useState('')
  const handleChange = (e: any) => {
    setVoucher(e.target.value)
  }

  return (
    <div className="cart-page">
      <div className="top">
        Shopping cart
      </div>

      <div className="bottom">
        {products.length === 0 ? (
          <span className='empty-cart-span'>There are no items in your cart</span>
        ) : (
          <>
            <ul className="left">
              {products.map((product, index) => (
                <li className="item" key={index}>
                  <div className="img-title">
                    <img src={product.img} alt="" />
                    <span>{product.title} </span>
                  </div>
                  <div className="item-wrapper">
                    <div className="price">${product.price} </div>
                    <div className="amount-btns">
                      <span>{product.quantity} </span>
                      <div className="up-down-wrapper">
                        <button><AiOutlineUp /> </button>
                        <button><AiOutlineDown /> </button>
                      </div>
                    </div>
                    <div className="total">
                      ${product.price * product.quantity}
                    </div>
                    <div className="delete">
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
                  <span>3 items </span>
                  <span>$125</span>
                </li>
                <li className="item">
                  <span>Shipping</span>
                  <span>$8</span>
                </li>
              </ul>
              <div className="middle">
                <div className="header">
                  <span>Total</span>
                  <span>$133</span>
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
    </div>
  )
}

export default Cart