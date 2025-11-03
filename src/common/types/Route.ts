export interface ICity {
  _id: string;
  label: string;
  description?: string;
}

export interface IPoint {
  _id: string;
  label: string;
  desciption: string;
}

export interface IRoute {
  _id: string;
  name: string;
  description?: string;
  viaCities: ICity[];
  pickupPoint: IPoint;
  dropPoint: IPoint;
  routePrice: number;
  distance: string;
  duration: number;
  status: boolean;
  createAt: string;
  updateAt: string;
}

export interface IProvince {
  _id: string;
  label: string;
}
