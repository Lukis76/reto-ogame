import bcrypt from "bcrypt";

export const passwordComparer = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
