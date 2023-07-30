import { getGoogleCredentials } from "@/server/auth.credentials";
import { prisma } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { passwordComparer } from "../app/api/auth/utils/passwordConparer";
import { env } from "../env.mjs";
import { InputAuth } from "../z/z.login";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
            id: string;
            // ...other properties
            // role: UserRole;
        };
    }

    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // DiscordProvider({
        //   clientId: env.DISCORD_CLIENT_ID,
        //   clientSecret: env.DISCORD_CLIENT_SECRET,
        // }),
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as InputAuth;

                if (!email && !password) {
                    throw new Error("Email and password are required");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });

                if (!user) throw new Error("Invalid credentials");

                const passwordMatch = await passwordComparer(password, user.password);

                if (!passwordMatch) throw new Error("Invalid credentials");

                return user;
            },
        }),
    ],
    pages: {
        signIn: "authentication",
    },

    secret: env.NEXTAUTH_SECRET,
    debug: env.NODE_ENV === "development",

    // Configure one or more authentication providers.
    // https://next-auth.js.org/configuration/providers
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    // Enable debug messages in the console if you are having problems
    callbacks: {
        // 2 4 7
        jwt: (params) => {
            console.log({ jwt_params: params });
            return params.token;
        },
        // 5 8
        session: (params) => {
            console.log({ session_params: params });
            return params.session;
        },
        /**
         * en redirect en dode queremos que el usuari seea redireccionado cuando se alla iniciado secion  o
         */
        // 3 6
        redirect(params) {
            console.log({ redirect_paramas: params });
            return params.url;
        },
        // 1
        signIn(params) {
            console.log({ signin_paramas: params });
            return true;
        },
    },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
// export const getServerAuthSession = (ctx: {
//   req: GetServerSidePropsContext["req"];
//   res: GetServerSidePropsContext["res"];
// }) => {
//   return getServerSession(ctx.req, ctx.res, authOptions);
// };

// refactoring nextjs 13.4.*

export const getServerAuthSession = () => getServerSession(authOptions);
