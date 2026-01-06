import type { RouteObject } from "react-router";
import AuthLayout from "../components/layouts/AuthLayout";
import MainLayout from "../components/layouts/MainLayout";
import ForgetpassPage from "../pages/auth/forgetpass/ForgetpassPage";
import LoginGooglePage from "../pages/auth/login/LoginGooglePage";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import VerifyUser from "../pages/auth/VerifyUser";
import BookingPage from "../pages/booking/BookingPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import HomePage from "../pages/home/HomePage";
import News from "../pages/News/News";
import DetailTicket from "../pages/profile/DetailTicket";
import ListMyTicket from "../pages/profile/ListMyTicket";
import ProfileIndex from "../pages/profile/ProfileIndex";
import ProfilePage from "../pages/profile/ProfilePage";
import PaymentSuccess from "../pages/checkout/Checkoutsuccess";
import PaymentFailed from "../pages/checkout/CheckoutFailed";
import MyTicketPage from "../pages/my-ticket/MyTicketPage";

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
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-failed",
        element: <PaymentFailed />,
      },
      {
        path: "my-tickets",
        element: <MyTicketPage />,
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
          {
            path: "my-ticket",
            element: <ListMyTicket />,
          },
        ],
      },
      {
        path: "profile/my-ticket/:id",
        element: <DetailTicket />,
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
    path: "payment/success/:id",
    element: <PaymentSuccess />,
  },
];
