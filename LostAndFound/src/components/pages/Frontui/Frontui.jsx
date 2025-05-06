import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import React from 'react'
import Layout from "../../Layout/Layout";
import Home from "../Home";
import ContactUs from "../ContactUS/Contactus";
import LostItemList from "../LostItemList";
import { useState } from "react";
import AddProduct from "../../AddProduct";
import ItemDetail from "../Elements/ItemDetail/ItemDetail";
import MyAi from "../MyAi/MyAi";

const Frontui = () => {

    // Home
    // Add Item
    // Found Item
    // Contact Us
 const [showbot, setshowbot] = useState(false)

   const handleMousehover = () =>{
    setshowbot(false) ;
   }
   const handleMouseEnter = () =>{
    setshowbot(true) ;
   }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/contactus",
                    element: <ContactUs />
                },
                {
                    path: "/LostItemList",
                    element: <LostItemList />
                },
                {
                    path: "/AddProduct",
                    element: <AddProduct />
                },
                {
                    path: "/ItemDetail/:id",
                    element: <ItemDetail/>
                },
                {
                    path: "/MyAi",
                    element: showbot ?  <MyAi/> : null 
                    
                }

            ]
        }
    ]);

    return (
        <div className="h-[100vh] w-[100vw] bg-gradient-to-br from-gray-900 via-black to-gray-800 " 
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMousehover} >
            <RouterProvider router={router} />

        </div>
    )
}

export default Frontui