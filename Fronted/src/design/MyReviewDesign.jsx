import React from "react";

function MyReviewDesign() {
  return (
    <>
      <div className="flex justify-center mt-7 mb-7">
        <h4 className="bg-slate-400 text-black p-4 text-xl  font-medium rounded-lg ">
          📝My Reviews
        </h4>
      </div>

      {/* reviews div */}
      <div>
        {/* per review */}
        <div class="p-6 w-[90%] mb-4 md:w-[70%] mx-auto bg-white m rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            <img
              class="h-12 w-12 rounded-full "
              src="https://img.freepik.com/free-vector/happy-middle-age-man-cartoon-head_1308-134364.jpg?w=360&t=st=1704871276~exp=1704871876~hmac=9bd36c2dde7fd5ae9df324d328ed1f3ef17f628f7edf955dcd35a5882522433a"
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <p class="text-slate-500 text-sm pt-2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              ipsa illum iure distinctio facilis at enim temporibus voluptas ab
              ducimus.
            </p>
            <div class=" text-base md:text-lg font-medium text-black">
              Product ID
            </div>
            <div class=" text-base md:text-lg font-medium text-black">
              Star : 3
            </div>
          </div>
        </div>
      </div>


      
    </>
  );
}

export default MyReviewDesign;
