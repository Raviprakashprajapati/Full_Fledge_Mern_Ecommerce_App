import React from 'react'
import CarouselBar from '../../design/CarouselBar'
import NavBar from '../utils/NavBar'
import ProductCardHome from '../../design/ProductCardHome'

import image05 from "../../assets/image/image05.jpg"

function Home() {
  return (
    <>
     <NavBar />
      <CarouselBar />
      <ProductCardHome />
      <br />
      

      <div class="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl border  ">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={image05}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
               Seamless Shopping Experience
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Discover and Shop with Ease
            </a>
            <p class="mt-2 text-slate-500">
            Shop seamlessly on our user-friendly platform. Find everything you need effortlessly.Effortless shopping, all you need.
            </p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Home
