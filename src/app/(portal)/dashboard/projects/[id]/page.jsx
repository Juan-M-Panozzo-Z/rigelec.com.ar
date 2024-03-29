import { getProject } from "../../../../../actions/supabase/installer_projects"
import PortalSection from "../../../components/PortalSection"
import { getProjectImages } from "../../../../../actions/supabase/installer_projects_images"
import Link from "next/link"
import { FaPencil } from "react-icons/fa6"

export default async function Project({ params }) {
    const { id } = params
    const { data: project } = await getProject(id)
    const { data: images } = await getProjectImages(id)

    return (
        <PortalSection
        className={"mb-4"}
            title={project.name}
        >
            <div className="grid md:grid-cols-3 gap-4">
                {
                    images.map((image, i) => (
                        <div key={i}>
                            <img className="rounded-box shadow-md" src={image} />
                        </div>
                    ))
                }
                <div className="md:col-span-2 flex flex-col justify-between gap-4">
                    <div className="space-y-4">
                        <h2 className="uppercase text-xl md:text-3xl">
                            {project.name}
                        </h2>
                        <span className="text-neutral-500">
                            {project.date}
                        </span>
                        <p>
                            {project.description}
                        </p>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Link
                            className="btn btn-sm btn-secondary"
                            href={`${project.id}/edit`}
                        >
                            <FaPencil className="mr-2 inline-block" />
                            Editar
                        </Link>
                        <Link
                            className="btn btn-sm btn-primary"
                            href={`/dashboard/projects`}
                        >
                            Volver
                        </Link>
                    </div>
                </div>
            </div>

        </PortalSection>
    )
}