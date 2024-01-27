import React, { useEffect, useState } from 'react'
import OrderDetailDesign from '../../design/OrderDetailDesign'
import { useParams } from 'react-router-dom'
import { orderDetailAPI } from '../api/orderApi'
import Loader from '../utils/Loader'

function OrderDetails() {

  const {orderId} = useParams()
  const [orderDetail,setOrderDetail] = useState(null)


  useEffect(()=>{

    if(orderId){

      orderDetailAPI(orderId)
      .then((data)=>{
        // console.log(data.data)
        if(data){
          setOrderDetail(data.data)
        }
      }).catch((err)=>{
        console.log("err ",err)
      })
    }

  },[])
  


  





  return (
    <div>
       {
        orderDetail? <OrderDetailDesign orderDetail={orderDetail}    />:<Loader/>
       }
      
    </div>
  )
}

export default OrderDetails
