import React from "react";
import orderImage01 from "../assets/image/orderImage01.png";
import cartImage02 from "../assets/image/cartImage02.png";
function OrderDetailDesign() {
  return (
    <>
      <h4 className="bg-slate-800 text-white font-medium text-2xl flex justify-center p-3 m-10 rounded-lg">
        Order Details
      </h4>

        {/* order detail */}
      <div className="m-8 flex justify-center items-center flex-col border border-slate-300 p-4 rounded-lg">
        <ul  >
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">Order ID: #123456789</li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">Customer Name: John Doe</li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">  Contact: +1 123 456 7890</li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">ProductId: #4363654474</li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">Address: 123 Main St, Cityville</li>
          <li className="text-xxl bg-green-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">Status : Success</li>
        </ul>
     
      </div>


      {/* single porduct */}
      <div className="w-[90%] md:w-2/3 m-auto">
        <div className="flex h-full flex-col bg-white shadow-xl">
          <div className="flex-1 px-4 py-6 sm:px-6">
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {/* per order */}
                  <li className="flex flex-col py-6">
                    {/* Order Summary */}

                  
                    <div className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70"
                          alt="Product 1"
                          className="h-full p-2 w-auto object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">Product</a>
                            </h3>
                            <p className="ml-4">$90.00</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>
                          {/* Cancel button can be placed here if needed */}
                        </div>
                      </div>
                    </div>

                  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />

        {/* for multiple product */}
      <div className="w-[90%] md:w-2/3 m-auto">
        <div className="flex h-full flex-col bg-white shadow-xl">
          <div className="flex-1 px-4 py-6 sm:px-6">
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {/* per order MANY PRODUCTS */}
                  <li className="flex flex-col py-6">
                    {/* Order Summary */}

                    {/* Product 1 */}
                    <div className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70"
                          alt="Product 1"
                          className="h-full p-2 w-auto object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">Product 1 Name</a>
                            </h3>
                            <p className="ml-4">$90.00</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>
                          {/* Cancel button can be placed here if needed */}
                        </div>
                      </div>
                    </div>

                    {/* Product 2 */}
                    <div className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src="https://example.com/product2-image.jpg"
                          alt="Product 2"
                          className="h-full p-2 w-auto object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">Product 2 Name</a>
                            </h3>
                            <p className="ml-4">$120.00</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 2</p>
                          {/* Cancel button can be placed here if needed */}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

   

      {/* Order Details */}
      <div className="m-8 flex justify-center items-center flex-col ">
        <ul>
          <li className="text-xxl bg-black p-4 rounded-lg text-white mb-2 font-medium">Total Price : 43436</li>
          
          <li className="text-xxl bg-red-800 p-4 rounded-lg text-white mb-2 font-medium">  Cancel Order</li>
   

        </ul>
        </div>
      
    

      <br /><br /><br /><br /><br />
    </>
  );
}

export default OrderDetailDesign;
