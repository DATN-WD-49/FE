import type { RouteObject } from "react-router";
import MainLayout from "../components/layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/login/LoginPage";
import AuthLayout from "../components/layouts/AuthLayout";
import ForgetpassPage from "../pages/auth/forgetpass/ForgetpassPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import LoginGooglePage from "../pages/auth/login/LoginGooglePage";
import BookingPage from "../pages/booking/BookingPage";
import News from "../pages/News/News";
import VerifyUser from "../pages/auth/VerifyUser";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import Profile from "../pages/profile/Profile";
import ProfilePage from "../pages/profile/ProfilePage";
import ProfileIndex from "../pages/profile/ProfileIndex";

export const PublicRoute: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "bookings",
        element: <BookingPage />,
      },
      {
        path: "checkout/:id",
        element: <CheckoutPage />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          {
            index: true,
            element: <ProfileIndex />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgetpass",
        element: <ForgetpassPage />,
      },
    ],
  },
  {
    path: "/login-google/:tk",
    element: <LoginGooglePage />,
  },

  {
    path: "verify",
    element: <VerifyUser />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
