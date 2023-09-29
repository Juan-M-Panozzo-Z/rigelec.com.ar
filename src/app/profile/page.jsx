import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import UserForm from "./components/UserForm";

const ProfilePage = async () => {
    const session = await getServerSession();
    return (
        session && (
            <section className="mt-24 w-4/5 mx-auto border rounded-box">
                <UserForm user={session.user} />
            </section>
        )
    );
};

const getUserData = async (session) => {
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
    });
    return user;
};

export default ProfilePage;
