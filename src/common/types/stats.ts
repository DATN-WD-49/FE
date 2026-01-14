export interface IOverviewStats {
  tickets: {
    totalCurrent: number;
    totalPrevious: number;
    growthPercents: number;
  };
  revenue: {
    totalCurrent: number;
    totalPrevious: number;
    growthPercents: number;
  };
  newUsers: {
    totalCurrent: number;
    totalPrevious: number;
    growthPercents: number;
  };
}
export interface IRevenueTopRoute {
  queryTime: {
    from: string;
    to: string;
  };
  result: {
    pickupPoint: string;
    dropPoint: string;
    totalTickets: number;
    revenue: number;
    routeId: string;
  }[];
}

export interface IOverviewMonthStats {
  month: string;
  revenue: number;
  tickets: number;
}

export interface IOverviewYearStats {
  year: string;
  result: IOverviewMonthStats[];
}
