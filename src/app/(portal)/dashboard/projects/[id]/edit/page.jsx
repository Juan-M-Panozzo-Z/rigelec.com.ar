import { getProject } from "../../../../../../actions/supabase/installer_projects"
import PortalSection from "../../../../components/PortalSection"
import Form from "./components/Form"

export default async function Edit({ params }) {
    const { id } = params
    const { data: project } = await getProject(id)

    return (
        <PortalSection
            title="Editar proyecto"
            link={false}
        >
            <div className="mt-4">
                <Form project={project} />
            </div>

        </PortalSection>
    )
}