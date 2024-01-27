import React, { useEffect, useState } from 'react'
import { GetFeedbackUserAPI } from '../api/userApi'
import adminImage02 from "../../assets/image/adminImage02.png"
import { getDate } from '../utils/randomFunciton'
import Loader from '../utils/Loader'
function AdminFeedback() {

    const [feedback,setFeedback] = useState(null)

    useEffect(()=>{

        GetFeedbackUserAPI()
        .then((data)=>{
            if(data?.data){
                setFeedback(data.data)
                console.log(data.data)
            }
        }).catch((err)=>{
            console.log("Err in feedback: " + err)
        })

    },[])

  return (
    <div>
            <br />
        <div className='w-[93%] md:w-[80%] m-auto ' >
        <div className="px-4 sm:px-0 ">
          <div className="bg-black p-2  rounded-lg flex justify-center items-center ">
            <img src={adminImage02} className='h-[4rem]'  alt="" />
            <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
              Admin - Feedback
            </h3>
          </div>

         
        </div>
        </div><br />
        

        
    {
        feedback?<div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Contact
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Rating
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Feedback
                    </th>
                    
                    <th scope="col" class="px-6 py-3">
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
    
              {
                feedback?.length>0?
                <>
                {
                    feedback.map((i,index)=>(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {i?.name}
                        </th>
                        <td class="px-6 py-4">
                            {i?.contact}
                        </td>
                        <td class="px-6 py-4">
                            {i?.rating}
                        </td>
                        <td class="px-6 py-4">
                            {i?.feedbackContent}
                        </td>
                        
                        <td class="px-6 py-4">
                            {getDate(i?.createdAt)}
                        </td>
                    </tr>
                    ))
                }
                </>:<p>There is no feedback</p>
              }
              
            </tbody>
        </table>
    </div>
:<Loader/>    
    }

      
    </div>
  )
}

export default AdminFeedback
