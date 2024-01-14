import { useState } from "react";
import AdminLogin from "./components/admin/AdminLogin";
import Home from "./components/public/Home";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import ProductDetailDesign from "./design/ProductDetailDesign";
import AllOrdersDesign from "./design/AllOrdersDesign";
import OrderDetailDesign from "./design/OrderDetailDesign";
import MyReviewDesign from "./design/MyReviewDesign";
import Cart from "./components/product/Cart";
import UserProfileDesign from "./design/UserProfileDesign";
import UpdateProfile from "./components/user/UpdateProfile";
import UserProfile from "./components/user/UserProfile";
import ChangePassword from "./components/user/ChangePassword";
import UpdateAvatar from "./components/user/UpdateAvatar";
import SpeedDial from "./components/utils/SpeedDial";
import AdminProfile from "./components/admin/AdminProfile";
import AdminAddProduct from "./components/admin/AdminAddProduct";
import AdminUsers from "./components/admin/AdminUsers.jsx"
import AdminUpdateOrder from "./components/admin/AdminUpdateOrder.jsx";
import AllOrders from "./components/order/AllOrders.jsx";
import AdminOrders from "./components/admin/AdminOrders.jsx";
import AdminUpdateProduct from "./components/admin/AdminUpdateProduct.jsx";
import AdminProducts from "./components/admin/AdminProducts.jsx"
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import EletronicProduct from "./components/product/soloproduct/EletronicProduct.jsx";
import SoloProduct from "./components/product/soloproduct/SoloProduct.jsx";
import FilterProduct from "./components/public/FilterProduct.jsx";

function App() {



  return (
    <>                    
 
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <ProductDetailDesign/> */}
     {/* <EletronicProduct/> */}
     <FilterProduct/>
     <SoloProduct/>

      {/* <AllOrders/> */}
      {/* <OrderDetailDesign/> */}
      {/* <MyReviewDesign/> */}
      {/* <Cart/> */}
      {/* <UserProfile/> */}
     {/* <UpdateProfile/> */}
     {/* <ChangePassword/> */}
     {/* <UpdateAvatar/> */}
     {/* <SpeedDial/> */}

      {/* <AdminLogin/> */}
     {/* <AdminProfile/> */}
     {/* <AdminAddProduct/> */}
     {/* <AdminUsers/> */}
      {/* <AdminUpdateOrder/> */}
      {/* <AdminOrders/> */}
      {/* <AdminUpdateOrder/> */}
      {/* <AdminUpdateProduct/> */}
      {/* <AdminProducts/> */}
      {/* <AdminDashboard/> */}


    

    
    </>
  );
}

export default App;
