import PortalSection from "../../components/PortalSection";
import DataForm from "./components/DataForm";

export default async function EditProfile() {
    return (
        <section>
            <PortalSection title="Editar mi perfil">
                <DataForm />
            </PortalSection>
        </section>
    )
}