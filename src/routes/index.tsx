import { createBrowserRouter, RouterProvider } from "react-router";
import { PublicRoute } from "./PublicRoute";

const route = [...PublicRoute];

const routes = createBrowserRouter(route);

const AppRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default AppRoutes;
