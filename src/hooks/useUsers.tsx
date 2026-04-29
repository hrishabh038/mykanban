import type { UserType } from "../utils/types/majour.types";
import { metadata } from "../utils/metadata/metadata";

export const useGetUser = (userId: string): UserType | undefined => {
  return metadata.users.find((user) => user.id === userId);
};

export const useGetAllUsers = (): UserType[] => {
  return metadata.users;
};
