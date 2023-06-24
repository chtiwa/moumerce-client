import './Featured.scss'
import Products from '../../components/products/Products'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="title">
        <h2>Our finest selection</h2>
        <hr />
        <p>From Over 300 items</p>
      </div>
      <Products />
    </div>
  )
}

export default Featured