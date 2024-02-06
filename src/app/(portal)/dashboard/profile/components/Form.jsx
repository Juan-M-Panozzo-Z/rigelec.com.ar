'use client'
import { useFormStatus, useFormState } from 'react-dom'
import { setProfile } from '../../../../../actions/supabase/user'
import { Box, Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'

export default function Form({ profile, types }) {
    const [state, formAction] = useFormState(setProfile, undefined)

    return (
        <form action={formAction} className='space-y-4' encType='multipart/form-data'>
            <Box>
                <label htmlFor="avatar" className="label">Avatar</label>
                <input
                    id='avatar'
                    name='avatar'
                    type='file'
                    className='file-input file-input-bordered w-full'
                    accept="image/png, image/jpeg"
                    max-size="4194304"
                />
            </Box>
            <Box>
                <label htmlFor="name" className="label">Nombre de fantasia</label>
                <input defaultValue={profile?.name} id='name' name="name" type="name" className="input input-primary w-full" required />
            </Box>
            <Box>
                <label htmlFor="typeId" className="label">Tipo de instalador</label>
                <select id='typeId' name="typeId" className="input input-primary w-full" required>
                    {types.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>
            </Box>
            <Box>
                <label htmlFor="cuit" className="label">CUIT</label>
                <input value={profile?.cuit} id='cuit' name="cuit" type="cuit" className="input input-primary w-full" required />
            </Box>
            <Box>
                <label htmlFor="address" className="label">Dirección</label>
                <input defaultValue={profile?.address} id='address' name="address" type="address" className="input input-primary w-full" required />
            </Box>
            <Box>
                <label htmlFor="locality" className="label">Ciudad</label>
                <input defaultValue={profile?.locality} id='locality' name="locality" type="locality" className="input input-primary w-full" required />
            </Box>
            <Box>
                <label htmlFor="province" className="label">Provincia</label>
                <input defaultValue={profile?.province} id='province' name="province" type="province" className="input input-primary w-full" required />
            </Box>
            <Flex justify='end' align={"center"} className='space-x-4'>
                <Submit />
                <Link href="/dashboard" className='btn btn-sm btn-ghost'>
                    Volver
                </Link>
            </Flex>
            {state?.error && <p className='text-red-500'>{state.error}</p>}
        </form>
    )
}

const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} className='btn btn-sm btn-primary'>
            {pending && <span className="loading loading-spinner loading-xs" />}
            Guardar
        </Button>
    )
}