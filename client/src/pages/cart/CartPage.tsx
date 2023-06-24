import './CartPage.css'
import { AiOutlineShoppingCart, AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai'

const Cart = () => {
  const products = [
    { img: "/images/home/cart-product.webp", size: "m", title: "Blue shirt", price: 20, quantity: 2 },
    { img: "/images/home/cart-product.webp", size: "m", title: "Blue shirt", price: 20, quantity: 2 },
    { img: "/images/home/cart-product.webp", size: "m", title: "Blue shirt", price: 20, quantity: 2 },
  ]
  return (
    <div className='cart'>
      <div className="cart-container">
        <div className="cart-products">
          <div className="cart-products-container">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className='table-td'>
                      <AiOutlineDelete className="td-delete-icon" />
                      <img src={product.img} alt="" />
                      <div className="table-td-info">
                        <h4>{product.title}</h4>
                        <h4>{product.size}</h4>
                      </div>
                    </td>
                    <td className='table-td-price' >{product.price}$ </td>
                    <td className='table-td-quantity'>
                      <button className="table-td-quantity-button-decrease"><AiOutlineMinus /></button>
                      <p className="table-td-quantity-quantity">{product.quantity} </p>
                      <button className="table-td-quantity-button-increase"><AiOutlinePlus /></button>
                    </td>
                    <td className='table-td-amount'>{product.quantity * product.price}$</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-prodcuts-buttons">
            <button className="cart-prodcuts-buttons-checkout">Proceed to checkout</button>
            <button className="cart-prodcuts-buttons-continue">Continue shopping</button>
          </div>
        </div>
        <div className="cart-info">
          <div className="cart-heading">
            There are 6 items in your cart
          </div>
          <div className="cart-info-total-container">
            <div className="cart-info-section">
              <h4 className="cart-info-total">
                Total:
              </h4>
              <div className="cart-info-total-amount">
                200$
              </div>
            </div>
            <div className="cart-info-section">
              <h4 className="cart-info-total">
                Shipping fee:
              </h4>
              <div className="cart-info-total-amount">
                The fee will be calculated based on delivery location
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="cart-suggested-products">
        Products you may also like
      </div>
    </div>
  )
}

export default Cart