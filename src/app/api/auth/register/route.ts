import { NextResponse, type NextRequest } from "next/server";
import { generatedHash } from "../utils/passwordHash";
import { createUser, findUserOne } from "./repository";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  console.log("🚀 ~ file: route.ts:7 ~ POST ~ { email, password }:", { email, password })

  if (!email || !password) {
    return new NextResponse("Email and password are required", { status: 400 });
  }

  const UserFound = await findUserOne({
    where: {
      email,
    },
  });
  console.log("🚀 ~ file: route.ts:18 ~ POST ~ UserFound:", UserFound)

  if (UserFound) {
    return new NextResponse("this user already has an account", { status: 404 });
  }

  const hashedPassword = await generatedHash(password);

  const newUser = await createUser({ email, password: hashedPassword });
  console.log("🚀 ~ file: route.ts:27 ~ POST ~ newUser:", newUser)

  if (!newUser) {
    return new NextResponse("could not create user", { status: 400 });
  }

  return NextResponse.json(newUser);
}
