'use client'
import { useForm } from 'react-hook-form'
import ItemDataForm from './ItemDataForm'
import { setProfile } from '@/actions/supabase/user'


export default function DataForm() {
    const { register, handleSubmit } = useForm()


    const onSubmit = async (data) => {
        const response = await setProfile(data)
        console.log(response)
    }

    const items = [
        {
            label: "C.U.I.T. / C.U.I.L.",
            className: "input-cuit",
            name: "cuit",
            type: "text",
            placeholder: "20-12345678-9",
            required: true
        },
        {
            label: "Razón social",
            name: "name",
            type: "text",
            placeholder: "Empresa S.A.",
            required: true
        },
        {
            label: "Tipo de instalador",
            name: "type",
            type: "text",
            placeholder: "Paneles fotovoltaicos, etc.",
            required: true
        },
        {
            label: "Dirección",
            name: "address",
            type: "text",
            placeholder: "Calle 123",
            required: true
        },
        {
            label: "Localidad",
            name: "locality",
            type: "text",
            placeholder: "CABA"
        },
        {
            label: "Provincia",
            name: "province",
            type: "text",
            placeholder: "Buenos Aires",
            required: true
        }
    ]
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-4">
                {items.map((item, index) => (
                    <ItemDataForm key={index} {...item}>
                        <input
                            className="input input-bordered w-full shadow bg-white"
                            {...register(item.name, { required: item.required })}
                            type={item.type}
                            placeholder={item.placeholder}
                        />
                    </ItemDataForm>
                ))}
            </div>
            <div className="mt-4">
                <button className="btn btn-primary">Guardar</button>
            </div>
        </form>
    )
}