"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
    if (SessionProvider === undefined) {
        console.log("SessionProvider is undefined");
        return null;
    }

    return <SessionProvider>{children}</SessionProvider>;
};
