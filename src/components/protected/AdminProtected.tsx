import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuthSelector } from "../../common/store";

const AdminProtected = ({ children }: { children: ReactNode }) => {
  const userRole = useAuthSelector((state) => state.user?.role);
  if (!userRole) return <Navigate to={"/"} />;
  if (userRole !== "admin") return <Navigate to={"/"} />;
  return children;
};

export default AdminProtected;
