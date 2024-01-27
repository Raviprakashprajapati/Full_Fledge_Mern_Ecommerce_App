import React, { useState } from "react";
import CountDown from "../utils/CountDown";
import { changeUserPasswordAPI } from "../api/userApi";
import { useNavigate } from "react-router-dom";

function ChangePassword() {

  const [modelOpen,setModelOpen] = useState(false)
  const [oldPassword,setOldPassword] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [check,setCheck] = useState(false)
  const [error,setError] = useState(false)
  const navigate = useNavigate()

  const closeModal=()=>{
    setModelOpen(false)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(check && oldPassword && newPassword){
      setError(false)
      setModelOpen(true) 
        
      changeUserPasswordAPI({ oldPassword, newPassword })
      .then((data)=>{
        // console.log("data ",data)
        navigate("/profile")
        window.location.reload()

      })
      .catch((err)=>{
        setError(true)
        console.log("error ",err)
      })
    }
  }


  return (
    <div>

       {/* COUNTDOWN */}
     {modelOpen && <CountDown onClose={closeModal} />}
          

        {/* header */}
      <div className="flex justify-center items-center mt-4 mb-10">
        <h3 className="bg-black p-3 font-lg rounded-lg text-white font-semibold">
          Change Password
        </h3>
      </div>




      <form class="max-w-sm mx-auto border p-4 rounded-lg  ">
       
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={oldPassword}
            onChange={(e)=>setOldPassword(e.target.value)}
            placeholder="Enter your password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div class="mb-5">
          <label
            for="change-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New password
          </label>
          <input
            type="text"
            id="change-password"
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            placeholder="Enter your new password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              onChange={(e)=>setCheck(!check)}
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I want to {" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              change password
            </a>
          </label>
        </div>

        <div class="flex items-start mb-5">
          {
            error?
            <p className="text-center text-red-600" >Invalid Password</p>:null
          }
        </div>



        <button
        onClick={handleSubmit}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        
      </form>


    </div>
  );
}

export default ChangePassword;
