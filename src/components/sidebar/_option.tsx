import {
  BookOutlined,
  CalendarOutlined,
  CarOutlined,
  ClusterOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { JSX } from "react";
export type IChildrenItem = {
  label: string;
  route: string;
};

export type IMenuItem = {
  icon: JSX.Element;
  label: string;
  route?: string;
  children?: IChildrenItem[];
};

export const menuGroups: IMenuItem[] = [
  {
    icon: <LineChartOutlined />,
    label: "Thống kê",
    route: "/admin/overview",
  },
  {
    icon: <UserOutlined />,
    label: "Quản lý người dùng",
    route: "/admin/users",
  },
  {
    icon: <CarOutlined />,
    label: "Quản lý xe",
    children: [
      { label: "Tạo mới xe", route: "/admin/car/create" },
      { label: "Tất cả xe", route: "/admin/car" },
    ],
  },
  {
    icon: <ClusterOutlined />,
    label: "Quản lý tuyến đường",
    children: [
      { label: "Tạo mới tuyến đường", route: "/admin/route/create" },
      { label: "Tất cả tuyến đường", route: "/admin/route" },
    ],
  },
  {
    icon: <CalendarOutlined />,
    label: "Quản lý lịch chạy",
    route: "/admin/schedule",
  },
  {
    icon: <BookOutlined />,
    label: "Quản lý vé",
    children: [
      { label: "Xác minh vé", route: "/admin/ticket/scan" },
      { label: "Tất cả vé", route: "/admin/ticket" },
    ],
  },
];
