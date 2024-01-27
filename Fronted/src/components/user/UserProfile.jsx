import React from 'react'
import UserProfileDesign from '../../design/UserProfileDesign'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../store/redux-features/userSlice'

function UserProfile() {

  const user  = useSelector(selectCurrentUser)
  // console.log(user)


  return (
    <>
    <UserProfileDesign  name={user.name} email={user.email} username={user.username} contact={user.contact} address={user.address} password={null} avatar={user.profileImage} />
    </>
  )
}

export default UserProfile
