import React, { useState } from 'react'
import adminImage02 from "../../assets/image/adminImage02.png"
import { useParams } from 'react-router-dom'
import { adminUpdateProductAPI } from '../api/adminApi'

function AdminUpdateProduct() {

  const {productId} = useParams()
  const [productField,setProductField] = useState({
      price:"",
      discount:"",
      warranty:null,
      age:"",
      trending:null,
      hype:null,
      stock:"",
      offer:""

  })

  function handleChange(e){
    const {name,value} = e.target
    setProductField((prev)=>({...prev,[name]:value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    const body = {}
    console.log(productField)
    for (const i in productField) {
      if(productField[i]){
        body[i] = productField[i]
      }
    }
    
    adminUpdateProductAPI(productId,body)
    .then((data)=>{
      if(data){
        window.location.reload()
      }
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  

  return (
    <div>
        <div>

        {/* headers */} <br /><br />
      <div className="w-[80%] m-auto ">
        <div className="px-4 sm:px-0 ">
          <div className="bg-black  rounded-lg flex justify-center items-center p-2 ">
            <img src={adminImage02} alt="" className='h-[4rem]' />
            <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-2 rounded-lg text-center">
              Admin - Update Product
            </h3>
          </div>
        </div>{" "}
      </div><br /><br />
      

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Only This Fields Can Be Update</h2>

        {/* <!-- Small statement on top --> */}

      <p className='text-black m-3 ' >ProductId  #{productId}</p>
        {/* <!-- Form with labels and input boxes --> */}
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
         
        

          {/* Price */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Price"
            >
              Price:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="Price"
              name="price"
              placeholder="Enter product price"
              value={productField.price}
              onChange={handleChange}
              
            />
          </div>


          {/* discount */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="discount"
            >
              Discount:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="discount"
              name="discount"
              placeholder="Min.50% Off OR Up to 70% Off "
              
              value={productField.discount}
              onChange={handleChange}
              
            />
          </div>


          

          {/* warranty */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="warranty"
            >
              Warranty:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="warranty"
              name="warranty"
              placeholder="1 or 2"
              
              value={productField.warranty}
              onChange={handleChange}
            />
          </div>

          {/* age->new or old */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="age"
            >
              Age:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="age"
              name="age"
              placeholder="new or old"
              
              value={productField.age}
              onChange={handleChange}
            />
          </div>

          {/* trending->true or false */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="trending"
            >
              Trending:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="trending"
              name="trending"
              placeholder="true or false"
              
              value={productField.trending}
              onChange={handleChange}
            />
          </div>

          

          {/* hype-?true or false */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="hype"
            >
              Hype:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="hype"
              name="hype"
              placeholder="true or false"
              
              value={productField.hype}
              onChange={handleChange}
              
            />
          </div>

          {/* stock */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="stock"
            >
              Stock:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="stock"
              name="stock"
              placeholder="1 or 10"
              
              value={productField.stock}
              onChange={handleChange}
            />
          </div>

          

          {/* Offer */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Offer"
            >
              Offer:
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md min-h-10 max-h-40"
              id="Offer"
              name="offer"
              placeholder="1. offer\n2. offwe2"
              
              value={productField.offer}
              onChange={handleChange}
            
              
            ></textarea>
          </div>

          

          
        
          <br />

        {/* pick */}
          <div class="flex items-start mb-5 mt-5 ">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              
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
              update product
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



          {/* <!-- Add similar blocks for other fields --> */}
        </form><br /><br />

        
      </div>
    </div>
      
    </div>
  )
}

export default AdminUpdateProduct
