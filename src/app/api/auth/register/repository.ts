import { prisma } from "@/server/db";
import { Prisma } from "@prisma/client";

export const findUserOne = async (args: Prisma.UserFindUniqueArgs) => {
  console.log("🚀 ~ file: repository.ts:5 ~ findUserOne ~ args:", args)
  
  return await prisma.user.findUnique(args);
};

export const createUser = async (args: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: args,
  });
};
