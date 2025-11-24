import { type ModalFuncProps } from "antd";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from "antd";
import type { AxiosError } from "axios";

type HandleAxiosErrorOptions = {
  field?: string;
  type?: "error" | "info" | "warning" | "success";
  fallback?: string;
  silent?: boolean;
};
export type CustomModalOptions = ModalFuncProps & {
  type?: "confirm" | "error" | "info" | "warning";
  field?: string;
  fallback?: string;
};

export const useToast = () => {
  const { message, modal } = App.useApp();

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

  const handleOpenModalError = (
    error: unknown,
    content: React.ReactNode | string = null,
    options?: CustomModalOptions,
  ) => {
    const {
      type = "error",
      field = "message",
      fallback = "Đã có lỗi xảy ra!",
      ...otherOptions
    } = options || {};

    const err = error as any;
    const msg = err?.response?.data?.[field] || err?.message || fallback;

    const modalInstance = (modal as any)[type]({
      title: msg,
      content: content || "Có lỗi không xác định!",
      closable: true,
      maskClosable: true,
      ...otherOptions,
    });

    return {
      instance: modalInstance,
      closeModal: () => modalInstance.destroy?.(),
    };
  };

  return { handleAxiosError, message, handleOpenModalError };
};
