'use client'
import Link from "next/link";
import { setProject } from "../../../../../actions/supabase/installer_projects"
import PortalSection from "../../../components/PortalSection";
import { useFormState, useFormStatus } from "react-dom"

export default function CreateProject() {
    const [state, formAction] = useFormState(setProject, undefined)

    return (
        <PortalSection
            title="cargar nuevo proyecto"
            link={false}
        >
            <h3 className="font-bold text-lg">Cargar nuevo proyecto</h3>
            <div className="mt-4">
                <form action={formAction} className="space-y-2" encType="multipart/form-data">
                    <div className="form-control">
                        <label className="label" htmlFor="name">
                            <span className="label-text">Nombre del proyecto</span>
                        </label>
                        <input id="name" name="name" type="text" className="input input-bordered w-full" placeholder="Nombre del proyecto" />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor="description">
                            <span className="label-text">¡Cuentanos sobre el!</span>
                        </label>
                        <textarea id="description" name="description" type="text" className="textarea textarea-bordered w-full" placeholder="Descripción" />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor="date">
                            <span className="label-text">¿Cuando fue realizado?</span>
                        </label>
                        <input id="date" name="date" type="date" className="input input-bordered w-full" placeholder="Fecha de finalizacion" />
                    </div>

                    <div className="form-control">
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
                    </div>
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
            </div>

        </PortalSection>
    )
}

const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className="btn btn-sm btn-primary">
            {pending && <div className="loading loading-spinner"></div>}
            Cargar proyecto
        </button>
    )
}