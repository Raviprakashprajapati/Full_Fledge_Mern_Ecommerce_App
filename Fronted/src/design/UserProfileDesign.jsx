import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deactivateUserAPI, logoutAPI } from "../components/api/userApi";
import CountDown from "../components/utils/CountDown";

function UserProfileDesign({name,email,username,contact,address,password,avatar}) {

  const [deactivateCount,setDeactivateCount] = useState(0)
  const [check,setCheck] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [modelOpen,setModelOpen] = useState(false)

    const closeModal=()=>{
      setModelOpen(false)
    }

  const togglePasswordPopup = () => {
    setShowPassword(!showPassword);
  };

  function handleLogout(){

    logoutAPI()
    .then((data)=>{
      console.log(data)
      localStorage.clear()
      navigate("/")
      window.location.reload()

    })
    .catch((err)=>{
      console.log("error: " + err)
    })
  
  }

  function handleDeactiveAccount(){
    
    if(check){
      setModelOpen(true) 
      deactivateUserAPI()
      .then((data)=>{
        console.log(data)
        localStorage.clear()
        navigate("/")
        window.location.reload()
      })
      .catch((err)=>{
        console.log(err)
      })
     
    }
   
  }


  return (
    <div><br /><br />
  
    {/* COUNTDOWN */}
    {modelOpen && <CountDown onClose={closeModal} />}
          

      <div className="w-[93%] md:w-[80%] m-auto ">
        {/* profile header */}
        <div className="px-4 sm:px-0 ">
          <h3 className="text-lg bg-slate-600 text-white  font-semibold  leading-7 p-3 rounded-lg text-center">
            Profile
          </h3>

          <p className="mt-1 text-center  text-sm leading-6 text-gray-500">
            Personal details
          </p>
        </div>{" "}
        <br />
        <br />
        {/* profile photu */}
        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={avatar ?avatar:"https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=740&t=st=1705485638~exp=1705486238~hmac=aa6aeab85319b5d00d9672285c339cbc5ac0ed007d92fbe52d8d93d7ff0bec48" }
            alt="profileImage"
          />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">{name} </p>
              <p class="text-slate-500 font-medium">{username}</p>
            </div>
          </div>
        </div>
        {/* profile info */}
        <div className="border border-slate-300 p-3 rounded-lg mt-4 mb-20">
          <div className="mt-6 ">
            <dl className="divide-y divide-gray-200">
              <div className="px-4 py-6 mt-[-10px] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Username
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {username}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email Id
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  contact
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {contact}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {address}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Password
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                  <button
                    className="bg-black p-2 font-semibold  w-40 text-white rounded-lg"
                    onClick={togglePasswordPopup}
                  >
                    Click
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Pop-up password */}
      {showPassword && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md">
            {/* Password content goes here */}
            <p className="text-lg font-semibold">Your Password: ********</p>
            <button
              onClick={togglePasswordPopup}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* edit button */}
      <p className="mt-[-20px] mb-10 mx-10 text-blue-600 font-semibold ">
        More Options
      </p>
      <div className="w-[93%] md:w-[80%] flex flex-col justify-center items-center gap-4 mb-10 ">

        
          <button class="px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          onClick={()=>navigate("/update-profile")}
          >
            Edit Profile
          </button>

          {/* <button className="px-3"></button> */}

          <button class="px-4 py-1 text-lg text-purple-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" 
          onClick={()=>navigate("/update-avatar")}>
            Edit Avatar
          </button>

          {/* <button className="px-3"></button> */}

          <button class="px-4 py-1 text-lg text-purple-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" 
          onClick={()=>navigate("/update-password")}>
            Change Password
          </button>
        {/* </div> */}

        <button className="bg-red-500 p-2 font-semibold  w-40 text-black rounded-lg hover:bg-red-700" 
          onClick={handleLogout}>
          Logout
        </button>

        <div className=" p-2 border border-red-600   " >
       <div className="flex items-center gap-2">
       <input type="checkbox" checked={check} onChange={()=>setCheck(!check)} />
        <button className="bg-red-600 hover:bg-red-500 p-2 font-semibold  w-40 text-black rounded-lg" 
        onClick={handleDeactiveAccount}
        >
          Deactivate Account
        </button>
       </div>
        {/* <p className="text-[0.7rem] text-center pt-2">click  3 times for Deactivate {deactivateCount}</p> */}
        </div>
      </div>




    </div>
  );
}


export default UserProfileDesign;






{
  /* <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
ravi@gmail.com
</button> */
}

{
  /* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
<dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
  consequat sint. Sit id mollit nulla mollit nostrud in ea officia
  proident. Irure nostrud pariatur mollit ad adipisicing
  reprehenderit deserunt qui eu.
</dd>
</div>
<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
<dt className="text-sm font-medium leading-6 text-gray-900">
  Attachments
</dt>
<dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
  <ul
    role="list"
    className="divide-y divide-gray-100 rounded-md border border-gray-200"
  >
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
      <div className="flex w-0 flex-1 items-center">
        <svg
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
            clip-rule="evenodd"
          />
        </svg>
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
          <span className="truncate font-medium">
            resume_back_end_developer.pdf
          </span>
          <span className="flex-shrink-0 text-gray-400">2.4mb</span>
        </div>
      </div>
      <div className="ml-4 flex-shrink-0">
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Download
        </a>
      </div>
    </li>
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
      <div className="flex w-0 flex-1 items-center">
        <svg
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
            clip-rule="evenodd"
          />
        </svg>
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
          <span className="truncate font-medium">
            coverletter_back_end_developer.pdf
          </span>
          <span className="flex-shrink-0 text-gray-400">4.5mb</span>
        </div>
      </div>
      <div className="ml-4 flex-shrink-0">
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Download
        </a>
      </div>
    </li>
  </ul>
</dd>
</div> */
}
