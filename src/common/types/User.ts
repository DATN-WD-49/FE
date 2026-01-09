export interface IUser {
  _id: string;
  userName: string;
  avatar: string;
  email: string;
  phone: string;
  isVerifed: boolean;
  role: string;
  isLocked: boolean;
  createdAt: string;
  isVerified: boolean;
  provider: string[];
  updatedAt: string;
}
export type UserRole = "user" | "staff" | "admin";
