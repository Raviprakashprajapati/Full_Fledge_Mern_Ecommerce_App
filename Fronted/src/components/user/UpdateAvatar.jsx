import React, { useState } from "react";
import { updateUserAvatarAPI } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import CountDown from "../utils/CountDown";

function UpdateAvatar() {

  const navigate = useNavigate()
  const [modelOpen,setModelOpen] = useState(false)
  const [avatar,setAvatar] = useState(null)
  const [check,setCheck] = useState(false)

  const closeModal=()=>{
    setModelOpen(false)
  }

  function handleAvatar(e){
    const file = e.target.files[0]
    if(file){
      setAvatar(file)

    }

  }

  function handleSubmit(e){
    e.preventDefault()

    if(check){
      if(avatar){
        setModelOpen(true)
        const formData = new FormData()
        formData.append("newAvatar",avatar)

        updateUserAvatarAPI(formData)
        .then((data)=>{
          console.log(data)
          const accessToken = localStorage.getItem('accessToken')
          const refreshToken = localStorage.getItem('refreshToken')
          localStorage.clear()
          localStorage.setItem('user',JSON.stringify(data.data))
          localStorage.setItem('refreshToken',refreshToken)
          localStorage.setItem('accessToken',accessToken)
          navigate("/profile")
          window.location.reload()

        })
        .catch((error)=>{
          console.log("error", error)
        })
      }
    }

    

  }




  return (
    <div>

       {/* COUNTDOWN */}
       {modelOpen && <CountDown onClose={closeModal} />}
       


      {/* header */}
      <div className="flex justify-center items-center mt-4 mb-10">
        <h3 className="bg-black p-3 font-lg rounded-lg text-white font-semibold">
          Update Profile Avatar
        </h3>
      </div>

      <form class="w-[90%] md:w-[70%] mx-auto ">

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="user_avatar"
          >
            Upload New Avatar Image
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            onChange={handleAvatar}
            required
          />
          <div
            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          >
            A profile picture is useful to confirm you are logged into your
            account
          </div>
        </div>

        <div class="flex items-start mb-5 mt-5 ">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
              onChange={(e)=>setCheck(!check)}
            />
          </div>
          <label
            for="terms"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I want to{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              update avatar
            </a>
          </label>
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

export default UpdateAvatar;
