import { useEffect, useState } from "react"
import Products from "../../components/products/Products"
import Filters from "./Filters"
import Pagination from "./Pagination"
import "./ProductsPage.scss"
import { useLocation } from "react-router-dom"
import { useGetProductsQuery } from "../../services/products"
import { TProduct } from "../../services/types/Product"
import { useAppSelector } from "../../features/hooks"

export interface IProducts {
  products: TProduct[]
}

const ProductsPage = () => {
  const location = useLocation()
  const { showFilteredResults, products } = useAppSelector(
    (state) => state.products
  )
  const [searchQuery, setSearchQuery] = useState("Tops")
  const [info, setInfo] = useState({
    currentPage: 1,
    totalPages: 0,
    siblingCount: 2,
    pageSize: 10
  })
  const { data, isLoading } = useGetProductsQuery(info.currentPage)

  useEffect(() => {
    if (!isLoading) {
      setInfo({ ...info, totalPages: data.totalPages })
    }
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [isLoading, info.currentPage])

  useEffect(() => {}, [showFilteredResults])

  useEffect(() => {
    if (location.search === "") return
    // const searchParams = new URLSearchParams(location.search)
    // const page = searchParams.get('page')
    // console.log(page)
    let firstCapitalLetter = location?.search
      ?.split("?")[1]
      ?.split("=")[1]
      .charAt(0)
      .toUpperCase()
    setSearchQuery(
      firstCapitalLetter +
        location?.search?.split("?")[1]?.split("=")[1]?.slice(1)
    )
  }, [location.search])

  return (
    <div className="products">
      <div className="products-title">{searchQuery}</div>
      <div className="products-image">
        <img
          src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
        />
      </div>
      <Filters />
      {/* pass the products here */}
      <Products
        products={showFilteredResults ? products : data?.products}
        isLoading={isLoading}
      />
      {/* pass the page (currentPage), totalPages, totalPages here */}
      {!showFilteredResults && !isLoading && info.totalPages > 0 && (
        <Pagination info={info} setInfo={setInfo} />
      )}
    </div>
  )
}

export default ProductsPage
