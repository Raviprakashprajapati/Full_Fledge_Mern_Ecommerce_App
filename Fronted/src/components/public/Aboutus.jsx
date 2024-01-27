import React, { useState } from "react";
import about01 from "../../assets/image/about01.jpg";
import feedback01 from "../../assets/image/feedback01.jpg";
import feedback02 from "../../assets/image/feedback02.jpg";
import { Textarea } from "flowbite-react";
import { feedbackUserAPI } from "../api/userApi";
import CountDown from "../utils/CountDown";

function Aboutus() {

  const [name,setName] = useState("")
  const [contact,setContact] = useState("")
  const [rating,setRating] = useState("")
  const [feedbackContact,setFeedbackContact] = useState("")
  const [response,setResponse] = useState(false)
  const [CountTimer,setCountTimer] = useState(false)


      const closeCountTimer=()=>{
        setCountTimer(false)
      }



  function handleFeedbackSubmit(e){
    e.preventDefault()
   if(name && contact && rating && feedbackContact)
   {    
    setCountTimer(true)

        feedbackUserAPI({name,contact,feedbackContent:feedbackContact,rating})
        .then((data)=>{
          

 
          if(data){
            console.log(data)
            setResponse(!response)
            setName("")
            setContact("")
            setRating("")
            setFeedbackContact("")
          }
        })
        .catch((err)=>{
          setResponse(!response)
          console.log("err ",err)
        })
   }
  }


  return (
    <div>

        {/* COUNTDOWN */}
   {CountTimer && <CountDown onClose={closeCountTimer}  />}
       
      <section className="flex items-center  xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative lg:max-w-md">
                <img
                  src={about01}
                  alt="aboutimage"
                  className="relative z-10 object-cover w-full rounded h-96"
                />
                <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-1 border-black rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                  <p className="text-lg font-semibold md:w-72">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{" "}
                    Hello guys , I am Ravi
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                Welcome to our cutting-edge e-commerce platform, meticulously
                crafted by{" "}
                <span>
                  <a
                    href="https://raviprakashprajapati.netlify.app/"
                    className="text-black font-semibold "
                  >
                    {" "}
                    Ravi{" "}
                  </a>
                </span>{" "}
                Powered by the robust MERN stack, our website offers a seamless
                shopping journey. From secure user authentication to intuitive
                product management, we prioritize user experience and security.
              </p>
              <a
                href="https://raviprakashprajapati.netlify.app/"
                className="px-4 py-2 text-gray-100 bg-black rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600"
              >
                Ravi
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className=" md:mt-10"></div>
      <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center ">
            <div className="w-full px-4 mb-5 lg:w-1/2 lg:mb-0">
              <div className="lg:max-w-md">
                <span className="text-xl font-semibold text-blue-600 uppercase dark:text-blue-500"></span>
                <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                  We are the Providing Ecommerce product in category of Eletronics, Clothing and many soon
                </h2>
                <p className="mb-10 text-gray-600 dark:text-gray-400 ">
                  Ravi Prakash, our proficient project leader, ensures a
                  feature-rich environment, inviting feedback for continual
                  enhancement. Explore a new era of online shopping with us,
                  where innovation meets convenience.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-earmark-code"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Technology Stack:
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    MongoDB, Express.js, React.js, Node.js, Tailwindcss,
                    EmailValidation, Cloudinary
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Key Features:
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    User Authentication: Product Management, Shopping Cart,
                    Order Processing, User Reviews, Profile Editing
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-bank2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"></path>
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Admin Panel
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    Exclusive admin dashboard features access for project leader
                    Ravi Prakash for admin functionalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex items-center bg-gradient-to-r from-gray-50 to-blue-50 xl:h-screen font-poppins dark:from-gray-900 dark:to-gray-900 ">
        <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 md:px-7">
          <div class="flex flex-wrap items-center justify-center -mx-4">
            <div className="px-4  md:text-center mb-2">
              <img src={feedback02} className="md:h-[10rem] m-auto" alt="" />
              <h6 className="mt-1 mb-3 text-center">
                Feel Free to share your Feedbacks
              </h6>
            </div>
            <div class="w-full px-4 lg:w-1/2">
              <div class="max-w-sm mx-auto ">
                <div class="p-6 mb-6 text-center bg-white border rounded-md shadow dark:border-gray-800 dark:bg-gray-800">
                  <form action="">
                    <ul className="mb-5">
                      <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                        <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-5 h-5 bi bi-arrow-right-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                          </svg>
                        </span>
                        Areas for Improvement:
                      </li>
                      <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                        <span className="mr-3 text-blue-500 dark:text-blue-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-5 h-5 bi bi-arrow-right-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                          </svg>
                        </span>
                        What's Working Well:
                      </li>
                    </ul>
                    <div class="flex flex-wrap mb-4 -mx-2">
                      <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                        <input
                          class="w-full bg-gray-100 border rounded-md dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                          type="text"
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                          placeholder="Enter Full name.."
                          required
                        />
                      </div>
                      <div class="w-full px-2 lg:w-1/2">
                        <input
                          class="w-full bg-gray-100 border rounded-md dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                          type="text"
                          placeholder="Enter Phone number"
                          required
                          
                          value={contact}
                          onChange={(e)=>setContact(e.target.value)}
                        />
                      </div>
                    </div>
                    <input
                      class="w-full px-3 py-2 mb-4 leading-loose bg-gray-100 border rounded-md dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                      type="text"
                      placeholder="Enter rating out of 5"
                      required
                      
                      value={rating}
                      onChange={(e)=>setRating(e.target.value)}
                    />
                    <textarea
                      rows="4"
                      type="message"
                      placeholder="Write a Feedback message..."
                      required
                      
                      value={feedbackContact}
                      onChange={(e)=>setFeedbackContact(e.target.value)}
                      class="block w-full px-4 mb-4 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-400 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-700 "
                    ></textarea>
                   {
                    response?<div className="mt-2 mb-2">
                    <p className="m-auto font-bold" >FeedBack has been sent </p>
                    </div>:null
                   }
                    <button onClick={handleFeedbackSubmit}  class="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-black rounded-md dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <div className="w-[90%] md:w-[70%] m-auto">
        <p className="text-center text-slate-500 text-sm">
          I hosted this website in free version of hosted Platform that's why it
          takes sometime to load the data. I hope you can understand..
        </p>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Aboutus;
