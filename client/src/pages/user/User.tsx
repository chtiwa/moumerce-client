import { AiOutlineDelete, AiOutlineHeart, AiOutlineHistory, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import './User.scss'
import { MdLogout, MdOutlineLocationOn } from 'react-icons/md'

const User = () => {
  const data = [
    { title: "Blue Shirt", price: 30, quantity: 2, image: "https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60" },
    { title: "Blue Shirt", price: 30, quantity: 2, image: "https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60" },
    { title: "Blue Shirt", price: 30, quantity: 2, image: "https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60" }
  ]

  return (
    <div className='user'>
      <div className="top">
        Your account
      </div>
      <div className="bottom">
        <ul className="left">
          <li className="item">
            <span><AiOutlineUser /></span>
            <span>Information</span>
          </li>
          <li className="item">
            <span><MdOutlineLocationOn /></span>
            <span>Add first address</span>
          </li>
          <li className="item">
            <span><AiOutlineHistory /></span>
            <span>Order history</span>
          </li>
          <li className="item">
            <span><AiOutlineHeart /></span>
            <span>Wishlist</span>
          </li>
          <li className="item">
            <span><MdLogout /> </span>
            <span>Log out</span>
          </li>
        </ul>
        <ul className="right">
          {data.map((item, index) => (
            <li className="item" key={index}>
              <img src={item.image} alt="" />
              <div className="title">{item.title} </div>
              <div className="price">${item.price} </div>
              <div className="quantity">x {item.quantity} </div>
              <button className="add-to-cart">
                <AiOutlineShoppingCart />
                <span>Add to cart</span>
              </button>
              <div className="delete-btn">
                <AiOutlineDelete />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default User