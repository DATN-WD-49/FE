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
export interface IDistrict extends Omit<IPoint, "description"> {
  description: string[];
}

export interface IPointWithDistrict extends IPoint {
  district: IDistrict[];
}

export interface IDisstrict extends Omit<IPoint, "description"> {
  description?: string;
}

export interface IPointSelect extends Partial<IPoint> {
  value: string;
}
export interface IRoute {
  _id: string;
  name: string;
  pickupPoint: IPointWithDistrict;
  dropPoint: IPointWithDistrict;
  description?: string;
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
