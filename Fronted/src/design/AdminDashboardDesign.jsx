import React from 'react'
import adminImage02 from "../assets/image/adminImage02.png"
function AdminDashboardDesign() {
  return (
    <div  >

        {/* header */}
         <div className='mt-5 mb-8'>
        <div className="w-[100%] md:w-[80%] m-auto ">
            <div className="px-4 sm:px-0 ">
            <div className="bg-black  rounded-lg flex justify-center items-center  p-2">
                <img src={adminImage02} className='h-[4rem]' alt="" />
                <h3 className="text-lg text-amber-300  font-semibold  leading-7 p-3 rounded-lg text-center">
                Admin - DASHBOARD
                </h3>
            </div>
            </div>
        </div>
        </div><br />

        {/* User */}
       <div className='flex flex-wrap gap-5' >

       <div className="p-6 hover:bg-slate-300 hover:cursor-pointer max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12 rounded-full" src="https://img.freepik.com/free-vector/future-work-concept-illustration_614304-14.jpg?w=740&t=st=1704980724~exp=1704981324~hmac=27a7304e1c2147aea79771413181eba085054c8ffd66d36f4254fe6daeb4a21b" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">99</div>
          <p className="text-slate-500 ">USERS</p>
        </div>
      </div>

      <div className="p-6 max-w-sm mx-auto hover:bg-slate-300 hover:cursor-pointer bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12 rounded-full" src="https://img.freepik.com/free-vector/shopping-discounts-allowances-cartoon-web-icon-selling-price-reduction-retail-sales-creative-marketing-special-offer-customer-attraction-idea-vector-isolated-concept-metaphor-illustration_335657-2750.jpg?w=740&t=st=1704981109~exp=1704981709~hmac=bee6a06e9fe5e8aae2a97af79cef49766eb9c9902b2e3944fc395e42f8420908" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">99</div>
          <p className="text-slate-500 text-sm">PRODUCTS</p>
        </div>
      </div>

      <div className="p-6 max-w-sm hover:bg-slate-300 hover:cursor-pointer mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12 rounded-full" src="https://img.freepik.com/free-vector/shopping-cart-icon-isolated-illustration_18591-82226.jpg?w=740&t=st=1704981274~exp=1704981874~hmac=d552bc0417a7bd78ce34de7358aaf6b00a5755d7d1aa04e552e482e981dbc376" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">99</div>
          <p className="text-slate-500">ORDERS</p>
        </div>
      </div>

      <div className="p-6 max-w-sm hover:bg-slate-300 hover:cursor-pointer mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12 rounded-full " src="https://img.freepik.com/free-vector/five-star-grading-evaluation-rating-estimating-excellent-review-customer-satisfaction-with-service-highest-score-client-feedback_335657-2684.jpg?w=740&t=st=1704981452~exp=1704982052~hmac=4cf801f2e0b320c84b53be12a4a8b29baed79ba45b93ab763e42b23a43e10df9" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">99</div>
          <p className="text-slate-500">REVIEWS</p>
        </div>
      </div>

       </div><br /><br />


        {/* traffric */}
        <div className='flex justify-center items-center gap-4 w-[90%] m-auto  '>
        <img src="https://img.freepik.com/free-photo/graph-going-up-red-arrow-bar-graph-with-arrow-business-concept_35913-3361.jpg?w=826&t=st=1704982338~exp=1704982938~hmac=0a63334242f473d941c663dfaede1b5bbc6a9ca53e15ea2e5945d1166ba40fd5" className='h-[8rem]' />
       <button disabled type="button" class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-slate-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
       
        Total Visitors...{"5"}
        </button>

        </div><br /><br />


        {/* block */}
        <div className='w-[90%] md:w-[80%] m-auto'>
        <blockquote className=" md:text-2xl font-semibold italic text-center text-slate-900">
          Managing an e-commerce empire is like
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
            <span className="relative text-white">conducting a symphony</span>
          </span>
          of possibilities. Stay tuned to the rhythms of sales, orchestrate product launches, and let the melody of success resonate through your admin dashboard.
        </blockquote>
      </div><br /><br />

    


     

      

      
      
    </div>
  )
}

export default AdminDashboardDesign
