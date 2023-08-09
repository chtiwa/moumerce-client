import Loader from "../../components/loader/Loader";
import "./Orders.scss";
import { useGetOrdersQuery } from "../../services/auth";
import moment from "moment";

const Orders = () => {
  const { data, isLoading, isError } = useGetOrdersQuery();

  if (isLoading && !isError) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  return (
    !isLoading &&
    !isError && (
      <ul className="orders">
        {data.orders.map((order: any) => (
          <li className="order" key={order._id}>
            <span>{order._id}</span>
            <span>{moment(order.createAt).fromNow()}</span>
          </li>
        ))}
      </ul>
    )
  );
};

export default Orders;
