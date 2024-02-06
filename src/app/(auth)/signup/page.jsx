'use client'
import Link from "next/link";
import { signup } from "../../../actions/supabase/auth";
import { useFormState, useFormStatus } from "react-dom";
import { Box, Text } from "@radix-ui/themes";

export default function Signup() {
    const [state, formAction] = useFormState(signup, undefined)

    return (
        <section className="pt-24 h-screen">
            <div className="container mx-auto p-4">
                <div className="max-w-md mx-auto space-y-4">
                    <h3 className="text-lg uppercase text-neutral-700 tracking-tight">Registrarse</h3>
                    <p className="text-neutral-500">Crea una cuenta para poder publicitarte en nuestra plataforma.</p>
                    <form
                        action={formAction}
                        className="space-y-4">
                        <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" />
                        <input name="password" type="password" className="input input-bordered w-full mt-4" placeholder="contraseña" />
                        <Box className="flex justify-end gap-2 items-center">
                            <Submit />
                            <Link href="/" className="btn btn-sm btn-ghost" >
                                Volver
                            </Link>
                        </Box>
                    </form>
                    {state?.error && (
                        <Box className="bg-red-100 p-4 rounded-box shadow">
                            <Text as="p" className="text-center">{state?.error}</Text>
                        </Box>
                    )}
                    {state?.data && (
                        <Box className="bg-green-100 p-4 rounded-box shadow">
                            <Text as="p" className="text-center">{state?.data}</Text>
                        </Box>
                    )}
                </div>
            </div>
        </section>
    )
}

const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className="btn btn-sm btn-primary">
            {pending && <span className="loading loading-xs" />}
            Registrarse
        </button>
    )
}