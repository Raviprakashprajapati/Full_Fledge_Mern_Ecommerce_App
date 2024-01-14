import React from "react";
function ProductCardHome({productHeaderName="Top Deals"}) {
  return (
    <>


    <div className="ml-3 mt-3" >
      
    <h4 className="text-xl font-bold" >{productHeaderName}</h4>

    </div>

      <div className="slider-container overflow-x-auto whitespace-nowrap">

        <div className="w-[200px] bg-sl bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300 inline-block mx-2 my-4">
          <img
            className="w-32 mt-1 h-100 m-auto object-cover"
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70"
            alt="Product"
          />

          <div className="p-4 text-center">
            <h3 className="font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 text-sm mb-2">
              offer line goes here...
            </p>
          </div>
        </div>

        <div className="w-[200px] bg-sl bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300 inline-block mx-2 my-4">
          <img
            className="w-32 mt-1 h-100 m-auto object-cover"
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70"
            alt="Product"
          />

          <div className="p-4 text-center">
            <h3 className="font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 text-sm mb-2">
              Description or offer line goes here...
            </p>
          </div>
        </div>

        <div className="w-[200px] bg-sl bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300 inline-block mx-2 my-4">
          <img
            className="w-32 mt-1 h-100 m-auto object-cover"
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70"
            alt="Product"
          />

          <div className="p-4 text-center">
            <h3 className="font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 text-sm mb-2">
              Description or offer line goes here...
            </p>
          </div>
        </div>

        <div className="w-[200px] bg-sl bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300 inline-block mx-2 my-4">
          <img
            className="w-32 mt-1 h-100 m-auto object-cover"
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70"
            alt="Product"
          />

          <div className="p-4 text-center">
            <h3 className="font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 text-sm mb-2">
              Description or offer line goes here...
            </p>
          </div>
        </div>

        <div className="w-[200px] bg-sl bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300 inline-block mx-2 my-4">
          <img
            className="w-32 mt-1 h-100 m-auto object-cover"
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70"
            alt="Product"
          />

          <div className="p-4 text-center">
            <h3 className="font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 text-sm mb-2">
              Description or offer line goes here...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCardHome;
