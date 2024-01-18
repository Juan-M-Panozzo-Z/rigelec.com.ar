import Link from "next/link";
import { getSelfProjects, setProject } from "../../../../actions/supabase/installer_projects"
import { getProjectImages } from "../../../../actions/supabase/installer_projects_images"
import PortalSection from "../../components/PortalSection";
import { FaPlus } from "react-icons/fa";

export default async function Projects() {
    const { data: projects } = await getSelfProjects()
    const { data: projectImages } = await getProjectImages()
    console.log(projects)

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
            {
                projects.length > 0
                    ? (
                        <div className="grid md:grid-cols-3 gap-4">
                            {projects.map(project => (
                                <div key={project.id} className="p-4 flex flex-col gap-2 border rounded-box shadow">
                                    <h3 className="text-xl uppercase text-neutral-700 tracking-tight">{project.name}</h3>
                                    <h4 className="text text-neutral-600">{project.date}</h4>
                                    <div className="flex justify-end">
                                        <Link
                                            className="btn btn-sm btn-primary"
                                            href={`/dashboard/projects/${project.id}`}
                                        >
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    : (null)
            }
        </PortalSection>
    )
}