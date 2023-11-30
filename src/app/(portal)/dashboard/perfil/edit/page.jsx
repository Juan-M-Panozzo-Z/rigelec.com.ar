'use client';
import { useForm } from "react-hook-form";
import Section from "../../components/Section";


export default function EditPerfil() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Section title="Editar Perfil">
            <div className="p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
                    <div className="input-group w-full">
                        <label className="label" htmlFor="cuit">CUIT</label>
                        <input className="input input-bordered w-full" type="cuit" {...register("cuit")} />
                    </div>
                    <div className="input-group w-full">
                        <label className="label" htmlFor="type">Tipo de instalador</label>
                        <input className="input input-bordered w-full" type="type" {...register("type")} />
                    </div>
                    <div className="input-group w-full">
                        <label className="label" htmlFor="razonSocial">Razón Social</label>
                        <input className="input input-bordered w-full" type="text" {...register("razonSocial")} />
                    </div>
                    <div className="flex gap-2 justify-end">
                        <button className="btn btn-primary" type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </Section>
    )
}