'use client'

// import { login } from '@/actions/supabase/auth';
// import Link from 'next/link';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

export default function LoginForm() {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const [error, setError] = useState(null);

    // const onSubmit = async (data) => {
    //     const { email, password } = data;
    //     const error = await login({ email, password });
    //     if (error) {
    //         setError('Credenciales inválidas');
    //     }
    // }

    return (
        <>
            asd
        </>
        // <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 p-4 rounded-box border shadow max-w-md w-full'>
        //     <h3 className=' text-2xl'>Iniciar sesión</h3>
        //     <div className='input-group w-full'>
        //         <label className='label'>Email</label>
        //         <input
        //             className='input input-bordered w-full'
        //             type="email"
        //             {...register('email', { required: true })}
        //         />
        //         {errors.email && <span className='text-error block'>El email es requerido</span>}
        //     </div>
        //     <div className='input-group'>
        //         <label className='label'>Password</label>
        //         <input
        //             className='input input-bordered w-full'
        //             type="password"
        //             {...register('password', { required: true })}
        //         />
        //         {errors.password && <span className='text-error block'>La contraseña es requerida</span>}
        //     </div>
        //     {error && <span className='text-error block'>{error}</span>}
        //     <div className='flex gap-2 justify-end'>
        //         <button className='btn btn-primary' type="submit">Iniciar sesión</button>
        //         <Link href="/signup">
        //             <button className='btn btn-ghost' type="submit">Registrarse</button>
        //         </Link>
        //     </div>
        // </form>
    )
}