import { useEffect, useState } from "react";
import { loginFromCli } from "@/actions/supabase/auth";
import { FaUser } from "react-icons/fa";
import { getUser } from "@/actions/supabase/client/user";
import { logout } from "@/actions/supabase/client/auth";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [aud, setAud] = useState('')

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            setAud(user.aud);
        };
        fetchUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault()
        closeModal()
        const response = await loginFromCli(email, password)
    }

    const closeModal = () => {
        document.getElementById('my_modal_1').close()
    }

    return (
        <>
            {aud !== "authenticated" ? (
                <>
                    <button className="btn btn-sm btn-circle btn-info shadow-lg" onClick={() => document.getElementById('my_modal_1').showModal()}>
                        <FaUser />
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg uppercase text-neutral-700 tracking-tight">Iniciar sesión</h3>
                            <form className="mt-4" onSubmit={onSubmit}>
                                <input type="email" className="input input-bordered w-full" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" className="input input-bordered w-full mt-4" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />

                                <div className="modal-action">
                                    <button className="btn btn-sm btn-primary" type="submit">
                                        Iniciar sesión
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        type="button"
                                        className="btn btn-sm">
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </>
            ) : (<>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-circle btn-info shadow-lg">
                        <FaUser />
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-1 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/dashboard">
                                <button className="btn btn-sm btn-ghost">Dashboard</button>
                            </Link>
                        </li>
                        <li>
                            <button onClick={logout} className="btn btn-sm btn-ghost">Cerrar sesión</button>
                        </li>
                    </ul>
                </div>
            </>)
            }
        </>
    )
}