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

export interface ITicketStats {
  totalTickets: number;
  avgTicketsPerDay: number;
  peakHour: {
    hour: null | string;
    totalTickets: number;
  };
  topRoute: string | null;
}

export interface ITicketHourlyRaw {
  hour: string;
  totalTickets: number;
}

export interface ITicketHourly {
  rawData: ITicketHourlyRaw[];
  peakHour: ITicketHourlyRaw | null;
  queryTime: {
    from: string;
    to: string;
  };
}

export interface ITopCar {
  totalTickets: 1;
  topCar: {
    _id: string;
    licensePlate: string;
    totalTickets: number;
    totalSchedules: number;
  }[];
}

export interface ITopRoute {
  totalTickets: 1;
  topRoute: {
    _id: string;
    pickupPoint: string;
    dropPoint: string;
    totalTickets: number;
    totalSchedules: number;
  }[];
}
