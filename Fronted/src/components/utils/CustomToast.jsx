import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CustomToast() {
  return (
     
    <div>
        
        <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition: Bounce
    />
  </div>

  )
}

export default CustomToast




// import { toast } from "react-toastify";

// const notify = () => toast("Login First 😊");
// btn onclick={notify}
{/* <CustomToast> */}