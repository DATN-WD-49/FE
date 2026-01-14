import type { IResponse } from "../types/Response";
import type {
  IOverviewStats,
  IOverviewYearStats,
  IRevenueTopRoute,
} from "../types/stats";
import api from "../utils/api";

const prefixStats = "/stats";
const prefixOverview = "/overview";

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
