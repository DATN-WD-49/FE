import type { IParams } from "../types";
import type { IResponse } from "../types/Response";
import type { IUser } from "../types/User";
import type { UserRole } from "../types/User";
import api from "../utils/api";

const prefix = "/user";

export const getProfile = async (): Promise<IResponse<IUser>> => {
  const { data } = await api.get("/user/private");
  return data;
};

export const getAllUser = async (
  params: IParams,
): Promise<IResponse<IUser[]>> => {
  const { data } = await api.get(`/user`, { params });
  return data;
};

export const createUser = async (payload: any): Promise<IResponse<IUser>> => {
  const { data } = await api.post(prefix, payload);
  return data;
};

export const updateUser = async (
  userId: string,
  payload: Partial<IUser>,
): Promise<IResponse<IUser>> => {
  const { data } = await api.patch(`/user/update/${userId}`, payload);
  return data;
};
export const getAllUsers = async (params?: any) => {
  const { data } = await api.get(`/user`, { params });
  return data;
};
export const updateUserRole = async (userId: string, role: UserRole) => {
  const { data } = await api.patch(`/user/${userId}/role`, { role });
  return data;
};
export const toggleLockUser = async (userId: string, isLocked: boolean) => {
  const { data } = await api.patch(`${prefix}/${userId}/lock`, { isLocked });
  return data;
};
