import PortalSection from "@/app/(portal)/components/PortalSection";
import DataForm from "./components/DataForm";
import { getUser } from "@/actions/supabase/user";

export default async function EditProfile() {
    const {user_metadata: metadata} = await getUser()
    console.log(metadata)

    return (
        <section>
            <PortalSection title="Editar mi perfil">
                <DataForm metadata={metadata} />
            </PortalSection>
        </section>
    )
}