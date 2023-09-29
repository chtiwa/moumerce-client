import { useNavigate, useParams } from "react-router-dom"
import "./Order.scss"
import { useEffect } from "react"
import { useGetOrderQuery } from "../../services/orders"
import Loader from "../../components/loader/Loader"

const Order = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError } = useGetOrderQuery(id)

  useEffect(() => {
    console.log(id)
    console.log(data)
  }, [isLoading])

  if (isLoading && !isError) {
    return (
      <div className="loader-container">
        a
        <Loader />
      </div>
    )
  }
  return (
    !isLoading &&
    !isError && (
      <div className="order">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Product Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Thumbnail</th>
            </tr>
          </thead>

          <tbody>
            {data.order.cart.items.map((item: any) => (
              <tr key={item.product._id}>
                <td>{item.product.title} </td>
                <td>{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <img
                    src={item.product.images[0]}
                    alt=""
                    className="product-image"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">Total: {data.order.cart.total}$</div>
        <button onClick={() => navigate(-1)} className="btn">
          Go back
        </button>
      </div>
    )
  )
}

export default Order
