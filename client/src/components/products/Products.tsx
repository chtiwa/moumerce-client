import './Products.scss'
import Product from './product/Product'
// import { IProducts } from '../../pages/products/ProductsPage'
import { TProduct } from '../../services/types/Product'
import ProductSkeleton from './product/ProductSkeleton'

interface IProductsProps {
  isLoading: boolean
  products: TProduct[]
}

const Products = ({ products, isLoading }: IProductsProps) => {
  return (
    <div className='products-component'>
      {isLoading && (<>
        {Array.from([0, 1, 2, 3, 4, 5, 6]).map((index) => (
          <ProductSkeleton key={index} />
        ))}
      </>)}
      {!isLoading && products?.map((product) => (
        <Product {...product} key={product._id} />
      ))}
    </div>
  )
}

export default Products