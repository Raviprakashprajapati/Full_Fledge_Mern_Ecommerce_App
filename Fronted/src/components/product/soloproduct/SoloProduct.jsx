import React, { useEffect, useState } from 'react'
import SoloProductDesign from '../../../design/SoloProductDesign'
import { useParams } from 'react-router-dom'
import { searchProductByInput } from '../../api/searchApi'
import Loader from '../../utils/Loader'

function SoloProduct() {


  const [data,setData] = useState(null)
  const input = useParams()

  useEffect(()=>{

    if(input){
      searchProductByInput(input)
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log("err in searching by input", err)
      })
    }

  },[])
  







  return (
    <div>

      <FilterProduct/>
        

    </div>
  )
}

export default SoloProduct



function FilterProduct() {

  let [toggleBtn, setToggleBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleFilterSidebar() {
    setToggleBtn(!toggleBtn);
    console.log(toggleBtn);
  }
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (e) => {
    // Check if the click event originated from the close button
    setIsModalOpen(false);
  };

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleApplyClick = () => {
    // You can add additional logic here, such as filtering products based on the entered range.
    console.log(`Minimum Price: ${minPrice}, Maximum Price: ${maxPrice}`);
  };

  return (
    <div>
      {/* button */}
      <button
        type="button"
        class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
        onClick={openModal}
      >
        <svg
          class="w-5 h-5 me-2 -ms-1"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="apple"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
          ></path>
        </svg>
        Check out with Apple Pay
      </button>

      <div className="flex items-center justify-center min-h-screen">
        {/* popup */}
        {isModalOpen && (
          <div className=" w-[90%] md:w-[100%] m-auto  fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-black opacity-50 fixed inset-0"></div>
            <div className="bg-white w-full md:w-1/2 p-6 md:p-8 rounded-lg z-50">
              <div className="flex justify-end">
                <button
                  className="text-gray-500 hover:text-gray-700 close-button"
                  onClick={closeModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Add your modal content here */}
              <div
                id="dropdown"
                className=" p-3 bg-black rounded-lg shadow dark:bg-gray-700"
              >
                {/* Price */}
                <div className="mt-3">
                    {/* category */}
                  <div>
                    <h6 className="mb-3 text-sm font-medium text-white">
                      Category
                    </h6>
                    <ul className="space-y-2 text-sm flex flex-wrap gap-1 items-center " aria-labelledby="dropdownDefault"  >

                      <li className="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />

                        <label
                          for="apple"
                          className="ml-2 text-sm font-medium text-white"
                        >
                          electronics
                        </label>
                      </li>

                      <li className="flex items-center">
                        <input id="fitbit" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="fitbit" className="ml-2 text-sm font-medium text-white">
                        clothing
                        </label>
                        </li>

                        <li className="flex items-center">
                        <input id="dell" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="dell" className="ml-2 text-sm font-medium text-white">
                            furniture
                        </label>
                        </li>


                        <li className="flex items-center">
                        <input id="canon" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="canon" className="ml-2 text-sm font-medium text-white">
                            beauty
                        </label>
                        </li>

                        <li className="flex items-center">
                        <input id="canon" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="canon" className="ml-2 text-sm font-medium text-white">
                            book
                        </label>
                        </li>

                        <li className="flex items-center">
                        <input id="canon" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="canon" className="ml-2 text-sm font-medium text-white">
                            beauty
                        </label>
                        </li>


                        <li className="flex items-center">
                        <input id="canon" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="canon" className="ml-2 text-sm font-medium text-white">
                            software
                        </label>
                        </li>


                        <li className="flex items-center">
                        <input id="canon" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="canon" className="ml-2 text-sm font-medium text-white">
                            health
                        </label>
                        </li>


                        <li className="flex items-center">
                        <input id="canon" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="canon" className="ml-2 text-sm font-medium text-white">
                            toys
                        </label>
                        </li>


                        <li className="flex items-center">
                        <input id="canon" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="canon" className="ml-2 text-sm font-medium text-white">
                            sports
                        </label>
                        </li>



                    </ul>
                  </div>
                  
                    {/* price */}
                    <div>
                        <div className="h-[0.1rem] mt-3 bg-white" ></div>
                    <h6 className=" text-sm font-medium mt-3 text-white">Price</h6>
                    <div className="flex space-x-2">
                        <input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-[7rem]"
                        />
                        <span className="text-gray-500">-</span>
                        <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-[7rem]"
                        />
                      
                    </div>
                    </div>
                 
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

