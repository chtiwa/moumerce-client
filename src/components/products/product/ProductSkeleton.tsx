import './ProductSkeleton.scss'

const ProductSkeleton = () => {
  return (
    <div className='product-skeleton'>
      <div className="img"></div>
      <div className="info">
        <div className="title"></div>
        <div className="price"></div>
      </div>
    </div>
  )
}

export default ProductSkeleton