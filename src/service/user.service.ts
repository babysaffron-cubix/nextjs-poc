import { json } from "stream/consumers";
import { postRequest, getRequest } from "./asiox";
import { FUNCTION_NAME, ResType, serviceWrapper } from "./consts";
import { Users, Verified, HeadsetUser, LaughEmoji } from "@/assets/icons";
import { User, UserByRole, UserStatus } from "@/types/types";
import { ROLES } from "@/types/user-roles";

const LOGIN_URL = "users/loginUser";

const login = async (emailId: string, password: string) => {
  const response = await postRequest(LOGIN_URL, {
    emailid: emailId,
    password,
  });
  return response;
};

const getUsersCountByRole = () =>
  serviceWrapper<UserByRole[]>(async () => {
    const usersByRole: UserByRole[] = [];
    const response = await postRequest("GenericWebAPI", {
      FunctionName: FUNCTION_NAME.getUsersCountByRole,
      Params: "",
      Params1: "",
    });
    if (response && Array.isArray(response.data) && response.data.length > 0) {
      const rolesCount = response.data[0];
      Object.keys(rolesCount).forEach((role) => {
        usersByRole.push({
          count: rolesCount[role] ?? 0,
          symbol: "+",
          icon: Verified,
          id: 0,
          title: role as unknown as ROLES,
        });
      });
    }
    return usersByRole;
  });

type GetAllUsersReturnType = { users: User[]; totalRecords: number };

const getAllUsers: (
  searchuser: string,
  searchrole: string,
  searchstatus: string,
  userId: number,
  displayLength: number,
  displayStart: number,
  sortCol: number,
  sortDir: "desc" | "asc"
) => Promise<ResType<GetAllUsersReturnType>> = (
  searchuser,
  searchrole,
  searchstatus,
  userId,
  displayLength,
  displayStart,
  sortCol,
  sortDir
) =>
  serviceWrapper(async () => {
    let users: User[] = [];
    let totalRecords = 0;
    const response = {
      Table: [
        {
          RowNum: 1,
          TotalCount: 18,
          TotalRecords: 18,
          Id: 3052,
          UserName: "User 1",
          Email: "user1@gmail.com",
          Mobile: "************",
          Role: "OM",
          RoleId: 3023,
          Status: "Active",
          StatusInbit: 1,
        },
        {
          RowNum: 2,
          TotalCount: 18,
          TotalRecords: 18,
          Id: 3053,
          UserName: "User 2",
          Email: "user2@gmail.com",
          Mobile: "*******",
          Role: "Team Lead",
          RoleId: 3024,
          Status: "Active",
          StatusInbit: 1,
        },
        {
          RowNum: 3,
          TotalCount: 18,
          TotalRecords: 18,
          Id: 3054,
          UserName: "User 3",
          Email: "user3@gmail.com",
          Mobile: "*********",
          Role: "Agent",
          RoleId: 2023,
          Status: "Active",
          StatusInbit: 1,
        },
      ],
      Table1: [
        {
          TotalRecords: 18,
        },
      ],
    };
    let resUsers: any = [];
    if (
      response &&
      response?.Table &&
      Array.isArray(response.Table) &&
      response.Table.length > 0
    ) {
      resUsers = response.Table;
    }
    if (resUsers.length > 0) {
      users = resUsers.map((user: any) => ({
        email: user.Email,
        id: user.Id,
        mobile: user.Mobile,
        role: user.Role,
        roleId: user.RoleId,
        rowNum: user.RowNum,
        status: user.Status,
        statusInbit: user.StatusInbit,
        userName: user.UserName,
      }));
      totalRecords = resUsers[0].TotalCount;
    }
    return {
      users,
      totalRecords,
    };
  });

const updateUser: (
  status: UserStatus,
  roleId: number,
  userId: number
) => string = () => {
  return "";
};

export { login, getUsersCountByRole, getAllUsers, updateUser };
