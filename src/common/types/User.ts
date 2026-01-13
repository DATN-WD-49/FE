export type UserRole = "user" | "staff" | "admin";

export interface IUser {
  _id: string;
  userName: string;
  email: string;
  phone?: string;
  avatar?: string;
  password?: string;
  role: UserRole;
  provider?: string[];
  googleId?: string;
  isVerified: boolean;
  isLocked: boolean;
  expiredBanned?: string;
  verifyToken?: string;
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  accountType?: string;
}
