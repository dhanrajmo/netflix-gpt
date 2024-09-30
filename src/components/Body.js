import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Play from './Play'

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/movie/:id',
            element:<Play/>
        }
    ])

    
    return (
        <div>
            <RouterProvider router={appRouter}>
            </RouterProvider>
        </div>
    )
}

export default Body