import React from "react";
import adminImage02 from "../../assets/image/adminImage02.png";
function AdminAddProduct() {
  return (
    <div>
      <br />
      <br />
      <div className="w-[80%] m-auto ">
        <div className="px-4 sm:px-0 ">
          <div className="bg-black  rounded-lg flex justify-center items-center p-2">
            <img src={adminImage02} className='h-[4rem]' alt="" />
            <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
              Admin - Add Product
            </h3>
          </div>
        </div>{" "}
      </div>
      <br />
      <br />

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>

        {/* <!-- Small statement on top --> */}

        {/* <!-- Form with labels and input boxes --> */}
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
         
          {/* name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="name"
              name="name"
              placeholder="Enter product name"
              required
            />
          </div>

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
              name="Price"
              placeholder="Enter product price"
              required
            />
          </div>

          {/* Brand */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Brand"
            >
              Brand:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="Brand"
              name="Brand"
              placeholder="Enter product brand"
              required
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
              required
            />
          </div>

          {/* category */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="category"
            >
              Category:
            </label>
            <p className="text-[0.8rem]" >[electronics clothing furniture beauty book sports toys health software]</p>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="category"
              name="category"
              placeholder=""
              required
            />
          </div>

          {/* subcategory */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="subcategory"
            >
              Subcategory:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="subcategory"
              name="subcategory"
              placeholder="phone"
              required
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
              required
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
              required
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
              required
            />
          </div>

          {/* keywords */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="keywords"
            >
              Keywords:
            </label>
            <p className="text-sm" >smartphone, iOS, Apple,iphone,best phone</p>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              id="keywords"
              name="keywords"
              placeholder=""
              required
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
              required
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
              required
            />
          </div>

          {/* features */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="features"
            >
              Features:
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md min-h-10 max-h-40"
              id="features"
              name="features"
              placeholder="128 GB ROM\n"
              required
            
              
            ></textarea>
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
              name="Offer"
              placeholder="1. offer\n2. offwe2"
              required
            
              
            ></textarea>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="Description"
            >
              Description:
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md min-h-10 max-h-40"
              id="Description"
              name="Description"
              placeholder="1. example\n2. example"
              required
            
              
            ></textarea>
          </div>

          
          {/* images */}
          <div>
          <div className="image1">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input1">Upload Image1</label>
          <input  required className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input1" type="file"/>
          </div>
          <div className="image2 mt-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input2">Upload Image2</label>
          <input required className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input2" type="file"/>
          </div>
          <div className="image3 mt-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input3">Upload Image3</label>
          <input required className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input3" type="file"/>
          </div>
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
              required
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
              create new product
            </a>
          </label>
        </div>


        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>



          {/* <!-- Add similar blocks for other fields --> */}
        </form><br /><br />

        
      </div>
    </div>
  );
}

export default AdminAddProduct;
