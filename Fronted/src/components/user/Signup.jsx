import React from "react";
import registerImage from "../../assets/image/registerImage.jpg";
function Signup() {
  return (
    <div className="bg-slate-300" >

      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-20 rounded-full w-auto"
            src={registerImage}
            alt="Your Company"
          />
          <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
                  placeholder="Enter your email if"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                    id="username"
                    placeholder="Enter your username"
                    name="username"
                    type="text"
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
                    name="password"
                    type="password"
                    autocomplete="new-password"
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
                    autocomplete="tel"
                    placeholder="Enter your contact number"
                    required
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
                    rows="3"
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
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

        
        </div>
      </div>
    </div>
  );
}

export default Signup;
