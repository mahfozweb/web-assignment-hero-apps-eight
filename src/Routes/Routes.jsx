import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Layout from '../Layout/Layout';
import Error from '../Pages/Error';
import Cards from '../Pages/Cards';
import AllCards from '../Pages/AllCards';
import CardDetails from '../Pages/CardDetails';
import Installation from '../Pages/Installation';



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
            Component : AllCards
        },
        {
            path : "/cardDetails",
            Component :CardDetails
        },
        {
            path : "/application",
            Component : Installation
        },
        {
            path : "/apps/:id",
            Component: CardDetails
        }
    ],
  },
]);
export default router