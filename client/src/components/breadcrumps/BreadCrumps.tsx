import './BreadCrumps.scss'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumps = () => {
  const location = useLocation()

  if (location.pathname === "/") {
    return <></>
  }

  // console.log(location.pathname.split('/'))
  let breadcrumps
  if (location.pathname.split("/")[1] === "product") {
    breadcrumps = <>
      <Link to='/products'>
        Products
      </Link>
      <span>/</span>
      {/* i need to get the product's title from redux store  */}
      <span>Product's title</span>
    </>
  } else if (location.pathname.split("/")[1] === "forgot-password") {
    breadcrumps = <Link to='/forgot-password'>
      Forgot password
    </Link>
  } else if (location.pathname.split('/')[1] === "cart") {
    breadcrumps = <>
      <Link to="/products">Products</Link>
      <span>/</span>
      <Link to="/cart">Cart</Link>
    </>
  }
  else if (location.pathname.split('/')[1] === "user") {
    breadcrumps = <>
      <Link to="/user">Your account</Link>
    </>
  } else {
    const firstCharacterAsCapital = location.pathname.split('/')[1].charAt(0).toUpperCase()
    breadcrumps = <Link to={location.pathname.split('/')[1]}>
      {firstCharacterAsCapital + location.pathname.split('/')[1].slice(1)}
    </Link>
  }
  return (
    <div className='breadcrumps'>
      <Link to="/">Home</Link>
      <span>/</span>
      {breadcrumps}
    </div>
  )
}

export default BreadCrumps