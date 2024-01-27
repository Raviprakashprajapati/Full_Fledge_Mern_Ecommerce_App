import React, { useEffect, useState } from "react";
import ProductCardHome from "./ProductCardHome";
import logoR from "../assets/image/logoR.png";
import { searchProductByReqAPI } from "../components/api/searchApi";

import { toast } from "react-toastify";
import { addProductReviewAPI, productReviewsAPI } from "../components/api/productApi";
import { getDate } from "../components/utils/randomFunciton";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../components/store/redux-features/userSlice";
import CustomToast from "../components/utils/CustomToast";
import { addOrderAPI } from "../components/api/orderApi";
import { Link, useNavigate } from "react-router-dom";
import { addToCartAPI } from "../components/api/cartApi";
import { getCurrentUserAPI } from "../components/api/userApi";
import CountDown from "../components/utils/CountDown";

function ProductDetailDesign({detail}) {

  const navigate= useNavigate()
  const notify = () => toast("Login First 😊");
  const notifyOutofstock =()=>toast("Out of stock")
  const user = useSelector(selectCurrentUser)
  const [reviews,setReviews] = useState(null)
  const [inputReviewComment,setInputReviewComment] = useState("")
  const [inputReviewStar,setInputReviewStar] = useState(1)
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isModalOpen, setModalOpen] = useState(false);
  const [f,setF] = useState(null)
  const [d,setD] = useState(null)
  const [o,setO] = useState(null)
  const [CountTimer,setCountTimer] = useState(false)
  const [relatedProductData,setRelatedProductData] = useState(null)



  const closeCountTimer=()=>{
    setCountTimer(false)
  }

  
  //window width
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //features and desc Formatting
  useEffect(()=>{

    if(detail?.features=="null")
    {}else{

      const formateF = detail?.features.split("\\n")
      setF(formateF)
    }
    const formateD = detail?.description.split("\\n")
    setD(formateD)
    const formateO = detail?.offer.split("\\n")
    setO(formateO)





  },[])

  // reviews API
  useEffect(()=>{

   
    productReviewsAPI(detail?._id)
    .then((data)=>{
      // console.log(data)
      if(data?.data?.length>0){
        setReviews(data?.data)
        // console.log(reviews)
      }
    })
    .catch((err)=>{
      console.log("error in review : " + err)
    })

  },[])


  //related produtc
  useEffect(()=>{

    searchProductByReqAPI(detail?.subCategory)
    .then((data)=>{
      if(data)
      {
        setRelatedProductData(data?.data)
      }
    })
    .catch((err)=>{
      console.log("err in related product ",err)
    })

  },[])



  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalClick = (e) => {
    // Stop propagation to prevent the modal from closing when clicking inside it
    e.stopPropagation();
  };

  function handleAddReview(e){
    e.preventDefault()
    if(inputReviewComment && inputReviewStar){
        if(inputReviewStar>6){
        }else if(0<inputReviewStar){

          addProductReviewAPI({productId:detail?._id,comment:inputReviewComment,rating:inputReviewStar})
          .then((data)=>{
            console.log(data)
            window.location.reload()
          })
          .catch((err)=>{
            console.log("Err ",err)
          })

        }
    }
  }

  function handleBuyNow(){

    setCountTimer(true)
    addOrderAPI({productId:detail?._id,quantity:1})
    .then((data)=>{
      if(data){
       
        getCurrentUserAPI(user?._id)
        .then((data)=>{
          localStorage.setItem('user',JSON.stringify(data.data))
          console.log("cart ",data)
          navigate("/order")
          window.location.reload()
        
        })
      }

    })
    .catch((err)=>{
      console.log("error in buy now ",err)
    })

  }

  function handleAddToCart(){

    addToCartAPI(detail?._id)
    .then((data)=>{
      setCountTimer(true)
      
      if(data){
        getCurrentUserAPI(user?._id)
        .then((data)=>{
          localStorage.setItem('user',JSON.stringify(data.data))
          console.log("cart ",data)
        navigate("/cart")
        window.location.reload()
        })


        
      }
    })
    .catch((err)=>{
      console.log("err while add to cart", err)
    })

  }


  return (
    <>

     {/* COUNTDOWN */}
  {CountTimer && <CountDown onClose={closeCountTimer}  />}
        

      {/* detail */}
      <div className="bg-white">
        <div className="pt-6">
          
        

          {/* <!-- Image gallery --> */}

          {windowSize > 700 ? (
            // LAPTOP
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={detail?.images?.[0]}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="h-50 w-72  border p-2 "
                />
              </div>
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={detail?.images?.[1]}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="h-50 w-72  border p-2 "
                />
              </div>
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={detail?.images?.[2]}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="h-50 w-[200px]  border p-2 "
                />
              </div>
            </div>
          ) : (
            //   MOBILE
            <div className="flex mt-4 overflow-x-auto">
              <img
                className="flex-shrink-0 w-auto border h-[21rem] p-2 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg shadow-lg mx-2 "
                src={detail?.images?.[0]}
                alt="Product 1"
              />
              <img
                className="flex-shrink-0 w-auto border h-[21rem] p-2 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg shadow-lg mx-2"
                src={detail?.images?.[1]}
                alt="Product 2"
              />
              <img
                className="flex-shrink-0 w-auto border h-[21rem] p-2 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-lg shadow-lg mx-2"
                src={detail?.images?.[2]}
                alt="Product 3"
              />
            </div>
          )}

          {/* <!-- Product info --> */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {detail?.name}
              </h1>
            </div>

            {/* <!-- Options --> */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">₹{detail?.price}</p>

              {/* <!-- Reviews --> */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-200 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <a
                    
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {detail?.reviews?.length} reviews
                  </a>
                </div>
              </div>

              {/* buy */}
            {
              user?             
            <>
            {
              detail?.stock>0?
              <button
              onClick={handleBuyNow}
             type="submit"
             className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
           >
             Buy Now
           </button>:
              <button
              
             type="submit"
             className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             onClick={notifyOutofstock}
           >
             Buy Now 
           </button>
            }
            </>
            :             
             <button
              onClick={notify}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Buy Now
              </button>
            }

              {/* cart */}
              {
                user?
                <>
                {
                  detail?.stock>0?
                  <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleAddToCart}
  
                >
                  Add to Cart
                </button>:<button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={notifyOutofstock}
  
                >
                  Add to Cart
                </button>
                }
                </>:
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={notify}

              >
                Add to Cart
              </button>
              }


              <div className="mt-8 border p-4">
                <h3 className="text-2xl mb-3 font-medium text-gray-900">
                  Brand : <span className="font-bold">{detail?.brand}</span>
                </h3>
                <hr />
                <h3 className="text-2xl mt-3 mb-3  font-medium text-gray-900">
                  Stock : <span className="font-bold">{detail?.stock}</span>
                </h3>
                <hr />
                <h3 className="text-2xl mt-3  font-medium text-gray-900">
                  Warranty : <span className="font-bold">{detail?.warranty}</span>
                </h3>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* <!-- Description and details --> */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                  {detail?.title=="null"?null:detail.title}
                  </p>
                </div>
              </div>

              {/* FEATURES------- */}
              <div className="mt-10">
                <h3 className=" font-medium text-black">Features</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm" style={{listStyleType:"none"}}  >

                {
                    f?
                    <>
                    {
                    f.map((i,index)=>(
                      <li key={index} className="text-gray-400 mb-2">
                      <span className="text-gray-600">
                        {i}
                      </span>
                    </li>
                    ))
                    }
                    
                    </>:"------------------"
                 
                }
                    
                  </ul>
                </div>
              </div>

              {/* DESCRIPTION---- */}
              <div className="mt-10">
                <h2 className="text-xxl font-bold mb-3 text-gray-900">
                  Description
                </h2>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <tbody>
                      {
                        d?
                        <>
                        {
                          d.map((i,index)=>(
                            <>
                            <tr key={index} className="bg-slate-200    dark:bg-gray-800  ">
                        <td className="px-2 py-2 md:text-sm rounded-lg  text-black text-[0.78rem] font-medium ">
                        {i}
                        </td>
                      </tr><br />
                      
                            </>
                          ))
                        }
                        
                        </>
                        :
                        "-------------"
                      }
                      
                    </tbody>
                  </table>
                </div>
              </div>

              {/* OFFERS */}
              <div className="mt-2 space-y-6 flex flex-wrap md:float-left  justify-center items-center">
                <h4 className="font-medium m-auto md:mr-5 ">
                  Offers And Discounts
                </h4>

                <div className="border rounded-lg p-2">
               {
                o?
                <>
                {
                  o.map((i)=>(
                    <p className="text-sm mb-2 text-gray-600">
                    {i}
                  </p>
                  ))
                }
                </>
                :"---------------"
               }
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="mt-[-60px] w-90 mr-4 ml-4  bg-slate-200 h-0.5"></div>
      <br />

      <ProductCardHome data={relatedProductData}  productHeaderName="Related Products" />

      <br /><br />

            

      {/* REVIEWS DIV */}
      <div className="mt-6 md:mt-12">
        {/* reviews header */}
        <div className="flex flex-col justify-center">

          <h4 className="text-xl font-semibold text-center  mb-2">
            Product Reviews{" "}
          </h4>

          {/* Button to open the modal */}
          <div className="m-auto">
            {
              user?<button
              className="bg-slate-200 p-2 rounded-lg hover:bg-slate-400  "
              onClick={openModal}
            >
            
             📝 add review
            </button>:
           <>
            <button
            className="bg-slate-200 p-2 rounded-lg hover:bg-slate-400  "
            onClick={notify}
          >
          
           📝 add review
          </button>
         
           </>
            }
          </div>

          <a
            href="#"
            className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 flex justify-center mt-2 "
          >
            {reviews?.length || 0} reviews
          </a>

          

        </div>


        {/* reviews user */}
        <div class="flex flex-no-wrap overflow-x-auto space-x-4 p-4">

         {
          reviews?<>
          {
            reviews.map((i,index)=>(
              <div class="flex-shrink-0 w-64 bg-slate-100 rounded-lg shadow-md p-4">
              <img src={i?.reviewsDetails?.userImage || "data:image/png;base64,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"} alt="User Image" class="w-12 h-12 rounded-full mx-auto mb-4"/>
              <p class="text-gray-800 mb-4 text-sm">{i?.reviewsDetails?.comment}</p>
              <div class="flex items-center justify-center mb-4">
                <span>⭐</span>
                <span class="ml-2 text-gray-700  font-semibold">{i?.reviewsDetails?.rating}</span>
              </div>

              {/* <!-- Date --> */}
              <p class="text-sm text-gray-500 text-center">{getDate(i?.reviewsDetails?.createdAt)}</p>
            </div>
            ))
          }
          </>:null
         }


    </div>

        {/* END OF REVIEWS DIV */}
      </div><br /><br />



      
  






      
     

      {/* Product Footer */}
      <footer className="bg-slate-200 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
            
                <Link to={"/"}  className="flex items-center" >
                <img
                  src={logoR}
                  className="h-12 me-3 "
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
             
                
                </Link>
            
              
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Products
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to={`/searchDetail/eletronics`}
                    className="hover:underline"
                    >Eletronics</Link>
                  
                  </li>
                  <li>
                  <Link to={`/searchDetail/clothing`}
                    className="hover:underline"
                    >Clothing</Link>
                  
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://raviprakashprajapati.netlify.app/"
                      className="hover:underline "
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Raviprakashprajapati"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a className="hover:underline">
                FlipMart
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
               
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

         <CustomToast/>
      




      {/* REVIEWS DIV */}
      <div>
        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-screen bg-gray-800 bg-opacity-50"
            onClick={closeModal}
          
          >
            <div
              className="relative bg-white rounded-lg shadow p-5 w-full max-w-md"
              onClick={handleModalClick}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Add Review
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
                >
                  ❌
                </button>
              </div>

              {/* Content and Rating Fields */}
              <form className="space-y-4" action="#">
                {/* Content field */}
                <div className="w-full">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Content
                  </label>
                  <textarea
                    id="text"
                    placeholder="Enter your review"
                    className="max-h-24 form-input w-full rounded-lg"
                    required
                    value={inputReviewComment}
                    onChange={(e)=>setInputReviewComment(e.target.value)}
                  />
                </div>

                {/* Rating fields */}
                <div>
                  <label
                    htmlFor="rating"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Rate the product
                  </label>
                  <div className="flex items-center">
                   <input type="text"
                    placeholder="1 - 5 Star"
                    value={inputReviewStar}
                    onChange={(e)=>setInputReviewStar(
                    e.target.value)}
                   />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={handleAddReview}
                >
                  Add Review
                </button>
              </form>
            </div>
          </div>
        )}
      </div>


                      

      



                          


    </>
  );
}

export default ProductDetailDesign;
