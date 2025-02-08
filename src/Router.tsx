import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import Register from "./Form/Register";
import Login from "./Form/Login";
import ProductListing from "./ProductListing/ProductListing";
import MapLocation from "./component/MapLocation";
import DashRoute from "./Dashboard/DashRoute";
import Sitemap from "./component/SiteMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
      </>
    ),
  },
  {
    path: "/about-us",
    element: (
      <>
        <AboutPage />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/all-product",
    element: <ProductListing />,
  },
  {
    path: "/product",
    element: <ProductListing />,
  },
  {
    path: "/map",
    element: (
      <>
        <MapLocation />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <DashRoute />
      </>
    ),
  },
  {
    path: "/dashboard/:subpage",
    element: (
      <>
        <DashRoute />
      </>
    ),
  },
  {
    path: "/sitemap",
    element: (
      <>
        <Sitemap />
      </>
    ),
  },
]);

export default router;
