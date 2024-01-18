import { setProject } from "../../../../../actions/supabase/installer_projects"
import PortalSection from "../../../components/PortalSection";

export default function CreateProject() {
    return (
        <PortalSection
            title="cargar nuevo proyecto"
            link={false}
        >
            <h3 className="font-bold text-lg">Cargar nuevo proyecto</h3>
            <div className="mt-4">
                <form action={setProject} className="space-y-2">
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
                        <input id="image" name="image" type="file" className="file-input file-input-bordered w-full" placeholder="Imagen" />
                    </div>
                    <div className="flex justify-end">
                        <button className="btn btn-primary">Cargar proyecto</button>
                    </div>
                </form>
            </div>

        </PortalSection>
    )
}