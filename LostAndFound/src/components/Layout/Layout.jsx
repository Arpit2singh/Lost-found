import React from 'react'
import { createBrowserRouter , Outlet , RouterProvider } from 'react-router-dom'
import Header from '../pages/Elements/Header'
import Footer from '../pages/Elements/Footer'

const Layout = () => {
  return (
     <div>
        <Header/>
        <Outlet/>
        <Footer/>
     </div> 
   
  )
}

export default Layout