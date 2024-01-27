import React, { useState } from 'react'
import adminLoginImage from "../../assets/image/adminLoginImage.jpg"
import { adminLoginAPI } from '../api/adminApi'
import { useNavigate } from 'react-router-dom'
import CountDown from '../utils/CountDown'

function AdminLogin() {

  const [inputEmail,setInputEmail] = useState("")
  const [inputPassword,setInputPassword] = useState("")
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const [modelOpen,setModelOpen] = useState(false)

    const closeModal=()=>{
      setModelOpen(false)
    }

  function handleSubmit(e){
    e.preventDefault()
      if(inputEmail && inputPassword)
      {
        setModelOpen(true)
        let data = {}
        if(inputEmail.includes('@'))
          {
            data = {email: inputEmail, password: inputPassword}
          }else{
            data = {username:inputEmail, password:inputPassword}
          }
        
          adminLoginAPI(data)
          .then((data)=>{
            setError(false)
            console.log("data: " + data)
            localStorage.clear()
            localStorage.setItem("admin", JSON.stringify(data.data.admin))
            localStorage.setItem("accessToken", data.data.accessToken)
            navigate("/admin/profile")
    
            window.location.reload()
          })
          .catch((err)=>{
            setError(true)
            console.log("error: " + err)
          })  
        
        
      }
  }


  return (
    <div className='' >
      
      {/* COUNTDOWN */}
      {modelOpen && <CountDown onClose={closeModal} />}
            
      <div>
      
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[11rem] rounded-full w-auto max-w-full"
            src={adminLoginImage}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Admin Login 
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                EmailId or Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  value={inputEmail}
                  onChange={(e)=>setInputEmail(e.target.value)}
                  placeholder='Enter admin email or username'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  placeholder='Enter admin password'
                  value={inputPassword}
                  onChange={(e)=>setInputPassword(e.target.value)}
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

              {
                error?
                <p className='text-red-600 text-sm text-center'>Invalid details</p>:null
              }

            <div>
              <button
              onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminLogin
