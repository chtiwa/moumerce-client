import Products from "../../components/products/Products"
import Filters from "./Filters"
import Pagination from "./Pagination"
import './ProductsPage.scss'

const ProductsPage = () => {
  return (
    <div className="products">
      <div className="products-title">
        Tops
      </div>
      <div className="products-image">
        <img src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
      </div>
      <Filters />
      <Products />
      <Pagination />

    </div>
  )
}

export default ProductsPage