import Link from 'next/link'
import { getTypes } from '../../../../actions/supabase/installer_types'
import { getProfile } from '../../../../actions/supabase/user'
import PortalSection from '../../components/PortalSection'
import Form from './components/Form'

export default async function ProfilePage() {
    const { data: profile } = await getProfile()
    const types = await getTypes()

    return (
        <PortalSection
            className={"max-w-2xl mx-auto mb-4"}
            title={"Editar Perfil"}
        >
            <Form profile={profile} types={types} />
        </PortalSection>
    );
}