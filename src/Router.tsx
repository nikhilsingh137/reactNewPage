import { createHashRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import Register from "./Form/Register";
import Login from "./Form/Login";
import ProductListing from "./ProductListing/ProductListing";
import MapLocation from "./ProductListing/MapLocation";
import DashRoute from "./Dashboard/DashRoute";
import Sitemap from "./component/SiteMap";
import FreeListing from "./component/FreeListing";
import Advertise from "./component/Advertise";
import AskQuestion from "./component/AskQuestion";
import Contact from "./component/Contact";
import Policy from "./component/Policy";
import ErrorPage from "./Errorpage/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
      </>
    ),
    errorElement: <ErrorPage />,
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
    path: "/listing",
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
    path: "/ask",
    element: (
      <>
        <AskQuestion />
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
  {
    path: "/free-listing",
    element: (
      <>
        <FreeListing />
      </>
    ),
  },
  {
    path: "/advertise",
    element: (
      <>
        <Advertise />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Contact />
      </>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <>
        <Policy />
      </>
    ),
  },
]);

export default router;
