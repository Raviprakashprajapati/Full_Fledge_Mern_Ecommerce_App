import React, { useState } from 'react'

function UserContextProvider({children}) {

    const [user,setUser] = useState({})

  return (
    <UserContextProvider.Provider value={{user,setUser}}  >
        {children}
    </UserContextProvider.Provider>
  )
}

export default UserContextProvider
