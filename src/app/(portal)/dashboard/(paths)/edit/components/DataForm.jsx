'use client'
import { useForm } from 'react-hook-form'
import ItemDataForm from './ItemDataForm'
import { getProfile, setProfile } from '@/actions/supabase/user'
import { getTypes } from '@/actions/supabase/installer_types'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function DataForm({ profile }) {
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            cuit: profile?.cuit,
            name: profile?.name,
            typeId: profile?.typeId,
            address: profile?.address,
            locality: profile?.locality,
            province: profile?.province
        }
    })

    useEffect(() => {
        const fetchTypes = async () => {
            const res = await getTypes()
            if (res.error) {
                return alert(res.error.message)
            } else {
                setTypes(res)
            }
        }
        fetchTypes()
    }, [])

    const onSubmit = async (form) => {
        setLoading(true)
        const { err } = await setProfile(form)
        if (err) {
            setLoading(false)
            return alert(err)
        } else {
            router.push('/dashboard')
        }
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
                <ItemDataForm label="Tipo de instalador">
                    <select
                        defaultValue={profile?.typeId}
                        className='select select-bordered w-full bg-white' {...register('typeId', { required: true })}>
                        <option disabled selected value="">Seleccionar tipo de instalador</option>
                        {types.map((type, index) => (
                            <option key={index} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </ItemDataForm>
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
                <button
                    disabled={loading}
                    className="btn btn-primary rounded-full">
                    {loading && <span className='loading loading-spinner me-2'></span>}
                    Guardar cambios
                </button>
            </div>
        </form>
    )
}