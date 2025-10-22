/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from "antd";
import type { AxiosError } from "axios";

type HandleAxiosErrorOptions = {
  field?: string;
  type?: "error" | "info" | "warning" | "success";
  fallback?: string;
  silent?: boolean;
};

export const useToast = () => {
  const { message } = App.useApp();

  const handleAxiosError = (
    error: unknown,
    options?: HandleAxiosErrorOptions,
  ): string => {
    const {
      field = "message",
      type = "error",
      fallback = "Đã có lỗi xảy ra!",
      silent = false,
    } = options || {};

    const err = error as AxiosError<any>;
    const msg =
      (err?.response?.data && (err.response.data[field] as string)) ||
      err?.message ||
      fallback;

    if (!silent) message[type](msg);

    return msg;
  };

  return { handleAxiosError, message };
};
