import { useState } from "react";
import { loginFromCli } from "@/actions/supabase/auth";
import { FaUser } from "react-icons/fa";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
    )
}