import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Body from "./Components/Body";

import { createBrowserRouter, Outlet } from "react-router-dom";
import AboutBox from "./Components/AboutBox";
import ContactBox from "./Components/ContactBox"
import Error from "./Components/Error";
import RestraMenu from "./Components/RestraMenu";
// Your main layout component
const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet/>
    </div>
  );
};

// Define routes here and export the router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/aboutbox",
        element: <AboutBox />,
      },
      {
        path:"/contactbox",
        element:<ContactBox/>,
        
      },
      {
        path:"/restaurant/:resid",
        element:<RestraMenu/>,
        
      },
    ],
    errorElement:<Error/>,
  },
  

]);

export default appRouter;
