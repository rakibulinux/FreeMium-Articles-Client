import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import WelcomeDashboard from "../Pages/Dashboard/Admin/WelcomeDashboard/WelcomeDashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

import PaymentFail from "../Pages/Payment/PaymentFail/PaymentFail";
import PaymentForm from "../Pages/Payment/PaymentForm/PaymentForm";

import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Settings from "../Pages/Settings/Settings";
import WriteStories from "../Pages/WriteStories/WriteStories";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import ArticlesDetails from "./../Pages/articlesSection/articlesDetails/ArticlesDetails";
import List from "./../Pages/List/List";
import Stories from "../Pages/Stories/Stories";
import Stats from "./../Pages/Stats/Stats";
import OurStory from "../Pages/OurStory/OurStory";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess/PaymentSuccess";
// import MemberShipMain from "../Pages/MemberShipPage/MemberShipMain/MemberShipMain";
import MemberShipPage from './../Pages/CreatorPage/MemberShipPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home/:id",
        element: <Home />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
      {
        path: "/new-story",
        element: <PrivateRoute>{/* <NewStory /> */}</PrivateRoute>,
      },
      {
        path: "/write-stories",
        element: <WriteStories />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/payment",
        element: <PaymentForm></PaymentForm>,
      },
      {
        path: "/success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/fail",
        element: <PaymentFail />,
      },
      {
        path: "/our-story",
        element: <OurStory></OurStory>,
      },
      {
        path: "/view-story/:id",
        element: <ArticlesDetails />,
        loader: async ({ params }) =>
          await fetch(
            `${process.env.REACT_APP_API_URL}/view-story/${params.id}`
          ),
      },
      {
        path: "/list",
        element: (
          <PrivateRoute>
            <List></List>
          </PrivateRoute>
        ),
      },
      {
        path: "/stories",
        element: (
          <PrivateRoute>
            <Stories></Stories>
          </PrivateRoute>
        ),
      },
      {
        path: "/stats",
        element: (
          <PrivateRoute>
            <Stats />
          </PrivateRoute>
        ),
      },
      {
        path: "/membership",
        element: <MemberShipPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <WelcomeDashboard />,
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <WelcomeDashboard />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
