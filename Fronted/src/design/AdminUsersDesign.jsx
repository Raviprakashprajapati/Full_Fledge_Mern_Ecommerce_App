import React, { useState } from 'react'
import adminImage02 from "../assets/image/adminImage02.png"
import pc2 from "../assets/image/pc2.jpg"


function AdminUsersDesign() {
    
  const [showImage, setShowImage] = useState(false);

  return (
    <div>

        {/* header */}
        <div className='mt-5 mb-8'>
        <div className="w-[100%] md:w-[80%] m-auto ">
            <div className="px-4 sm:px-0 ">
            <div className="bg-black p-2  rounded-lg flex justify-center items-center ">
                <img src={adminImage02} className='h-[4rem]' alt="" />
                <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
                Admin - Customers Details
                </h3>
            </div>
            </div>
        </div>
        </div>


        {/* search box */}
        <div className='mt-3 mb-7' >
        <div className='w-[90%] md:w-[70%] m-auto'>
        <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            🔎
        </span>
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
        </div>
        </div>

        

        {/* all users */}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            contact
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Orders
                        </th>
                        <th scope="col" class="px-6 py-3">
                            address                    
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Avatar
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ravi
                        </th>
                        <td class="px-6 py-4">
                            ravi@gmai.com
                        </td>
                        <td class="px-6 py-4">
                            ravi123
                            
                        </td>
                        <td class="px-6 py-4">
                            987456321
                        </td>
                        <td class="px-6 py-4">
                            2
                        </td>
                        <td class="px-6 py-4 text-[0.7rem] ">
                            sadarpursec -45 noida
                        </td>
                        <td class="px-6 py-4">
                            
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            onClick={() => setShowImage(true)}
                            >Photo</a>
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-bold text-red-700 hover:underline">D</a>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>
        <br /><br /><br />



      {/* Pop-up image */}
        <div className="relative">
      {showImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-3xl mx-auto">
            {/* Close button */}
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={pc2}
              alt="Pop-up Image"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
         </div>


        




    
    </div>
  )
}

export default AdminUsersDesign
