import bcrypt from "bcrypt";
import { env } from "../../../../env.mjs";

export const generatedHash = async (password: string) => {
  const saltRounds = Number(env.HASH_SALT);
  return await bcrypt.hash(password, saltRounds);
};
