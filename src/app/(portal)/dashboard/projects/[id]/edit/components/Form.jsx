'use client'
import { useFormState, useFormStatus } from "react-dom"
import { updateProject } from "../../../../../../../actions/supabase/installer_projects"
import Link from "next/link"

export default function Form({ project }) {
    const [state, formAction] = useFormState(updateProject, project)

    return (
        <>
            <form action={formAction} className="space-y-2" encType="multipart/form-data">
                <input type="hidden" name="id" value={project?.id} />
                <div className="form-control">
                    <label className="label" htmlFor="name">
                        <span className="label-text">Nombre del proyecto</span>
                    </label>
                    <input defaultValue={project?.name} id="name" name="name" type="text" className="input input-bordered w-full" placeholder="Nombre del proyecto" />
                </div>

                <div className="form-control">
                    <label className="label" htmlFor="description">
                        <span className="label-text">¡Cuentanos sobre el!</span>
                    </label>
                    <textarea defaultValue={project?.description} id="description" name="description" type="text" className="textarea textarea-bordered w-full" placeholder="Descripción" />
                </div>

                <div className="form-control">
                    <label className="label" htmlFor="date">
                        <span className="label-text">¿Cuando fue realizado?</span>
                    </label>
                    <input defaultValue={project?.date} id="date" name="date" type="date" className="input input-bordered w-full" placeholder="Fecha de finalizacion" />
                </div>

                {/* <div className="form-control">
                    <label className="label" htmlFor="image">
                        <span className="label-text">Elije una imagen</span>
                    </label>
                    <input
                        accept="image/png, image/jpeg"
                        id="image"
                        name="image"
                        type="file"
                        className="file-input file-input-bordered w-full"
                        placeholder="Imagen"
                    />
                </div> */}
                <div className="flex justify-end gap-4">
                    <Submit />
                    <Link
                        className="btn btn-sm btn-secondary"
                        href="/dashboard/projects"
                    >
                        Volver
                    </Link>
                </div>
            </form>
            {state?.error && <div className="alert alert-error mt-4 text-white">{state.error}</div>}
        </>
    )
}

const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            className="btn btn-sm btn-primary"
            disabled={pending}
        >
            {pending && <span className="loading loading-spinner"></span>}
            Editar
        </button>
    )
}