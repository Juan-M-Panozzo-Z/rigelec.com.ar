import PortalSection from "@/app/(portal)/components/PortalSection";
import DataForm from "./components/DataForm";
import { getProfile } from "@/actions/supabase/user";

export default async function EditProfile() {
    const profile = await getProfile()


    return (
        <section>
            <PortalSection title="Editar mi perfil">
                <DataForm  profile={profile} />
            </PortalSection>
        </section>
    )
}