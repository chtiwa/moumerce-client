import Loader from "../../components/loader/Loader"
import "./Orders.scss"
import { useGetOrdersQuery } from "../../services/auth"
import moment from "moment"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Orders = () => {
  const navigate = useNavigate()
  const { data, isLoading, isError } = useGetOrdersQuery()

  useEffect(() => {
    console.log(data)
  }, [isLoading])

  if (isLoading && !isError) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    )
  }

  return (
    !isLoading &&
    !isError && (
      <>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Ordered at</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.orders.map((order: any) => (
              <tr
                key={order._id}
                onClick={() => navigate(`/order/${order._id}`)}
              >
                <td>{order._id} </td>
                <td>{moment(order.createdAt.toString()).fromNow()}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  )
}

export default Orders
