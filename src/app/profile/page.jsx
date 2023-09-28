import { getServerSession } from "next-auth";

const ProfilePage = async () => {
    const session = await getServerSession();
    return (
        <section className="pt-32 grid place-content-center">
            <h1>{`Bienvenido ${session.user.name}!`}</h1>
        </section>
    );
};

export default ProfilePage;
