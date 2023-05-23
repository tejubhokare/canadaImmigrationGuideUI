import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServicesGuide from "./ServicesGuide";
import LoginUser from "./LoginUser";
import MainPage from "./MySitePage1";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />
        },
        {
            path: "/services",
            element: <ServicesGuide />
        },

        {
            path: "/login",
            element: <LoginUser />
        },
        {
            path: "/img",
            element: <MainPage />
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router;
