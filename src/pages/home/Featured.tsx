import './Featured.scss'
import Products from '../../components/products/Products'
import { useGetFeaturedProductsQuery } from '../../services/products'

const Featured = () => {
  const { data, isLoading,isError } = useGetFeaturedProductsQuery()

  return !isLoading && (
    <div className='featured'>
      <div className="title">
        <h2>Our finest selection</h2>
        <hr />
        <p>From Over 300 items</p>
      </div>
      {!isError && (
        <Products products={data.products} isLoading={isLoading} />
      )}
    </div>
  )
}

export default Featured