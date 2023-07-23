import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Bloge from './Components/Blog.js/Bloge';
import Contact from './Components/Contact';
import Home from './Components/Home';

export default function Routes({ Children }) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/blog",
            element: <Bloge></Bloge>,
        },

    ]);


    return (
        <RouterProvider router={router}>
            {Children}
        </RouterProvider>

    )
}
