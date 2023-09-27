import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from "bcrypt";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    return null;
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });
                if (!user) {
                    return null;
                }
                const passwordMatch = await bcrypt.compare(
                    credentials.password,
                    user.password
                );
                if (!passwordMatch) {
                    return null;
                }
                return {
                    email: user.email,
                    id: user.id,
                };
            },
        }),
    ],
};
