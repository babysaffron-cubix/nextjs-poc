import { FC } from "react";
import { ROLES } from "./user-roles";

export enum UserStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}

export type UserByRole = {
  id: number;
  title: ROLES;
  count: number;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  symbol: string;
};

export type User = {
  role: ROLES;
  status: keyof UserStatus;
  userName: string;
  email: string;
  statusInbit: UserStatus;
  id: number;
  rowNum: number;
  mobile: string;
  roleId: number;
};
