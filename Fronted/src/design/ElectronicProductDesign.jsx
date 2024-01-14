import React from "react";

function ElectronicProductDesign() {
  return (
    <>
      {/* laptop */}

      {/* mobile */}
      <div class="bg-white border-t p-2 mt-2 ">
        <div className="flex">
          {/* <!-- Product Image Block (left) --> */}
          <div class="md:flex relative">
            {/* <button class="absolute bottom-2 left-2 bg-green-400 text-white px-2 py-1 rounded-full text-[0.6rem] font-semibold">Trending</button> */}
            <div class="md:flex-shrink-0">
              <img
                class="h-[10rem] p-3"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70&crop=false"
                alt="Product Image"
              />
            </div>
          </div>

          {/* <!-- Product Details Block (right) --> */}
          <div class="px-8 pt-2">
            <h1 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Product Name
            </h1>
            <span class="text-black mr-2">$99.99</span>
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              4.5
            </div>
            <p class="text-sm mt-2 mb-[-10px]">Min 70% Off</p>
            <div className="mt-3">
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-[0.7rem] px-5 pt-2 pb-2 text-center ">Cyan to Blue</button>
            </div>
          </div>
        </div>

        {/* <!-- Features Block below the card --> */}
        <div class="  flex gap-2 flex-wrap">
          <button className="border p-1 text-sm text-slate-500">
            Lorem, ipsum dolor.
          </button>
          <button className="border p-1 text-sm text-slate-500">
            Lorem, ipsum dolor.
          </button>
          <button className="border p-1 text-[0.7rem] text-slate-500">
            Lorem, ipsum{" "}
          </button>
          <button className="border p-1 text-[0.7rem] text-slate-500">
            Lorem, ipsum dolor.
          </button>
          <button className="border p-1 text-[0.7rem] text-slate-500">
            Lorem, ipsum dolor.
          </button>
        </div>
      </div>

      

      

      
    </>
  );
}

export default ElectronicProductDesign;

// {/* <div class="max-w-md mt-3 mx-auto bg-white border shadow-md overflow-hidden md:max-w-2xl">
// <div class="md:flex relative">
//     {/* <!-- Trending Button --> */}
//     <button class="absolute bottom-2 left-2 bg-green-400 text-white px-2 py-1 rounded-full text-sm font-semibold">Trending</button>

//     <div class="md:flex-shrink-0">
//     <img class="h-[15rem] p-3" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70&crop=false" alt="Product Image"/>
//     </div>

//     <div class="px-8 pt-2">
//     <h1 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Product Name</h1>
//     <span class="text-black mr-2">$99.99</span>
//     <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">4.5</div>
//         <p className='text-sm mt-2 mb-[-10px]' >Min 70% Off</p>
//     <div class="mt-4">
//         <p class="text-slate-600">Lorem ipsum dolor sit amet.</p>
//         <p class="text-slate-600">Lorem ipsum dolor sit amet.</p>
//         <p class="text-slate-600">Lorem ipsum dolor sit amet.</p>
//         <p class="text-slate-600">Lorem ipsum dolor sit amet.</p>
//     </div>
//     </div>
// </div>
// </div> */}
