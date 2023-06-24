import './Products.scss'
import Product from './product/Product'

const Products = () => {
  // we can pass a bunch f products here and they will be rendered
  return (
    <div className='products-component'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default Products