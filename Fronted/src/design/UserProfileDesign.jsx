import React, { useState } from "react";

function UserProfileDesign() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordPopup = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div><br /><br />
     
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
            src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704871276~exp=1704871876~hmac=9bd36c2dde7fd5ae9df324d328ed1f3ef17f628f7edf955dcd35a5882522433a"
            alt="Woman's Face"
          />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">Ravi </p>
              <p class="text-slate-500 font-medium">ravi1234</p>
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
                  Margot Foster
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Username
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ravi123
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email Id
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ravi@gmail.com
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  contact
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  895656566
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  sadarpur sector-45 Noida
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

        
          <button class="px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Edit Profile
          </button>

          {/* <button className="px-3"></button> */}

          <button class="px-4 py-1 text-lg text-purple-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Edit Avatar
          </button>

          {/* <button className="px-3"></button> */}

          <button class="px-4 py-1 text-lg text-purple-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Change Password
          </button>
        {/* </div> */}

        <button className="bg-red-500 p-2 font-semibold  w-40 text-black rounded-lg hover:bg-red-700">
          Logout
        </button>

        <button className="bg-red-600 p-2 font-semibold  w-40 text-black rounded-lg">
          Deactivate Account
        </button>
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
