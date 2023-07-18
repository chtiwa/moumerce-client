import Loader from '../../components/loader/Loader'
import './Orders.scss'
import { useGetOrdersQuery } from '../../services/auth'

const Orders = () => {
  const { data, isLoading, isError } = useGetOrdersQuery()

  if (isLoading && !isError) {
    return <div className="loader-container">
      <Loader />
    </div>
  }
  return !isLoading && !isError && (
    <ul className="orders">
      {data.orders.map((order) => (
        <li className="item" key={order._id} >
          <h1>
            {order.user}
          </h1>
        </li>
      ))}
    </ul>
  )
}

export default Orders