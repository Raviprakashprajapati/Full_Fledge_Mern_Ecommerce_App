import React from "react";
import { Link } from "react-router-dom";
function ProductCardHome({productHeaderName="Top Deals",data=[]}) {

  return (
    <>


    <div className="ml-3 mt-3" >
      
    <h4 className="text-xl font-bold" >{productHeaderName}</h4>

    </div>

      <div className="slider-container overflow-x-auto whitespace-nowrap">

       {
        data?.map((i)=>(
            <Link key={i?._id} to={`/product-details/${i?._id}`} >
                 <div  className="w-[200px] bg-sl bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300 inline-block mx-2 my-4">
          <img
            className="w-[7rem] mt-1 h-[150px] md:h-[165px] m-auto "
            src={i?.images?.[0]}
            alt="Product"
          />

          <div className="p-4 text-center">
            <h3 className="font-semibold mb-2">{i?.name}</h3>
            <p className="text-gray-600 text-sm mb-2">
             ₹ {i?.price}
            </p>
          </div>
        </div>
            </Link>
        ))
       }

       

      </div>
    </>
  );
}

export default ProductCardHome;
