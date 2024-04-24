export const FUNCTION_NAME = {
  getUsersCountByRole: "GetUserManagementHeader",
};

export type ResType<T> = {
  data: T | null;
  status: "success" | "fail";
  errorMessage?: string;
};

export const serviceWrapper = async <T>(
  fn: () => Promise<T>
): Promise<ResType<T>> => {
  try {
    const data = await fn();
    return { data, status: "success" };
  } catch (error) {
    return {
      data: null,
      status: "fail",
      errorMessage:
        error instanceof Error ? error.message : "An error occurred",
    };
  }
};
