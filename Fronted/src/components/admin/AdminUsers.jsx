import React, { useEffect, useState } from 'react'
import AdminUsersDesign from '../../design/AdminUsersDesign'
import { adminGetAllUsersAPI } from '../api/adminApi'
import Loader from '../utils/Loader'

function AdminUsers() {

  const [users,setUsers] = useState(null)

  useEffect(()=>{

    adminGetAllUsersAPI()
    .then((data)=>{
      console.log(data.data)   
      setUsers(data.data)   
    }).catch((err)=>{
      console.log("err ",err)
    })

  },[])

  return (
    <div>
       {
        users? <AdminUsersDesign user={users} />:<Loader/>
       }
      
    </div>
  )
}

export default AdminUsers
