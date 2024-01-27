import React, { useEffect, useState } from 'react'
import AdminDashboardDesign from '../../design/AdminDashboardDesign'
import { adminDashboardAPI } from '../api/adminApi'
import Loader from '../utils/Loader'

function AdminDashboard() {


  const [dashbaord,setDashboard] = useState(null)

  useEffect(()=>{

    adminDashboardAPI()
    .then((data)=>{
      console.log(data)
      if(data){
        setDashboard(data.data)
      }
    })
    .catch((err)=>{
      console.log("erro in dashboard API", err)
    })
  },[])



  return (
    <div>
      {
        dashbaord?<AdminDashboardDesign dashbaord={dashbaord} />:<Loader/>
      }
    </div>
  )
}

export default AdminDashboard
