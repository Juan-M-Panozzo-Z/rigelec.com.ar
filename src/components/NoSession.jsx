"use client";

import { useRouter } from "next/navigation";

const NoSession = ({ children, session }) => {
    const router = useRouter();
    if (session) {
        return children;
    }

    router.push("/");
    return null;
};

export default NoSession;
