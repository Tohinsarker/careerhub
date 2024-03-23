import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
