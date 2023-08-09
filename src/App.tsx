import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import HomePage from './pages/home/HomePage'
import Layout from './Layout'
import AuthPage from './pages/authentication/AuthPage'
// import VerifyAccount from './pages/verifyAccount/VerifyAccount'
import Fallback from './Fallback'
import CartPage from './pages/cart/CartPage'
import Favorites from './pages/favorites/Favorites'
import ProductsPage from './pages/products/ProductsPage'
import ProductPage from './pages/product/ProductPage'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import User from './pages/user/User'
import CheckoutPage from './pages/checkout/CheckoutPage'
// import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<Fallback />} ><HomePage /></Suspense>
          } />
          <Route path='/authentication' element={
            <Suspense fallback={<Fallback />} ><AuthPage /></Suspense>
          } />
          <Route path='/cart' element={
            <Suspense fallback={<Fallback />} ><CartPage /></Suspense>
          } />
          <Route path='/products' element={
            <Suspense fallback={<Fallback />} ><ProductsPage /></Suspense>
          } />
          <Route path='/product/:id' element={
            <Suspense fallback={<Fallback />} ><ProductPage /></Suspense>
          } />
          <Route path='/favorites' element={
            <Suspense fallback={<Fallback />} ><Favorites /></Suspense>
          } />
          <Route path='/user' element={
            <Suspense fallback={<Fallback />} >
              <User />
            </Suspense>
          } />
          <Route path='/checkout' element={
            <Suspense fallback={<Fallback />} >
              <CheckoutPage />
            </Suspense>
          } />
          <Route path='/fallback' element={<Fallback />} />
          <Route path="/forgot-password" element={
            <Suspense fallback={<Fallback />} ><ForgotPassword /></Suspense>
          } />
          {/* <Route path="/verify-account" element={
            <Suspense fallback={<Fallback />} ><VerifyAccount /></Suspense>
          } /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App