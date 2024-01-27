import React, { useEffect, useState } from "react";
import loginImage from "../../assets/image/loginImage.jpg";
import { loginUserAPI } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import CountDown from "../utils/CountDown";


function Login() {

  const [inputUsername,setInputUsername] = useState("")
  const [inputPassword,setInputPassword] = useState("") 
  const [modelOpen,setModelOpen] = useState(false)
  const [error,setError] = useState(false)
  const navigate = useNavigate()


  

  function handleSubmit(e){
    e.preventDefault()
    if(!(inputUsername.length==0 || inputPassword.length==0))
    {
      
      setModelOpen(true)
      let loginData = {}
      if(inputUsername.includes("@")){
        loginData = {
          email:inputUsername,
          password:inputPassword
        }
      }else{
        loginData = {
          username:inputUsername,
          password:inputPassword
        }
      }
       
      
      loginUserAPI(loginData)
      .then((data)=>{
        setError(false)
        localStorage.clear()
        // localStorage.setItem('password',inputPassword)
        localStorage.setItem("user", JSON.stringify(data.data.user))
        localStorage.setItem("accessToken", data.data.accessToken)
        localStorage.setItem("refreshToken", data.data.refreshToken)
        navigate("/")

        window.location.reload()
       



      }).catch((err)=>{
        console.log("error ",err)
        setError(true)
      })


      setInputUsername("")
      setInputPassword("")
    }
  }

  const closeModal=()=>{
    setModelOpen(false)
  }

  
  



  return (
    <div>

      {/* COUNTDOWN */}
      {modelOpen && <CountDown onClose={closeModal} />}
        
      
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-[11rem] w-auto max-w-full"
            src={loginImage}
            alt="Your Company"
          />
          <h2 class="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                EmailId or Username
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={inputUsername}
                  onChange={(e)=>setInputUsername(e.target.value)}
                  autocomplete="email"
                  required
                  placeholder="Enter username or email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    {/* Forgot password? */}
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={inputPassword}
                  onChange={(e)=>setInputPassword(e.target.value)}
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
             >
                Sign in
              </button>
            </div>
            {
              error?
              <p className="m-3 text-center text-red-600" >Enter correct account details for login</p>:null
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
