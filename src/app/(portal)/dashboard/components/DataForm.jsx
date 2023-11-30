'use client'
import { useForm } from 'react-hook-form'
import ItemDataForm from './ItemDataForm'


export default function DataForm() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    const items = [
        {
            name: "C.U.I.T. / C.U.I.L.",
            type: "text",
            placeholder: "20-12345678-9",
            required: true
        },
        {
            name: "Razón social",
            type: "text",
            placeholder: "Empresa S.A.",
            required: true
        },
        {
            name: "Tipo de instalador",
            type: "text",
            placeholder: "Instalador",
            required: true
        }
    ]
    return (
        <div>
            <form action={""}>
                <div className="grid md:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <ItemDataForm
                            key={index}
                            name={item.name}
                            type={item.type}
                            placeholder={item.placeholder}
                            required={item.required} />
                    ))}
                </div>
                <div className="mt-4">
                    <button className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    )
}