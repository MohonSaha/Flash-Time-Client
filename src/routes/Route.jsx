import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Listing from "../pages/Listing/Listing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listing",
        element: <Listing />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
