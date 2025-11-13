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

export interface IDisstrict extends Omit<IPoint,
  "description"> {
description?: string;
  }

  export interface IPointWithDistrict extends IPoint {
    district:IDisstrict;
  }

export interface IPointSelect extends Partial<IPoint> {
  value: string;
}
export interface IRoute {
  _id: string;
  name: string;
  description?: string;
  pickupPoint: IPointWithDistrict;
  dropPoint: IPointWithDistrict;
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
