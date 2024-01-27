import React from 'react'
import contactImage from "../../assets/image/contactImage.jpg"
import contact01 from "../../assets/image/contact01.jpg"
import ravi from "../../assets/image/ravi.png"

function Contactus() {
  return (
    <div  >
     <section className=" mt-[-90px]  overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
 
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <img className="mx-auto h-[15rem]" src={contact01} alt=""/>
    <figure className="">
      <blockquote className="text-center  font-semibold leading-8 text-gray-900  sm:leading-9">
        <p>“
Connect with website leader Ravi Prakash! For inquiries, feedback, or collaboration, reach out through the  Ravi's Portfolio”</p>
      </blockquote>
      <figcaption className="mt-10">
        <img className="mx-auto h-10 w-10 rounded-full" src={ravi} alt=""/>
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900"><a href="https://raviprakashprajapati.netlify.app/" className='text-orange-400 bg-black p-2 rounded-lg hover:bg-slate-800' >Ravi Prakash Prajapati</a></div>
        
          {/* <div className="text-gray-600">CEO of Workcation</div> */}
        </div>
      </figcaption>
    </figure>
  </div>
</section>

    </div>
  )
}

export default Contactus
