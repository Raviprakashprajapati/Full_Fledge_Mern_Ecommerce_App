import React, { useState } from "react";
import orderImage01 from "../assets/image/orderImage01.png";
import cartImage02 from "../assets/image/cartImage02.png";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../components/store/redux-features/userSlice";
import { Link, useNavigate } from "react-router-dom";
import CountDown from "../components/utils/CountDown";
import { deleteParticularOrderAPI } from "../components/api/orderApi";
import { getCurrentUserAPI } from "../components/api/userApi";

function OrderDetailDesign({ orderDetail }) {
  const user = useSelector(selectCurrentUser);
  const [CountTimer, setCountTimer] = useState(false);
  const navigate = useNavigate();

  const closeCountTimer = () => {
    setCountTimer(false);
  };

  function handleCancelOrder() {
    const orderId = orderDetail?._id;
    const status = orderDetail?.status;
    if (orderId && status.includes("pending")) {
      setCountTimer(true);
      deleteParticularOrderAPI(orderId)
        .then((data) => {
          if (data) {
            setCountTimer(true);

            if (data) {
              getCurrentUserAPI(user._id)
                .then((data) => {
                  localStorage.setItem("user", JSON.stringify(data.data));
                  navigate("/");
                  window.location.reload();
                })
                .catch((err) => {
                  console.log("error", err);
                });
            }
          }
        })
        .catch((err) => {
          console.log("err in order cancel ", err);
        });
    }
  }

  return (
    <>
      {/* COUNTDOWN */}
      {CountTimer && <CountDown onClose={closeCountTimer} />}

      <h4 className="bg-slate-800 text-white font-medium text-2xl flex justify-center p-3 m-10 rounded-lg">
        Order Details
      </h4>

      {/* order detail */}
      <div className="m-8 flex justify-center items-center flex-col border border-slate-300 p-4 rounded-lg">
        <ul>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            Order ID: #{orderDetail?._id}
          </li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            Customer Name: {orderDetail?.customerName}
          </li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            {" "}
            Contact: {orderDetail?.contactNumber}
          </li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            {orderDetail?.products.length === 1 ? (
              <>
                <Link
                  to={`/product-details/${orderDetail?.products[0]?.productId}`}
                >
                  ProductId: #{" "}
                  <span className="text-blue-500">
                    {" "}
                    {orderDetail?.products[0]?.productId}
                  </span>
                </Link>
              </>
            ) : (
              <>
                {orderDetail?.products.map((i, index) => (
                  <p key={index}>
                    <Link to={`/product-details/${i?.productId}`}>
                      ProductId #{index + 1}{" "}
                      <span className="text-blue-500">{i?.productId}</span>
                    </Link>
                  </p>
                ))}
              </>
            )}
          </li>
          <li className="text-xxl bg-slate-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            Address: {orderDetail?.orderAddress}
          </li>
          <li className="text-xxl bg-green-200 p-4 rounded-lg text-slate-900 mb-2 font-medium">
            Status : {orderDetail?.status}
          </li>
        </ul>
      </div>

      {
        // {/* single porduct */}
        orderDetail?.products.length == 1 ? (
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
                              src={orderDetail?.products[0]?.productImage}
                              alt="Product 1"
                              className="h-full m-auto p-2 w-auto object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">
                                    {orderDetail?.products[0]?.productName}
                                  </a>
                                </h3>
                                <p className="ml-4">
                                  ₹ {orderDetail?.products[0]?.price}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500 font-semibold">
                                Qty {orderDetail?.products[0]?.quantity}
                              </p>
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
        ) : (
          // {/* for multiple product */}
          <div className="w-[90%] md:w-2/3 m-auto">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex-1 px-4 py-6 sm:px-6">
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {/* per order MANY PRODUCTS */}
                      <li className="flex flex-col py-6">
                        {/* Order Summary */}

                        {orderDetail?.products.map((i, index) => (
                          <>
                            {/* Product 1 */}
                            <div className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={i?.productImage}
                                  alt="Product Image"
                                  className="h-full p-2 w-auto object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">
                                        Product {index + 1} {i?.productName}
                                      </a>
                                    </h3>
                                    <p className="ml-4">₹ {i?.price}</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500 font-semibold">
                                    Qty {i?.quantity}
                                  </p>
                                  {/* Cancel button can be placed here if needed */}
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

      <br />
      <br />
      <br />

      {/* Order Details */}
      <div className="m-8 flex justify-center items-center flex-col ">
        <ul>
          <li className="text-xxl bg-black p-4 rounded-lg text-white mb-2 font-medium">
            Total Price : {orderDetail?.totalAmount}
          </li>

          {orderDetail?.status.includes("pending") ? (
            <li
              className="text-xxl bg-red-700 text-center hover:bg-red-500 p-4 rounded-lg text-white mb-2 font-medium"
              onClick={handleCancelOrder}
            >
              Cancel
            </li>
          ) : null}
        </ul>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default OrderDetailDesign;
