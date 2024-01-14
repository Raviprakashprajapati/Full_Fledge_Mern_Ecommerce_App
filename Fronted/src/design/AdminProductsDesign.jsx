import React from 'react'
import adminImage02 from "../assets/image/adminImage02.png"
function AdminProductsDesign() {
  return (
    <div className='bg-slate-100' >

      
       {/* header */}
       <div className='mt-5 mb-8'>
        <div className="w-[100%] md:w-[80%] m-auto ">
            <div className="px-4 sm:px-0 ">
            <div className="bg-black  p-2 rounded-lg flex justify-center items-center ">
                <img src={adminImage02} className='h-[4rem]' alt="" />
                <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
                Admin - Products
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
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for any products..." type="text" name="search"/>
        </label>
        </div>
        </div>


        
        {/* category of products */}
        <div className='w-[90%] md:w-[70%] m-auto border p-3 rounded-lg' >
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Category</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a category of product</option>
        {/* "electronics", "clothing", "furniture", "beauty", "book", "sports", "toys", "health", "software" */}
        <option value="electronics">electronics</option>
        <option value="clothing">clothing</option>
        <option value="furniture">furniture</option>
        <option value="software">software</option>
        <option value="book">book</option>
        <option value="sports">sports</option>
        <option value="beauty">beauty</option>
        <option value="toys">toys</option>
        <option value="health">health</option>
        </select>
        </div><br /><br />



        

        {/* Products */}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            subCategory
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Brand
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            Warranty
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            trending
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            stock                            
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            Rating
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            78965
                        </td>
                        <td class="px-6 py-4">
                            eletronics
                        </td>
                        <td class="px-6 py-4">
                            phone
                        </td>
                        <td class="px-6 py-4">
                            Apple
                        </td>
                        <td class="px-6 py-4">
                            2
                        </td>
                        <td class="px-6 py-4">
                            true
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-6 py-4">
                            4
                        </td>



                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Link</a>
                        </td>
                    </tr>
                 
                </tbody>
            </table>
        </div><br /><br /><br /><br /><br /><br />





      
    </div>
  )
}

export default AdminProductsDesign
