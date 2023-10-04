import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import UserForm from "./components/UserForm";

const ProfilePage = async () => {
    const session = await getServerSession();
    const user = await getUserData(session);
    const installers = await getInstallers();
    return (
        session && (
            <section className="md:w-4/5">
                <UserForm user={user} installers={installers} />
            </section>
        )
    );
};

const getUserData = async (session) => {
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        }, include: {
            installer: true
        }
    });
    return user;
};

const getInstallers = async () => {
    const installers = await prisma.installer.findMany();
    return installers;
}

export default ProfilePage;
