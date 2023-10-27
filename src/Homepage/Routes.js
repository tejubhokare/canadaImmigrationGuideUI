import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ServicesGuide from "./ServicesGuide";
import LoginUser from "./LoginUser";
import MainPage from "./MySitePage1";
import Forum from "./Forum";
import NewDiscussion from "./NewDiscussion";
import Register from "./Register";

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
            path: "/register",
            element: <Register />
        },
        {
            path: "/img",
            element: <MainPage />
        },

        {
            path: "/forum",
            element: <Forum />
        },

        {
            path: "/newDiscussion",
            element: <NewDiscussion />
        },
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default Router;
