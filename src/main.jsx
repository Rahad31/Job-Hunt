import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Root from "./components/Layout/Root/Root";
import AuthProvider from "./components/Provider/Provider";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Error404 from "./components/Pages/Error404/Error404";
import Profile from "./components/Pages/Profile/Profile";
import PrivateRoute from "./components/Route/PrivateRoute/PrivateRoute";
import Addjob from "./components/Pages/Addjob/Addjob";
import Blogs from "./components/Pages/Blogs/Blogs";
import Myjob from "./components/Pages/Myjob/Myjob";
import Update from "./components/Pages/Update/Update";
import Alljob from "./components/Pages/Alljob/Alljob";
import Details from "./components/Pages/Details/Details";
import Appliedjob from "./components/Pages/Appliedjob/Appliedjob";
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
        loader: () => fetch("https://job-server-beryl.vercel.app/job"),
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
        loader: () => fetch("https://job-server-beryl.vercel.app/job"),
        element: (
          <PrivateRoute>
            <Myjob></Myjob>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobdetails/:_id",
        loader: () => fetch("https://job-server-beryl.vercel.app/job"),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedjob",
        loader: () => fetch("https://job-server-beryl.vercel.app/appjob"),
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
        loader: ({ params }) =>
          fetch(`https://job-server-beryl.vercel.app/job/${params.id}`),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",

        element: (
         
            <Blogs></Blogs>
         
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
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
