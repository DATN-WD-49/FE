export interface IUser {
  expiredBanned?: string;
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
  status?: string;
  accountType?: string;
}
export type UserRole = "user" | "staff" | "admin";
