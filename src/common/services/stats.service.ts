import type { IResponse } from "../types/Response";
import type {
  IOverviewStats,
  IOverviewYearStats,
  IRevenueTopRoute,
  ITicketHourly,
  ITicketStats,
  ITopCar,
  ITopRoute,
} from "../types/stats";
import api from "../utils/api";

const prefixStats = "/stats";
const prefixOverview = "/overview";
const prefixTicket = "/ticket";

export const getOverviewStats = async (
  params?: any,
): Promise<IResponse<IOverviewStats>> => {
  const { data } = await api.get(`${prefixStats}${prefixOverview}`, {
    params,
  });
  return data;
};

export const getOverviewYearStats = async (
  params?: any,
): Promise<IResponse<IOverviewYearStats>> => {
  const { data } = await api.get(
    `${prefixStats}${prefixOverview}/month-of-year`,
    {
      params,
    },
  );
  return data;
};

export const getRevenueTopRoute = async (
  params?: any,
): Promise<IResponse<IRevenueTopRoute>> => {
  const { data } = await api.get(
    `${prefixStats}${prefixOverview}/revenue-route`,
    {
      params,
    },
  );
  return data;
};

export const getTicketStats = async (
  params?: any,
): Promise<IResponse<ITicketStats>> => {
  const { data } = await api.get(`${prefixStats}${prefixTicket}`, {
    params,
  });
  return data;
};

export const getTicketHourly = async (
  params?: any,
): Promise<IResponse<ITicketHourly>> => {
  const { data } = await api.get(`${prefixStats}${prefixTicket}/trend`, {
    params,
  });
  return data;
};

export const getTicketToday = async (
  params?: any,
): Promise<IResponse<ITicketHourly>> => {
  const { data } = await api.get(`${prefixStats}${prefixTicket}/trend-today`, {
    params,
  });
  return data;
};

export const getTopCar = async (params?: any): Promise<IResponse<ITopCar>> => {
  const { data } = await api.get(`${prefixStats}${prefixTicket}/top-car`, {
    params,
  });
  return data;
};

export const getTopRoute = async (
  params?: any,
): Promise<IResponse<ITopRoute>> => {
  const { data } = await api.get(`${prefixStats}${prefixTicket}/top-route`, {
    params,
  });
  return data;
};
