import { getTypes } from '../../../../actions/supabase/installer_types'

export default async function ProfilePage() {
    const types = await getTypes()
    console.log(types)
    return (
        <div className="container mx-auto p-4">
            <div className='max-w-md mx<figure class="text-start">
                <blockquote class="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            '>
                <form className="flex flex-col gap-4 w-full">
                    <select className='select select-bordered'>
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
                        name='cuit'
                        type='text'
                        placeholder='Cuit'
                        className='input input-bordered'
                    />
                    <input
                        name='name'
                        type='text'
                        placeholder='Nombre'
                        className='input input-bordered'
                    />
                    <input
                        name='address'
                        type='text'
                        placeholder='Dirección de la empresa'
                        className='input input-bordered'
                    />
                    <input
                        name='locality'
                        type='text'
                        placeholder='Localidad'
                        className='input input-bordered'
                    />
                    <input
                        name='province'
                        type='text'
                        placeholder='Provincia'
                        className='input input-bordered'
                    />
                    <button className='btn btn-primary'>Guardar</button>
                </form>
            </div>
        </div>
    );
}