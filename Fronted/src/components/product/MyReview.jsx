import React, { useEffect, useState } from 'react'
import MyReviewDesign from '../../design/MyReviewDesign'
import reviewImage from "../../assets/image/reviewImage.jpg"
import { getUserReviewsAPI } from '../api/productApi'
import { getDate } from '../utils/randomFunciton'

function MyReview() {

  const [review,setReview] = useState(null)

  useEffect(()=>{

    try {

      getUserReviewsAPI()
      .then((data)=>{
        // console.log(data)
        if(data?.data?.length>=1)
        {
          
        setReview(data?.data)
        }
      })
      
    } catch (error) {
      console.log("error: " + error)
    }

  },[])

  function handleDate(d)
  {
    return getDate(d)
  }


  return (
    <div>

         {/* order header */}
     <div class="flex items-center mt-6 justify-center">
        {/* <img src={orderImage01} className="h-[7rem]" alt="" /> */}
        <h2
          class="text-lg ml-3 bg-black text-white p-4 rounded-lg font-medium "
          id="slide-over-title text-center"
        >
          My Reviews
        </h2>
      </div><br />


      {
        review?null:  <div className='mt-10' >
        <img src={reviewImage} className='h-[10rem] block m-auto' alt="" />
        <p className='text-center text-slate-500' >There are no reviews at the moment </p>
      </div>
      }
      
   
            {
              review?.length>=1 && review.map((i,index)=>{
                return(
                  <MyReviewDesign key={index}

                  comment={i?.comment}
                  rating={i?.rating}
                  product={i?.productId}
                  date={handleDate(i?.createdAt)}
                  
                  
                  />
                )
              })
            }
      

    
      
    
    

    </div>
  )
}

export default MyReview
