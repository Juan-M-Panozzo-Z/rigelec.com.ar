import Link from 'next/link'
import { getTypes } from '../../../../actions/supabase/installer_types'
import { setProfile, getProfile, getAvatar } from '../../../../actions/supabase/user'
export default async function ProfilePage() {
    const { data: profile } = await getProfile()
    const types = await getTypes()

    return (
        <div className="container mx-auto p-4">
            <div className='max-w-md mx-auto'>
                <form action={setProfile} className="flex flex-col gap-4 w-full">
                    <div className='form-control'>
                        <div className='label'>
                            <label className='label-text'
                                htmlFor='avatar'>
                                Imagen de perfil
                            </label>
                        </div>
                        <input
                            id='avatar'
                            name='avatar'
                            type='file'
                            placeholder='Avatar'
                            className='file-input file-input-bordered'
                            accept="image/png, image/jpeg"
                            max-size="4194304"
                        />
                    </div>
                    <select
                        defaultValue={profile.typeId}
                        name='type'
                        className='select select-bordered'>
                        {types.map((type) => (
                            <option
                                key={type.id}
                                value={type.id}
                            >
                                {type.name}
                            </option>
                        ))}
                    </select>
                    <input
                        defaultValue={profile.cuit}
                        disabled
                        name='cuit'
                        type='text'
                        placeholder='Cuit'
                        className='input input-bordered'
                    />
                    <input
                        defaultValue={profile.name}
                        name='name'
                        type='text'
                        placeholder='Nombre'
                        className='input input-bordered'
                    />
                    <input
                        defaultValue={profile.address}
                        name='address'
                        type='text'
                        placeholder='Dirección de la empresa'
                        className='input input-bordered'
                    />
                    <input
                        defaultValue={profile.locality}
                        name='locality'
                        type='text'
                        placeholder='Localidad'
                        className='input input-bordered'
                    />
                    <input
                        defaultValue={profile.province}
                        name='province'
                        type='text'
                        placeholder='Provincia'
                        className='input input-bordered'
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href='/dashboard' className='btn'>
                            Volver
                        </Link>
                        <button className='btn btn-primary'>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}