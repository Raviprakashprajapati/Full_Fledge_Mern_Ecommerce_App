import React from "react";
import orderImage01 from "../assets/image/orderImage01.png";
import cartImage02 from "../assets/image/cartImage02.png"
function AllOrdersDesign() {
  return (
    <div>
      <div class="w-full   md:w-2/3 m-auto">
        {/* order header */}
        <div class="flex items-center mt-6 justify-center">
          {/* <img src={orderImage01} className="h-[7rem]" alt="" /> */}
          <h2
            class="text-lg ml-3 bg-black text-white p-4 rounded-lg font-medium "
            id="slide-over-title text-center"
          >
            My Orders
          </h2>
        </div>

      

        <div>
          <img src={cartImage02} className="mt-5 block m-auto" alt="" />
          <p className="mt-3 text-gray-400 text-center md:text-xl" >Nothing in your Order</p>
        </div>

        {/* GPT orders */}
        <div class="flex h-full flex-col bg-white shadow-xl">
          <div class="flex-1 px-4 py-6 sm:px-6">
            <div class="mt-8">
              <div class="flow-root">
                <ul role="list" class="-my-6 divide-y divide-gray-200">

                  {/* per order */}
                 <li>
                    <p className="mb-[-10px]">Order #1</p>
                 <li class="flex py-6   ">
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70"
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        class="h-full p-2 w-auto object-cover object-center"
                      />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">Throwback Hip Bag</a>
                          </h3>
                          <p class="ml-4">$90.00</p>
                        </div>
                        <div>
                          <p class="mt-2 text-sm   ">
                            Status :{" "}
                            <span className="text-black bg-green-400 p-[0.36rem] rounded-lg font-medium">
                              Success
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty 1</p>

                        <div class="flex">
                          <button
                            type="button"
                            class="font-medium text-white-600 hover:text-white-500 bg-red-500 p-2 rounded-lg"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                 </li>
                  <hr />
                  <hr />
                  <hr />
                  

                  {/* per order MANY PRODUCTS */}
                  <li>
                    <br />
                    <p className="mb-[-10px]">Order #2</p>
                    <li class="flex flex-col py-6">
                    {/* Order Summary */}
                    

                    {/* Product 1 */}
                    <div class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70"
                          alt="Product 1"
                          class="h-full p-2 w-auto object-cover object-center"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">Product 1 Name</a>
                            </h3>
                            <p class="ml-4">$90.00</p>
                          </div>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Qty 1</p>
                          {/* Cancel button can be placed here if needed */}
                        </div>
                      </div>
                    </div>

                    {/* Product 2 */}
                    <div class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src="https://example.com/product2-image.jpg"
                          alt="Product 2"
                          class="h-full p-2 w-auto object-cover object-center"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">Product 2 Name</a>
                            </h3>
                            <p class="ml-4">$120.00</p>
                          </div>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Qty 2</p>
                          {/* Cancel button can be placed here if needed */}
                        </div>
                      </div>
                    </div>
                    {/* all orduct details */}
                    <div>
                    <div class="flex justify-between text-sm font-medium text-gray-900 mb-4">
                      <div>
                        <p className="text-sm mb-3" >Total Price: $210.00</p>
                        <p className="font-normal">Status :{" "}<span class="text-black bg-green-400 p-[0.36rem] rounded-lg font-medium text-sm">
                          Success
                        </span></p>{" "}
                      </div>
                      
                    </div>
                    <button
                        type="button"
                        class="text-sm font-medium text-white-600 hover:text-white-500 bg-red-500 p-2 w-20  rounded-lg"
                      >
                        Cancel 
                      </button>
                    </div>

                  </li>
                  </li>
                  <hr /><hr /><hr />
                

                  {/* per order */}
                  <li>
                  <br />
                    <p className="mb-[-10px]">Order #2</p>
                    <li class="flex py-6   ">
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70"
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        class="h-full p-2 w-auto object-cover object-center"
                      />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">Throwback Hip Bag</a>
                          </h3>
                          <p class="ml-4">$90.00</p>
                        </div>
                        <div>
                          <p class="mt-2 text-sm   ">
                            Status :{" "}
                            <span className="text-black bg-green-400 p-[0.36rem] rounded-lg font-medium">
                              Success
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty 1</p>

                        <div class="flex">
                          <button
                            type="button"
                            class="font-medium text-white-600 hover:text-white-500 bg-red-500 p-2 rounded-lg"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  </li>
                  
                  <hr />
                  <hr />
                  <hr />
                </ul>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default AllOrdersDesign;
