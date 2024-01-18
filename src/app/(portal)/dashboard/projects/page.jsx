import { getSelfProjects, setProject } from "../../../../actions/supabase/installer_projects"
import { getProjectImages } from "../../../../actions/supabase/installer_projects_images"
import PortalSection from "../../components/PortalSection";
import { FaPlus } from "react-icons/fa";

export default async function Projects() {
    const { data: projects } = await getSelfProjects()
    const { data: projectImages } = await getProjectImages()
    console.log(projectImages)

    return (
        <PortalSection
            title="mis proyectos"
            link={true}
            linkHref="projects/create"
            linkSpan={
                <>
                    <FaPlus className="mr-2 inline-block" />
                    Nuevo proyecto
                </>
            }

        >

        </PortalSection>
    )
}