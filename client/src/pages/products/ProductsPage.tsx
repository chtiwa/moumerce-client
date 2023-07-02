import { useEffect, useState } from "react"
import Products from "../../components/products/Products"
import Filters from "./Filters"
import Pagination from "./Pagination"
import './ProductsPage.scss'
import { useLocation } from "react-router-dom"

const ProductsPage = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('Tops')

  const props = {
    currentPage: 2,
    totalCount: 50,
    siblingCount: 2,
    pageSize: 5
  }

  useEffect(() => {
    // const searchParams = new URLSearchParams(location.search)
    let firstCapitalLetter = location.search.split("?")[1].split('=')[1].charAt(0).toUpperCase()
    setSearchQuery(firstCapitalLetter + location.search.split("?")[1].split('=')[1].slice(1))
    // const query = searchParams.get('name') || ''
    // setSearchQuery(query)
  }, [location.search])

  return (
    <div className="products">
      <div className="products-title">
        {searchQuery}
      </div>
      <div className="products-image">
        <img src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
      </div>
      <Filters />
      <Products />
      <Pagination {...props} />
    </div>
  )
}

export default ProductsPage