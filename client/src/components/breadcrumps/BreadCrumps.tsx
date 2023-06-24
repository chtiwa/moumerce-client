import './BreadCrumps.scss'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumps = () => {
  const location = useLocation()

  if (location.pathname === "/") {
    return <></>
  }
  const firstCharacterAsCapital = location.pathname.split('/')[1].charAt(0).toUpperCase()
  return (
    <div className='breadcrumps'>
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to={`${location.pathname.split('/')[1]}`}>
        {firstCharacterAsCapital + location.pathname.slice(2)}
      </Link>
    </div>
  )
}

export default BreadCrumps