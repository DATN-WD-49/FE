import type { RouteObject } from "react-router";
import AdminLayout from "../components/layouts/AdminLayout";
import ListCar from "../pages/admin/car/ListCar";
import UpdateCar from "../pages/admin/car/update/UpdateCar";
import DetailCar from "../pages/admin/car/detail/DetailCar";
import CreateCar from "../pages/admin/car/create/CreateCar";
import ListRoute from "../pages/admin/route/ListRoute";
import UpdateSeatCar from "../pages/admin/car/update/seatCar/UpdateSeatCar";
import UpdateRoute from "../pages/admin/route/update/UpdateRoute";
import CreateRoute from "../pages/admin/route/CreateRoute";
import ListSchedule from "../pages/admin/schedule/components/ListSchedule.tsx";
import DetailSchedule from "../pages/admin/schedule/details/DetailSchedule.tsx";
import AdminProtected from "../components/protected/AdminProtected.tsx";
import ListTicket from "../pages/admin/ticket/ListTicket.tsx";
import ScanTicket from "../pages/admin/ticket/scan/ScanTicket.tsx";
import DetailAdminTicket from "../pages/admin/ticket/detail/DetailAdminTicket.tsx";

export const AdminRoute: RouteObject[] = [
  {
    path: "admin",
    element: (
      <AdminProtected>
        <AdminLayout />
      </AdminProtected>
    ),
    children: [
      {
        index: true,
        element: <h1>helo</h1>,
      },
      {
        path: "car",
        children: [
          { index: true, element: <ListCar /> },
          {
            path: ":id",
            element: <DetailCar />,
          },
          {
            path: "create",
            element: <CreateCar />,
          },
          {
            path: "update/:id",
            element: <UpdateCar />,
          },
          {
            path: "update/seat/:id",
            element: <UpdateSeatCar />,
          },
        ],
      },
      {
        path: "route",
        children: [
          {
            index: true,
            element: <ListRoute />,
          },
          {
            path: "create",
            element: <CreateRoute />,
          },
          {
            path: "update/:id",
            element: <UpdateRoute />,
          },
        ],
      },
      {
        path: "schedule",
        children: [
          {
            index: true,
            element: <ListSchedule />,
          },
          {
            path: "show/:carId/:routeId",
            element: <DetailSchedule />,
          },
        ],
      },
      {
        path: "ticket",
        children: [
          {
            index: true,
            element: <ListTicket />,
          },
          {
            path: "scan",
            element: <ScanTicket />,
          },
        ],
      },
      {
        path: "detail/:id",
        element: <DetailAdminTicket />,
      },
    ],
  },
];
