import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/public/Home.jsx'
import { Provider, useSelector } from 'react-redux'
import { store } from './components/store/store.js'
import UserProfile from './components/user/UserProfile.jsx'
import UpdateAvatar from './components/user/UpdateAvatar.jsx'
import UpdateProfile from './components/user/UpdateProfile.jsx'
import ChangePassword from './components/user/ChangePassword.jsx'
import Signup from './components/user/Signup.jsx'
import Login from './components/user/Login.jsx'
import AllOrders from './components/order/AllOrders.jsx'
import OrderDetails from "./components/order/OrderDetails.jsx"
import ProductDetails from "./components/product/ProductDetails.jsx"
import Cart from './components/product/Cart.jsx'
import MyReview from "./components/product/MyReview.jsx"
import AdminAddProduct from './components/admin/AdminAddProduct.jsx'
import AdminLogin from './components/admin/AdminLogin.jsx'
import AdminDashboard from './components/admin/AdminDashboard.jsx'
import AdminOrders from './components/admin/AdminOrders.jsx'
import AdminProducts from './components/admin/AdminProducts.jsx'
import AdminProfile from './components/admin/AdminProfile.jsx'
import AdminUpdateOrder from './components/admin/AdminUpdateOrder.jsx'
import AdminUpdateProduct from './components/admin/AdminUpdateProduct.jsx'
import AdminUsers from './components/admin/AdminUsers.jsx'
import NavBar from './components/utils/NavBar.jsx'
import Aboutus from "./components/public/Aboutus.jsx"
import Contactus from "./components/public/Contactus.jsx"
import PageNotFound from "./components/utils/PageNotFound.jsx"
import SoloProduct from './components/product/soloproduct/SoloProduct.jsx'
import SearchBar from './components/utils/SearchBar.jsx'
import GridProduct from './components/product/soloproduct/GridProduct.jsx'
import EletronicProduct from './components/product/soloproduct/EletronicProduct.jsx'
import AdminProductsDesign from './design/AdminProductsDesign.jsx'
import AdminProductDetail from './components/admin/AdminProductDetail.jsx'
import { selectCurrentAdmin } from './components/store/redux-features/adminSlice.js'
import AdminFeedback from './components/admin/AdminFeedback.jsx'

function App() {

 
  return (
    <Provider store={store} >
    <BrowserRouter>

    <NavBar/>
   <SearchBarBasedOnRoute/>
    
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<Aboutus/>} />
    <Route path="/contact" element={<Contactus/>} />
    <Route path="/*" element={<PageNotFound/>} />
    <Route path="/search/:product" element={<SoloProduct/>} />
    <Route path="/category/:category" element={<GridProduct/>} />
    <Route path="/searchDetail/:category" element={<EletronicProduct/>} />
    <Route path="/searchBar/:input" element={<SoloProduct/>} />

    {/* USER */}
    <Route path='/sign-up' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/profile" element={<UserProfile/>}  />
    <Route path='/update-avatar' element={<UpdateAvatar/>} />
    <Route path='/update-profile' element={<UpdateProfile/>} />
    <Route path='/update-password' element={<ChangePassword/>} />

    {/* ORDER */}
    <Route path="/order" element={<AllOrders/>} />
    <Route path="/order-details/:orderId" element={<OrderDetails/>}   />

    {/* PRODUCT */}
    <Route path="/product-details/:productId" element={<ProductDetails/>}  />
    <Route path="/cart" element={<Cart/>}  />
    <Route path="/myreviews" element={<MyReview/>}  />

    {/* ADMIN */}
    <Route path="/admin/login" element={<AdminLogin/>} />
    <Route path="/admin/profile" element={<AdminProfile/>} />
    <Route path="/admin/dashboard" element={<AdminDashboard/>} />
    <Route path="/admin/add-product" element={<AdminAddProduct/>} />
    <Route path="/admin/orders" element={<AdminOrders/>} />
    <Route path="/admin/products" element={<AdminProducts/>} />
    <Route path="/admin/productDetail/:productId" element={<AdminProductDetail/>} />
    <Route path="/admin/update-order/:orderId" element={<AdminUpdateOrder/>} />
    <Route path="/admin/update-product/:productId" element={<AdminUpdateProduct/>} />
    <Route path="/admin/users" element={<AdminUsers/>} />
    <Route path="/admin/feedback" element={<AdminFeedback/>} />

    </Routes>
    </BrowserRouter>
   </Provider>

  )
}

function SearchBarBasedOnRoute(){

  const admin = useSelector(selectCurrentAdmin)
  const location = useLocation()
  const pathsWithoutSearchBar = ['/login', '/sign-up','/order','/order-details/:orderId','/orderId','/cart', '/myreviews',"/profile",'/update-avatar','/update-profile','/update-password'];
  const shouldRenderSearchBar = !pathsWithoutSearchBar.includes(location.pathname);

  if(admin) return null

  return shouldRenderSearchBar ? <SearchBar /> : null;

}



export default App


