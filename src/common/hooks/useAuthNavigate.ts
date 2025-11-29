import { useNavigate } from "react-router";
import { useToast } from "./useToast";
import { useAuthSelector } from "../store";

export const useAuthNavigate = () => {
  const nav = useNavigate();
  const { message } = useToast();
  const isLogged = useAuthSelector((state) => state.isLogged);
  const navigateAuth = () => {
    message.info("Bạn cần đăng nhập trước!");
    nav("/auth/login");
    return;
  };
  return isLogged ? nav : navigateAuth;
};
