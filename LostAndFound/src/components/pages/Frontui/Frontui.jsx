import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import React from 'react'
import Layout from "../../Layout/Layout";
import Home from "../Home";
import ContactUs from "../ContactUS/Contactus";
import LostItemList from "../LostItemList";

import AddProduct from "../../AddProduct";


const Frontui = () => {

    // Home
    // Add Item
    // Found Item
    // Contact Us

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
                }

            ]
        }
    ]);

    return (
        <div className="h-[100vh] w-[100vw] bg-gradient-to-br from-gray-900 via-black to-gray-800 ">
            <RouterProvider router={router} />

        </div>
    )
}

export default Frontui