"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Export, Search } from "@/assets/icons";
import { roleOptions } from "@/types/user-roles";
import { Schema, z } from "zod";

interface FilterUserFormProps {
  FormSchema: Schema;
  form: z.infer<Schema>;
  onSubmit: (data: z.infer<Schema>) => void;
}

export function FilterUserForm({ FormSchema, form, onSubmit }: FilterUserFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 items-start md:items-end">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search by User</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Enter user name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search by Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ALL">
                    <span className="text-indigo-800">All Status</span>
                  </SelectItem>
                  <SelectItem value="0">Inactive</SelectItem>
                  <SelectItem value="1">Active</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search by Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a user role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {roleOptions?.length > 0 && (
                    <SelectItem value="ALL">
                      <span className="text-indigo-800">All Roles</span>
                    </SelectItem>
                  )}
                  {roleOptions.map((role, index) => (
                    <SelectItem key={index} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
        <Button type="button">
          <Export className="w-5 h-5 mr-2" />
          Export
        </Button>
      </form>
    </Form>
  );
}
