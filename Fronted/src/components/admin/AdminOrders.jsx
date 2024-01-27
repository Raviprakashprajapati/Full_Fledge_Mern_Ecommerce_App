import React, { useEffect, useState } from 'react'
import AdminOrdersDesign from '../../design/AdminOrdersDesign'
import { adminGetAllOrders } from '../api/adminApi'
import Loader from '../utils/Loader'

function AdminOrders() {


  const [order,setOrder] = useState(null)

  useEffect(()=>{ 

    adminGetAllOrders()
    .then((data)=>{
      console.log(data)
      if(data){
        setOrder(data.data)
      }
    })
    .catch((err)=>{
      console.log("err in order order ",err)
    })

  },[])

  return (
    <div>
      {
        order?
        <AdminOrdersDesign order={order} />:<Loader/>
      }
    </div>
  )
}

export default AdminOrders
