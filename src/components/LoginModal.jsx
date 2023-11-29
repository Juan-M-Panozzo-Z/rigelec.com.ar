"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";

const LoginModal = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
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
                } else {
                    setError(true);
                }
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
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
                            <div className="form-control">
                                <label className="label">
                                    Correo electrónico
                                </label>
                                <input
                                    className={`input input-bordered w-full ${
                                        error ? "input-error" : ""
                                    }`}
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
                            <div className="form-control">
                                <label className="label">Contraseña</label>
                                <div className="relative">
                                    <input
                                        className={`input input-bordered w-full ${
                                            error ? "input-error" : ""
                                        }`}
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                    <button
                                        type="button"
                                        className="absolute btn btn-ghost right-0"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <HiLockOpen className="w-5 h-5" />
                                        ) : (
                                            <HiLockClosed className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <span className="text-red-500">
                                        Este campo es requerido
                                    </span>
                                )}
                            </div>

                            <div className="modal-action">
                                <button
                                    disabled
                                    type="submit"
                                    className="btn btn-xs sm:btn-sm md:btn-md btn-primary text-white"
                                >
                                    {loading && (
                                        <span className="loading loading-spinner" />
                                    )}
                                    <span>Iniciar sesión</span>
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
