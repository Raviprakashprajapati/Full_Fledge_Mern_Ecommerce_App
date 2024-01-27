import React, { useEffect, useState } from "react";
import cartImage from "../../assets/image/cartImage.png"
import cartImage02 from "../../assets/image/cartImage02.png"
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/redux-features/userSlice";
import { cartsUserAPI, decrementProductFromCartAPI, incrementProductFromCartAPI, removeProductFromCartAPI } from "../api/cartApi";
import Loader from "../utils/Loader";
import { getCurrentUserAPI } from "../api/userApi";
import CountDown from "../utils/CountDown";
import { addCartToOrderAPI } from "../api/orderApi";
import { toast } from "react-toastify";
import CustomToast from "../utils/CustomToast";
function Cart() {


  const notifyOutOfStock = () => toast("Product out of Stock");
  const user = useSelector(selectCurrentUser)
  const [cart,setCart] = useState(null)
  const [CountTimer,setCountTimer] = useState(false)
  const [incrementError,setIncrementError] = useState(false)


  //display carts
  useEffect(()=>{
    if(user.cartsId){
      
      cartsUserAPI()
      .then((data)=>{
        console.log("data ",data?.data)
        if(data?.data){

          setCart(data.data)
        }
      })
      .catch((err)=>{
        console.log("error: " + err)
      })

    }
  },[])

  
  const closeCountTimer=()=>{
    setCountTimer(false)
  }


  function handleRemoveCart(cartId){

    if(cartId){
      removeProductFromCartAPI(cartId)
      .then((data)=>{
        setCountTimer(true)
        if(data){

          getCurrentUserAPI(user._id)
          .then((data)=>{
            localStorage.setItem('user',JSON.stringify(data.data))
            // console.log("cart ",data)
            window.location.reload()
          }).catch((err)=>{
            console.log("error",err)
          })

        }

    
    

      })
      .catch((err)=>{
        console.log("error: " + err)
      })
    }

  }

  function handleIncrementCart(productId){
    console.log(productId)
    if(productId){

      incrementProductFromCartAPI({productId})
      .then((data)=>{
        setIncrementError(!incrementError)
        setCountTimer(true)
      
          getCurrentUserAPI(user._id)
          .then((data)=>{
            localStorage.setItem('user',JSON.stringify(data.data))
            // console.log("cart ",data)
            window.location.reload()
          }).catch((err)=>{
            
            console.log("error: ",err)
          })
          
          
        })
        .catch((err)=>{
        setIncrementError(!incrementError)
        console.log("error: " + err)
      })

    }
  }

  function handleDecrementcart(productIdForDecrement){
    console.log(productIdForDecrement)
    if(productIdForDecrement){

      decrementProductFromCartAPI({productIdForDecrement})
      .then((data)=>{
        setCountTimer(true)
        
          getCurrentUserAPI(user._id)
          .then((data)=>{
            localStorage.setItem('user',JSON.stringify(data.data))
            // console.log("cart ",data)
            window.location.reload()
          }).catch((err)=>{
            
            console.log("error",err)
          })
        

      })
      .catch((err)=>{
       
        console.log("error: " + err)
      })

    }
  }
  

  function handlePlaceOrder(){
    if(user.cartsId){

      addCartToOrderAPI()
      .then((data)=>{
          if(data){

            getCurrentUserAPI(user._id)
          .then((data)=>{
            localStorage.setItem('user',JSON.stringify(data.data))
            // console.log("cart ",data)
            window.location.reload()
          }).catch((err)=>{
            
            console.log("error",err)
          })
          
          }
      })
      
    }
  }

  




  return (
    <div>

                    {
                       incrementError?

                       <div onClick={notifyOutOfStock()} >
                       
                      </div>
                      :null
                      }

                      <CustomToast/>
                  
                        

       {/* COUNTDOWN */}
   {CountTimer && <CountDown onClose={closeCountTimer}  />}
        
   <div class="h-screen pt-10">
       
       <div  >
        <img src={cartImage} className="h-20 block m-auto " alt="" />
       <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
       </div>

                 
       
        {
          user.cartsId?.length>=1 && cart?.totalPrice>0 ?

          <>
          {
            cart?    <>
            {/* carts */}
            <div  class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div class="rounded-lg md:w-2/3">

               {
                cart?.products.map((percart,index)=>{
                  return(
                    <>
                     {/* PER CART */}
                <div key={index} class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img
                    src={percart?.productImage}
                    alt="product-image"
                    class="w-auto  rounded-lg h-[7rem] mx-auto sm:mx-0"
                  />

                  {/* cart details */}
                  <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                      <h2 class="text-lg font-bold text-gray-900">
                        {percart?.productName}
                      </h2>
                     
                      <p class="mt-1 text-sm font-semibold text-black">Price : ₹ {percart?.price}</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={()=>handleDecrementcart(percart?.productId)}
                        
                        >
                          {" "}
                          -{" "}
                        </span>
                        <span class="cursor-pointer rounded-l bg-white py-1 px-3.5 duration-100 font-bold ">
                          {" "}
                          {percart?.quantity}{" "}
                        </span>
                       
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={()=>handleIncrementCart(percart?.productId)}
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div class="flex items-center ">
                        <p class=" w-[5rem] cursor-pointer duration-150 bg-red-600 p-2 text-sm text-center text-white"
                        onClick={()=>handleRemoveCart(percart?.productId)}
                        >
                          Remove</p>
                       
                        
                      </div>
                     
                    </div>
                    
                  </div>
                </div>
            

                    </>
                  )
                })
               }

                {/* END of CARTs */}
              </div>


              {/* <!-- Sub total --> */}
              <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                
                
                <hr class="my-4" />
                <div class="flex justify-between">
                  <p class="text-lg font-bold">Total</p>
                  <div class="">
                    <p class="mb-1 text-lg font-bold">₹{cart?.totalPrice} </p>
                    <p class="text-sm text-gray-700">including GST</p>
                  </div>
                </div>
                <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
                {/* END OF cart price */}
              </div> 
              <br /><br />




            </div>

          </>
:<Loader/>
          }
          
          </>
          :
          <>
          {/* nothing */}
          <div className="mb-10 mt-2">
            <img src={cartImage02} className="block m-auto" alt="" />
            <p className="mt-3 text-gray-400 text-center md:text-xl" >Nothing in your Cart</p>
          </div>
          </>
       
       }

          


      </div>
 
      

    </div>
  );
}

export default Cart;
