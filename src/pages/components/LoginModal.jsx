import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";
import { useForm } from "react-hook-form";
const LoginModal = () => {
    const { data: session, status } = useSession();
    console.log(session);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        signIn("credentials", {
            email: data.email,
            password: data.password,
        });
    };

    return (
        <>
            <button
                className={`p-2 rounded-full w-8 h-8 flex items-center justify-center
                    ${
                        status === "loading"
                            ? "bg-gray-500"
                            : session
                            ? "bg-green-500"
                            : "bg-red-500"
                    }
                `}
                onClick={() =>
                    document.getElementById("loginModal").showModal()
                }
            >
                {session?.user ? (
                    <span className="text-sm text-white">
                        {session?.user?.name?.split(" ")[0].charAt(0)}
                    </span>
                ) : (
                    <AiOutlineUser className="text-white" />
                )}
            </button>
            <dialog id="loginModal" className="modal sm:modal-middle">
                <div className="modal-box w-3/4">
                    {status === "unauthenticated" ? (
                        <>
                            <h3 className="font-bold text-lg">
                                Iniciar sesión
                            </h3>
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
                                <div className="modal-action">
                                    <button
                                        type="submit"
                                        className="btn btn-xs sm:btn-sm md:btn-md btn-primary text-white"
                                    >
                                        Iniciar sesión
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
                    ) : (
                        <>
                            <h3 className="font-bold text-lg">
                                Bienvenido {session?.user?.name?.split(" ")[0]}
                            </h3>
                            <button
                                className="btn btn-primary"
                                onClick={() => signOut()}
                            >
                                Cerrar sesión
                            </button>
                        </>
                    )}
                </div>
            </dialog>
        </>
    );
};

export default LoginModal;
