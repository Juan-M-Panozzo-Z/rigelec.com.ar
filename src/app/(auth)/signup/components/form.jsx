'use client'
import { signup } from '@/actions/supabase/auth';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Signupform() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const { error } = await signup({ email, password });
        if (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 p-4 rounded-box border shadow max-w-md w-full'>
            <h3 className=' text-2xl'>Registrarse</h3>
            <div className='input-group w-full'>
                <label className='label'>Email</label>
                <input
                    className='input input-bordered w-full'
                    type="email"
                    {...register('email', { required: true })}
                />
                {errors.email && <span className='text-error block'>El email es requerido</span>}
            </div>
            <div className='input-group'>
                <label className='label'>Password</label>
                <input
                    className='input input-bordered w-full'
                    type="password"
                    {...register('password', { required: true })}
                />
                {errors.password && <span className='text-error block'>La contraseña es requerida</span>}
            </div>
            <div className='flex gap-2 justify-end'>
                <button className='btn btn-primary' type="submit">Registrarse</button>
                <Link href="/login">
                    <button className='btn btn-ghost' type="submit">Iniciar sesión</button>
                </Link>
            </div>
        </form>
    )
}