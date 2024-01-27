import React, { useState } from "react";
import registerImage from "../../assets/image/registerImage.jpg";
import Footer from "../utils/Footer";
import { loginUserAPI, registerUserAPI } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import CountDown from "../utils/CountDown";

function Signup() {

  const [modelOpen,setModelOpen] = useState(false)
  const [avatar,setAvatar] = useState(null)
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [error,setError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const navigate = useNavigate()

  const closeModal=()=>{
    setModelOpen(false)
  }

  function handleAvatar(e){
    const file  = e.target.files[0];
    setAvatar(file)
   
  }

  async function handleSubmit(e){
    setError(false)
    e.preventDefault()
    if(!email.includes("@")){
      setEmailError(true)
      return;
    }
    if(name && username && email && password && contact && address)
    {
      try {
        setEmailError(false)
        setModelOpen(true)
        const formData = new FormData();
        formData.append('name',name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('contact', contact);
        formData.append('address', address);
        
        if(avatar){
          formData.append('profileImage', avatar);
        }
        console.log(formData)
        const response = await registerUserAPI(formData)
        console.log(response)

        //after sign-up --LOGIN
        const loginData = {
          username:response.data.username,
          password:password
        }

          loginUserAPI(loginData)
          .then((data)=>{
            // setError(false)
            localStorage.clear()
          
            localStorage.setItem("user", JSON.stringify(data.data.user))
            localStorage.setItem("accessToken", data.data.accessToken)
            localStorage.setItem("refreshToken", data.data.refreshToken)
            navigate("/")
            window.location.reload()
          }).catch((err)=>{
            console.log("error ",err)
            // setError(true)
          })

        
        
      } catch (error) {
        setError(true)
          console.log("Error registering user: " + error)
      }
    }
  }

 
  return (
    <div className="bg-white mt-[-10px]" >

      {/* COUNTDOWN */}
      {modelOpen && <CountDown onClose={closeModal} />}
        
      

      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
       
        <div class="flex items-center justify-center gap-3">
         <div>
         <img
            class="mx-auto h-20 rounded-full w-auto"
            src={registerImage}
            alt="Your Company"
          />
         </div>
          <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Create New Account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form class="space-y-6" action="#" method="POST">

    
            <div className="mt-2 border p-3 border-slate-400 rounded-lg">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  required
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Enter your full name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="border p-3 border-slate-400 rounded-lg">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Id
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  placeholder="Enter your email ID"
                  name="email"
                  type="email"
                  
                  onChange={(e)=>setEmail(e.target.value)}
                  autocomplete="email"
                  required
                  value={email}
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {
                  emailError?<p className="text-red-600 text-center mt-1" >Email should have '@'</p>:null
                }
              </div>
            </div>

            
            
              {/* <!-- Username Field --> */}
              <div class="mt-4 border p-3 border-slate-400 rounded-lg">
                <label
                  for="username"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div class="mt-2">
                  <input
                  
                  onChange={(e)=>setUsername(e.target.value)}
                    id="username"
                    placeholder="Enter your username"
                    name="username"
                    type="text"
                    value={username}
                    autocomplete="username"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <!-- Password Field --> */}
              <div class="mt-4 border p-3 border-slate-400 rounded-lg">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="mt-2">
                  <input
                    id="password"
                    
                  onChange={(e)=>setPassword(e.target.value)}
                    name="password"
                    type="password"
                    autocomplete="new-password"
                    value={password}
                    required
                    placeholder="Enter storng password" 
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <!-- Contact Field --> */}
              <div class="mt-4 border p-3 border-slate-400 rounded-lg">
                <label
                  for="contact"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contact
                </label>
                <div class="mt-2">
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    
                  onChange={(e)=>setContact(e.target.value)}
                    autocomplete="tel"
                    placeholder="Enter your contact number"
                    required
                    value={contact}
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <!-- Address Field --> */}
              <div class="mt-4 border p-3 border-slate-400 rounded-lg">
                <label
                  for="address"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
                <div class="mt-2">
                  <textarea
                    id="address"
                    name="address"
                    
                  onChange={(e)=>setAddress(e.target.value)}
                    rows="3"
                    value={address}
                    required
                    placeholder="Enter your full address"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              {/* <!-- Profile Image Field --> */}
              <div class="mt-4 border p-3 border-slate-400 rounded-lg">
                <label
                  for="profileImage"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Profile Image
                </label>
                <div class="mt-2">
                  <input
                    id="profileImage"
                    name="profileImage"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatar}
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            {
              error?  <div className="text-center text-red-600" >
              <p>user with username or email already existed</p>
            </div>:null
            }
            

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>

        
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Signup;
