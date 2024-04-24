"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/types";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "userName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="User Name" />,
    cell: ({ row }) => (
      <div className="ml-2">
        <span className="ml-2">{row.original.userName}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => <div className="ml-2">{row.original.email}</div>,
  },
  {
    accessorKey: "mobile",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mobile" />,
    cell: ({ row }) => <div className="ml-2">{row.original.mobile}</div>,
  },
  {
    accessorKey: "role",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
    cell: ({ row }) => <Badge variant="outline">{row.original.role}</Badge>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => <div className="ml-2">{row.original.status}</div>,
  },
];
