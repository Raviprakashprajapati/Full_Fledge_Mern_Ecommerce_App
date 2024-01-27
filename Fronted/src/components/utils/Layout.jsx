
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default Layout
