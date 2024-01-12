'use server';
import { signup } from "@/actions/supabase/auth";

export default async function Signup() {

    return (
        <section className="mt-24 h-screen">
            <div className="container mx-auto p-4">
                <div className="max-w-md mx-auto space-y-4">
                    <h3 className="text-lg uppercase text-neutral-700 tracking-tight">Registrarse</h3>
                    <p className="text-neutral-500">Crea una cuenta para poder publicitarte en nuestra plataforma.</p>
                    <form
                        action={signup}
                        className="space-y-4">
                        <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" />
                        <input name="password" type="password" className="input input-bordered w-full mt-4" placeholder="contraseña" />
                        <button className="btn btn-primary mt-4">Registrarse</button>
                    </form>
                </div>
            </div>
        </section>
    )
}