import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServicesGuide from "./ServicesGuide";
import LoginUser from "./LoginUser";
import MainPage from "./MySitePage1";
import CreatePost from "./Forum";
import Forum from "./Forum";

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
        },

        {
            path: "/forum",
            element: <Forum />
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router;
