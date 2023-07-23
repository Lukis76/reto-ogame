import { env } from "@/env.mjs";

interface Credentials {
  clientId: string;
  clientSecret: string;
}

export function getGoogleCredentials(): Credentials {
  const clientId = env.GOOGLE_CLIENT_ID;
  const clientSecret = env.GOOGLE_CLIENT_SECRET;
  const nodeEnv = env.NODE_ENV;

  if (nodeEnv === "development") {
    if (!clientId || clientId.length === 0) {
      throw new Error("Missing GOOGLE_CLIENT_ID");
    }

    if (!clientSecret || clientSecret.length === 0) {
      throw new Error("Missing GOOGLE_CLIENT_SECRET");
    }
  }

  return { clientId, clientSecret };
}
