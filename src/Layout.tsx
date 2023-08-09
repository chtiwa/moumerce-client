import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import Sidebar from './components/sidebar/Sidebar'
import Newsletter from './components/newsletter/Newsletter'
import TopSection from './components/navbar/TopSection'
import Search from './components/navbar/Search'
import BreadCrumps from './components/breadcrumps/BreadCrumps'
import Popup from './components/popup/Popup'

const Layout = () => {
  return (
    <>
      <TopSection />
      <Navbar />
      <BreadCrumps />
      <Outlet />
      <Cart />
      <Search />
      <Popup />
      <Sidebar />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Layout