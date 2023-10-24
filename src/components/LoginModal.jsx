"use client";

import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";
import { useState, useRef } from "react";

const LoginModal = () => {
    const recaptchaRef = useRef();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (recaptchaRef.current.getValue()) {
            setLoading(true);
            signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            })
                .then((res) => {
                    if (!res.error) {
                        recaptchaRef.current.reset();
                        router.push("/profile");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <>
            <button
                className="p-2 bg-info rounded-full w-8 h-8 flex items-center justify-center hover:bg-info-focus transition-all duration-200"
                onClick={() =>
                    document.getElementById("loginModal").showModal()
                }
            >
                <AiOutlineUser className="w-4 h-4 text-white" />
            </button>
            <dialog id="loginModal" className="modal sm:modal-middle">
                <div className="modal-box w-4/5">
                    <>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">
                                ¿Sos instalador?
                            </h3>
                            <p className="text-sm">
                                Inicia sesión para acceder a tu perfil, podrás
                                publicitarte de manera gratuita en nuestro sitio
                                web y llegar a más clientes.
                            </p>
                        </div>
                        <form
                            className="flex flex-col gap-2"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="form-control w-full">
                                <label className="label">
                                    Correo electrónico
                                </label>
                                <input
                                    className="input input-bordered"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-red-500">
                                        Este campo es requerido
                                    </span>
                                )}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">Contraseña</label>
                                <input
                                    className="input input-bordered"
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors.password && (
                                    <span className="text-red-500">
                                        Este campo es requerido
                                    </span>
                                )}
                            </div>

                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={
                                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                                }
                                size="invisible"
                            />

                            <div className="modal-action">
                                <button
                                    type="submit"
                                    className="btn btn-xs sm:btn-sm md:btn-md btn-primary text-white"
                                >
                                    {loading ? (
                                        <span className="loading loading-spinner" />
                                    ) : (
                                        <span>Iniciar sesión</span>
                                    )}
                                </button>
                                <button
                                    className="btn btn-xs sm:btn-sm md:btn-md btn-neutral text-white"
                                    onClick={() =>
                                        document
                                            .getElementById("loginModal")
                                            .close()
                                    }
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </>
                </div>
            </dialog>
        </>
    );
};

export default LoginModal;
