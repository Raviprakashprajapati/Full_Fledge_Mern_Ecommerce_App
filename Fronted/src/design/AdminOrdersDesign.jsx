import React, { useState } from 'react'
import adminImage02 from "../assets/image/adminImage02.png"
import pc2 from "../assets/image/pc2.jpg"
import { Link } from 'react-router-dom'

function AdminOrdersDesign({order}) {

    const [inputOrder,setInputOrder] = useState("")

  return (
    <div>
        
        {/* header */}
        <div className='mt-5 mb-8'>
        <div className="w-[100%] md:w-[80%] m-auto ">
            <div className="px-4 sm:px-0 ">
            <div className="bg-black p-2 rounded-lg flex justify-center items-center ">
                <img src={adminImage02}  className='h-[4rem]' alt="" />
                <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
                Admin - Orders Details
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
        <input value={inputOrder} onChange={(e)=>setInputOrder(e.target.value.toLowerCase())}  class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
        </div>
        </div>

        

        {/* all users */}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            orderId
                        </th>
                        <th scope="col" class="px-6 py-3">
                            customerName
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            userId
                        </th>
                      
                        <th scope="col" class="px-6 py-3">
                            contact
                        </th>
                        <th scope="col" class="px-6 py-3">
                            orderAddress
                        </th>
                        <th scope="col" class="px-6 py-3">
                            totalAmount               
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            Modify
                        </th>
                      

                    </tr>
                </thead>
                <tbody>
                  {
                    order
                    .filter((order)=>(
                    inputOrder===""?order:
                    order?._id.toLowerCase().includes(inputOrder) ||
                    order?.customerName.toLowerCase().includes(inputOrder) || 
                    order?.contactNumber.toLowerCase().includes(inputOrder) || 
                    order?.status.toLowerCase().includes(inputOrder) || 
                    order?.orderAddress.toLowerCase().includes(inputOrder) || 
                    order?.userId.toLowerCase().includes(inputOrder)  ||
                    String(order?.totalAmount).includes(inputOrder) 
                    

                    ))
                    
                    .map((i,index)=>(
                          
                    <tr key={index} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 text-[0.6rem] font-medium text-blue-600 hover:cursor-pointer hover:text-blue-800 whitespace-nowrap dark:text-white">
                        <Link to={`/admin/update-order/${i?._id}`} >#{i?._id}</Link>
                        
                    </th>
                    <td class="px-6 py-4">
                        {i?.customerName}
                        
                    </td>
                    <td class="px-6 py-4">
                        
                        <p  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        {i?.status}
                        </p>
                       
                    </td>
                    <td class="px-6 py-4">
                        #{i?.userId}
                    </td>
                
                    <td class="px-6 py-4">
                        {i?.contactNumber}
                    </td>
                    <td class="px-6 py-4 text-[0.7rem] ">
                        {i?.orderAddress}
                    </td>
                    <td class="px-6 py-4 ">
                        {i?.totalAmount}
                    </td>
                   
                    <td class={i?.status.includes("success")?"px-6 py-4 bg-black text-white hover:cursor-pointer font-bold":"px-6 py-4 bg-green-400 text-black hover:cursor-pointer hover:bg-green-200 font-bold"}>
                        {i?.status.includes("success")?<p>Completed</p>:<Link to={`/admin/update-order/${i?._id}`} >Update</Link>}
                    </td>
                    
                </tr>
            
                    ))
                  }
                </tbody>
            </table>
        </div>
        <br /><br /><br />

      
    </div>
  )
}

export default AdminOrdersDesign
