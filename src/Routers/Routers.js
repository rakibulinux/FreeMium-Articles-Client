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
import Settings from "../Pages/UserProfileMenu/Settings/Settings";
import WriteStories from "../Pages/WriteStories/WriteStories";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Stories from "../Pages/UserProfileMenu/Stories/Stories";
import Stats from "../Pages/UserProfileMenu/Stats/Stats";
import List from "../Pages/UserProfileMenu/Lists/List";
import OurStory from "../Pages/OurStory/OurStory";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess/PaymentSuccess";
import MemberShipPage from "./../Pages/CreatorPage/MemberShipPage";
import RefineRecommendations from "../Pages/UserProfileMenu/RefineRecommendations/RefineRecommendations";
import ApplyToThePartnerProgram from "../Pages/UserProfileMenu/ApplyToThePartnerProgram/ApplyToThePartnerProgram";

import SelectCategorySection from "./../Pages/SelectCategoryPage/SelectCategorySection/SelectCategorySection";
import ArticlesDetails from "../Pages/ArticlesSection/ArticlesDetails/ArticlesDetails";
import Search from "../Pages/Shared/Search/Search";
import GiftMembership from "../Pages/UserProfileMenu/GiftMembership/GiftMembership";
import DashbordCategory from "../Pages/Dashboard/DashbordCategory/DashbordCategory";
import DashbordStory from "../Pages/Dashboard/DashbordStory/DashbordStory";
import DashbordEditors from "../Pages/Dashboard/DashbordEditors/DashbordEditors";
import DasReCharts from "../Pages/Dashboard/DasReCharts/DasReCharts";
import DasReportedStory from "../Pages/Dashboard/DasReportedStory/DasReportedStory";
import DasAddCategory from "../Pages/Dashboard/DasAddCategory/DasAddCategory";

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
            <Settings></Settings>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <PaymentForm></PaymentForm>
          </PrivateRoute>
        ),
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
        path: "/search",
        element: <Search></Search>,
      },

      {
        path: "/view-story/:id",
        element: <ArticlesDetails></ArticlesDetails>,
        // loader: async ({ params }) =>
        //   await fetch(
        //     `${process.env.REACT_APP_API_URL}/view-story/${params.id}`
        //   ),
      },
      // {
      //   path: "/view-story/:id",
      //   element: <ArticlesDetails />,
      // },
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
        path: "/category/:categoryName",
        element: <SelectCategorySection />,
        loader: async ({ params }) =>
          await fetch(
            `${process.env.REACT_APP_API_URL}/category/${params.categoryName}`
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
        path: "/refineRecommendations",
        element: (
          <PrivateRoute>
            <RefineRecommendations></RefineRecommendations>
          </PrivateRoute>
        ),
      },
      {
        path: "/applyToThePartnerProgram",
        element: (
          <PrivateRoute>
            <ApplyToThePartnerProgram></ApplyToThePartnerProgram>
          </PrivateRoute>
        ),
      },
      {
        path: "/giftMembership",
        element: (
          <PrivateRoute>
            <GiftMembership></GiftMembership>
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
      {
        path: "/dashboard/category",
        element: <DashbordCategory></DashbordCategory>,
      },
      {
        path: "/dashboard/storys",
        element: <DashbordStory></DashbordStory>,
      },
      {
        path: "/dashboard/editors",
        element: <DashbordEditors></DashbordEditors>,
      },
      {
        path: "/dashboard/charts",
        element: <DasReCharts></DasReCharts>,
      },
      {
        path: "/dashboard/reportedStory",
        element: <DasReportedStory></DasReportedStory>,
      },
      {
        path: "/dashboard/addCategory",
        element: <DasAddCategory></DasAddCategory>,
      },
    ],
  },
]);

export default router;
