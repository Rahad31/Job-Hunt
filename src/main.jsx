import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import AuthProvider from "./components/Provider/Provider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Error404 from "./components/Error404/Error404";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Addjob from "./components/Addjob/Addjob";
import Blogs from "./components/Blogs/Blogs";
import Myjob from "./components/Myjob/Myjob";
import Update from "./components/Update/Update";
import Alljob from "./components/Alljob/Alljob";
import Details from "./components/Details/Details";
import Appliedjob from "./components/Appliedjob/Appliedjob";
import { HelmetProvider } from "react-helmet-async";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alljob",
        loader: () => fetch("http://localhost:5000/job"),
        element: <Alljob></Alljob>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",

        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/myjobs",
        loader: () => fetch("http://localhost:5000/job"),
        element: (
          <PrivateRoute>
            <Myjob></Myjob>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobdetails/:_id",
        loader: () => fetch("http://localhost:5000/job"),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedjob",
        loader: () => fetch("http://localhost:5000/appjob"),
        element: (
          <PrivateRoute>
            <Appliedjob></Appliedjob>
          </PrivateRoute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoute>
            <Addjob></Addjob>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatejob/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",

        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error404></Error404>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
       <HelmetProvider><RouterProvider router={router} /></HelmetProvider>
      
    </AuthProvider>
  </React.StrictMode>
);
