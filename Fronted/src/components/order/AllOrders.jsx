import React, { useEffect, useState } from 'react'
import { deleteParticularOrderAPI, ordersUserAPI } from '../api/orderApi'
import cartImage02 from "../../assets/image/cartImage02.png";
import Loader from '../utils/Loader';
import CountDown from '../utils/CountDown';
import { getCurrentUserAPI } from '../api/userApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/redux-features/userSlice';
import { Link } from 'react-router-dom';

function AllOrders() {

  const user = useSelector(selectCurrentUser)
  const [order,setOrder] = useState(null)
  const [CountTimer,setCountTimer] = useState(false)


  useEffect(()=>{

    ordersUserAPI()
    .then((data)=>{
      console.log(data?.data)
      setOrder(data?.data)
    })
    .catch((err)=>{
      console.log("error: " + err)
    })

  },[])

  const closeCountTimer=()=>{
    setCountTimer(false)
  }

  
  function handleCancelOrder(orderId,status){
    
    if(orderId && status.includes('pending')){
      
      setCountTimer(true)
      deleteParticularOrderAPI(orderId)
      .then((data)=>{
        if(data){
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
        }
      })
      .catch((err)=>{
        console.log("err in order cancel ",err)
      })
      
    }

    
  }


  return (
    <div>

        {/* COUNTDOWN */}
       {CountTimer && <CountDown onClose={closeCountTimer}  />}
        


       {/* order header */}
       <div class="flex items-center mt-6 justify-center">
          {/* <img src={orderImage01} className="h-[7rem]" alt="" /> */}
          <h2
            class="text-lg ml-3 bg-black text-white p-4 rounded-lg font-medium "
            id="slide-over-title text-center"
          >
            My Orders
          </h2>
        </div>

        {
        !order?
        <div>
          <img src={cartImage02} className="mt-5 block m-auto" alt="" />
          <p className="mt-3 text-gray-400 text-center md:text-xl" >Nothing in your Order</p>
        </div>:null
      }



      {
        order?.length>0?   
        
        <div class="w-full   md:w-2/3 m-auto">
      
       
  
      
     
  
        {/* GPT orders */}
        <div class="flex h-full flex-col bg-white shadow-xl">
          <div class="flex-1 px-4 py-6 sm:px-6">
            <div class="mt-8">
              <div class="flow-root">
                <ul role="list" class="-my-6 divide-y divide-gray-200">
  
  
                  {
                    order?.map((i,indexi)=>{
                      return(
                        <>
                        {
                          i?.products?.length==1?
                          <>
                          {
                            // per ORDER
                            i.products.map((j,indexj)=>{
                              return(
                                <>
                              <li>
                                  <div className="mb-[-10px] mt-5 flex items-center ">
                                  <p >Order #{indexi+1}</p>
                                  <Link  class=" text-blue-600 hover:cursor-pointer  text-[0.7rem] font-semibold  px-4  " to={`/order-details/${i?._id}`} >
                                          Go to Details
                                  
                                  </Link>
                                  </div>
                              <li class="flex py-6   ">
                                  <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={j?.productImage}
                                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                      class="h-full p-2 w-auto object-cover object-center m-auto"
                                    />
                                  </div>
  
                                  <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div class="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#">{j?.productName}</a>
                                        </h3>
                                        <p class="ml-4">₹ {i?.totalAmount}</p>
                                      </div>
                                      <div>
                                        <p class="mt-2 text-sm   ">
                                          Status :{" "}
                                          <span className="text-black bg-green-400 p-[0.36rem] rounded-lg font-medium">
                                            {i?.status}
                                          </span>{" "}
                                        </p>
                                    
                                      </div>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                      <p class="text-gray-500">Qty {j?.quantity}</p>
  
                                      <div class="flex">
                                      {
                                        i?.status.includes('pending')?
                                        <>
                                          <button
                                          type="button"
                                          class="font-medium text-white-600 hover:text-white-500 bg-red-500 p-2 rounded-lg"
                                          onClick={()=>handleCancelOrder(i?._id,i?.status)}
                                        >
                                          Cancel
                                        </button>
                                        </>:null
                                      }
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </li>
                                <hr />
                                <hr />
                               <hr />
                                </>
                              )
                            })
                          }
                          </>
  
                          :
  
                          //perorder MANY PRODUCT
                          <>
  
                                  <li>
                                  <br />
                                
                                  <div className="mb-[-10px] mt-5 flex items-center ">
                                  <p >Order #{indexi+1}</p>
                                  <Link  class=" text-blue-600 hover:cursor-pointer  text-[0.7rem] font-semibold  px-4  " to={`/order-details/${i?._id}`} >
                                          Go to Details
                                  
                                  </Link>
                                  </div>
                                  <li class="flex flex-col py-6">
                                  {/* Order Summary */}
  
  
  
  
                          {
                            i.products.map((j)=>{
                              return(
                               
                                  <div class="flex py-6">
                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={j?.productImage}
                                        alt="Product 1"
                                        class="h-full p-2 w-auto object-cover object-center m-auto"
                                      />
                                    </div>
  
                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{j?.productName}</a>
                                          </h3>
                                          <p class="ml-4">₹ {j?.price}</p>
                                        </div>
                                      </div>
                                      <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500">Qty {j?.quantity}</p>
                                        {/* Cancel button can be placed here if needed */}
                                      </div>
                                    </div>
                                  </div>
                              )
                            })
                          }
  
  
                              {/* all orduct details */}
                                <div>
                                  <div class="flex justify-between text-sm font-medium text-gray-900 mb-4">
                                    <div>
                                      <p className="text-sm mb-3" >Total Price: ₹ {i?.totalAmount}</p>
                                      <p className="font-normal">Status :{" "}<span class="text-black bg-green-400 p-[0.36rem] rounded-lg font-medium text-sm">
                                        {i?.status}
                                      </span></p>{" "}
                                    </div>
                                    
                                  </div>
                                {
                                  i?.status.includes("pending")?
                                  <>
                                    <button
                                      type="button"
                                      class="text-sm font-medium text-white-600 hover:text-white-500 bg-red-500 p-2 w-20  rounded-lg"
                                      onClick={()=>handleCancelOrder(i?._id,i?.status)}
                                    >
                                      Cancel 
                                    </button>
                                  
                                  </>:null
                                }
                                  </div>
  
                                  
  
                                </li>
                                </li>
                                <hr />
                                <hr />
                                <hr />
  
  
  
                          </>
  
                          
  
                        }
  
                        </>
                      )
                    })
                  }
                  
  
               
  
                
  
                
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <br />
        <br />
        <br />
      </div>:null
      
      }

  </div>

  )
}

export default AllOrders
