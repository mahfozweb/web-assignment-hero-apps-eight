import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Layout from '../Layout/Layout';
import Error from '../Pages/Error';
import Apps from '../Pages/Apps';

const router = createBrowserRouter([
  {
    path: "/",
    Component : Layout,
    errorElement : <Error></Error>,
    children :[
        {
            index : true,
            Component : Home
        },
        {
            path: "/home",
            Component : Home
        },
        {
            path : "/apps",
            Component : Apps
        },
        
    ],
  },
]);
export default router