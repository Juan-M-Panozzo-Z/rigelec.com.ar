'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useState } from "react";
import { loginFromSsr } from "../actions/supabase/auth";
import { FaUser } from "react-icons/fa";
import { getUser } from "../actions/supabase/client/user";
import { logout } from "../actions/supabase/client/auth";
import Link from "next/link";
import { FaArrowRightFromBracket, FaHouse } from "react-icons/fa6";
import { getAvatar } from "../actions/supabase/client/user";
import Image from "next/image";
import { AlertDialog, Box, Button, Heading, Text } from "@radix-ui/themes";

export default function Login() {
    const [state, formAction] = useFormState(loginFromSsr, undefined)
    const [aud, setAud] = useState('')
    const [avatar, setAvatar] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            setAud(user.aud);
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchAvatar = async () => {
            const resp = await getAvatar();
            setAvatar(resp);
        };
        fetchAvatar();
    }, []);

    const handleLogout = async () => {
        setLoading(true)
        await logout()
    }

    useEffect(() => {
        if (state?.redirect) {
            window.location.replace(state?.redirect)
        }
    }, [state])

    return (
        <>
            {aud !== "authenticated" ? (
                <AlertDialog.Root >
                    <AlertDialog.Trigger>
                        <Button className="btn btn-xs md:btn-sm btn-secondary rounded-box shadow">
                            Portal de instaladores
                        </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content className="modal-box">
                        <Heading className="modal-header">
                            Iniciar sesión
                        </Heading>
                        <Text>
                            Si eres instalador, inicia sesión para acceder a tu portal y publicitar tus servicios.
                        </Text>
                        <form action={formAction} className='space-y-4'>
                            <Box>
                                <label htmlFor="email" className="label">Correo electrónico</label>
                                <input id='email' name="email" type="email" className="input input-primary w-full" required />
                            </Box>
                            <Box>
                                <label htmlFor="password" className="label">Contraseña</label>
                                <input id='password' name="password" type="password" className="input input-primary w-full" required />
                            </Box>
                            {state && <Text >{state?.error || state?.data}</Text>}
                            <Box className="modal-action">
                                <Submit />
                                <AlertDialog.Cancel asChild>
                                    <Link href={'/signup'} className='btn btn-sm btn-ghost'>
                                        Registrarse
                                    </Link>
                                </AlertDialog.Cancel>
                            </Box>
                        </form>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            ) : (<>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-circle btn-info shadow-lg grid place-content-center">
                        {
                            avatar
                                ? <Image src={avatar} width={32} height={32} className="rounded-full aspect-square object-cover" />
                                : <FaUser />
                        }
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-1 z-[1] space-y-2 menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/dashboard">
                                <FaHouse className="mr-2" />
                                Mi perfil
                            </Link>
                        </li>
                        <li>
                            <span
                                className='text-white bg-error'
                                onClick={handleLogout}>
                                {loading
                                    ? <span className="loading loading-spinner loading-xs" />
                                    : <FaArrowRightFromBracket className="mr-2" />
                                }
                                Cerrar sesión
                            </span>
                        </li>
                    </ul>
                </div>
            </>)
            }
        </>
    )
}

const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} className="btn btn-sm btn-primary">
            {pending && <span className="loading loading-spinner loading-xs" />}
            Iniciar sesión
        </Button>
    )
}