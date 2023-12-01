import PortalSection from "../components/PortalSection";
import UserData from "./components/UserData";

export default async function Dashboard() {
    return (
        <section>
            <PortalSection title="mi perfil">
            <UserData />
            </PortalSection>
        </section>
    )
}