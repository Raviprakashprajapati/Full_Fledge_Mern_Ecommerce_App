import React from 'react'
import AdminProfileDesign from '../../design/AdminProfileDesign'
import { useSelector } from 'react-redux'
import { selectCurrentAdmin } from '../store/redux-features/adminSlice'

function AdminProfile() {

  const admin = useSelector(selectCurrentAdmin)
  console.log(admin)


  return (
    <div>
        {
          admin?<AdminProfileDesign 
          
          username={admin?.username} 
          email={admin?.email}
          

          />:null
        }
      
    </div>
  )
}

export default AdminProfile
