import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getDate } from "../components/utils/randomFunciton";
function MyReviewDesign({comment,
  rating,
  product,
  date}) {

 


  return (
    <>

  

      {/* reviews div */}
      <div>

        {/* per review */}
        <div class="p-6 w-[90%] mb-4 md:w-[70%] mx-auto bg-white m rounded-xl shadow-lg flex items-center space-x-4">
          
          <div>
            <p class="text-black mb-3 text-sm pt-2 ">
              {comment}
            </p>
            <div class=" text-[0.7rem]  font-medium text-white bg-black p-2 inline hover:bg-slate-800">
              <Link>
              Product</Link>
            </div>
            <div class="flex justify-between text-base mt-3 md:text-lg font-medium items-center md:block text-black">
              <p>Rating : 3</p>
              <p className="text-slate-600 text-sm" >{date}</p>
            </div>
          </div>
        </div>

      </div>


      
    </>
  );
}

export default MyReviewDesign;
