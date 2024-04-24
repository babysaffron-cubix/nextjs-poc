"use client";

import { useEffect, useState } from "react";
import CounterCards from "@/components/counter-cards";
import { CreateUserForm } from "@/app/user-management/components/create-user-form";
import { FilterUserForm } from "@/app/user-management/components/filter-user-form";
import { UserTable } from "@/app/user-management/components/user-table";
import { getUsersCountByRole, getAllUsers } from "@/service/user.service";
import { UserByRole, User } from "@/types/types";
import { columns } from "@/app/user-management/components/columns";
import { PaginationState } from "@tanstack/react-table";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UserManagementPage() {
  const roleCodes = {
    SUPERADMIN: "2009",
    TEAMLEAD: "3024",
    OM: "3023",
    AGENT: "2023",
    CUSTOMERSERVICE: "4023",
    ALL: "",
  };

  const usersPerPage = 5;
  const [userByRole, setUserByRole] = useState<UserByRole[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [pagination, setPagination] = useState<PaginationState>({ pageSize: usersPerPage, pageIndex: 0 });

  const FilterFormSchema = z.object({
    userName: z.string().optional(),
    status: z.string().optional(),
    role: z.string().optional(),
  });

  const filterForm = useForm<z.infer<typeof FilterFormSchema>>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      userName: "",
      status: "",
      role: "",
    },
  });

  const getUsersByRole = async () => {
    try {
      const response = await getUsersCountByRole();
      if (response.status === "success" && response.data != null) {
        setUserByRole(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getUsers = async (startIndex: number, userCount: number) => {
    const filterFormValues = filterForm.getValues();
    const userName = filterFormValues.userName || "";
    const status = (filterFormValues.status === "ALL" ? "" : filterFormValues.status) || "";
    const role = filterFormValues.role || "";
    const roleCode = roleCodes[role as keyof typeof roleCodes] || "";

    try {
      const response = await getAllUsers(userName, roleCode, status, 3051, userCount, startIndex, 0, "asc");
      if (response.status === "success" && response.data != null) {
        setUsers(response.data.users);
        setTotalUsers(response.data.totalRecords);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUsersByRole();
  }, []);

  useEffect(() => {
    getUsers(pagination.pageIndex * pagination.pageSize, pagination.pageSize);
  }, [pagination]);

  const onFilterFormSubmit = async () => {
    await getUsers(0, usersPerPage);
  };

  return (
    <main className="p-6 flex flex-col gap-8">
      <div className="flex justify-between items-start flex-col gap-3 md:flex-row md:items-center">
        <h1 className="text-gray-600 text-2xl md:text-3xl font-bold">User Management</h1>
        <CreateUserForm />
      </div>
      <CounterCards items={userByRole} />
      <FilterUserForm FormSchema={FilterFormSchema} form={filterForm} onSubmit={onFilterFormSubmit} />
      <UserTable data={users} columns={columns} totalRecords={totalUsers} pageSize={usersPerPage} pagination={pagination} onPaginationChange={setPagination} />
    </main>
  );
}
