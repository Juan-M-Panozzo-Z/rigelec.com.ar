import { signIn } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";
import { useForm } from "react-hook-form";
const LoginModal = () => {
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
                className="p-2 bg-secondary rounded-full w-8 h-8 flex items-center justify-center hover:bg-secondary-focus transition-all duration-200"
                onClick={() =>
                    document.getElementById("loginModal").showModal()
                }
            >
                <AiOutlineUser className="text-white" />
            </button>
            <dialog id="loginModal" className="modal sm:modal-middle">
                <div className="modal-box w-3/4">
                    <>
                        <h3 className="font-bold text-lg">Iniciar sesión</h3>
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
                </div>
            </dialog>
        </>
    );
};

export default LoginModal;
