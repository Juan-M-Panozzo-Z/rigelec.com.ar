import { AiOutlineUser } from "react-icons/ai";

const LoginModal = () => {
    return (
        <>
            <button
                className="bg-secondary p-2 rounded-full"
                onClick={() =>
                    document.getElementById("loginModal").showModal()
                }
            >
                <AiOutlineUser className="w-4 h-4 text-white" />
            </button>
            <dialog id="loginModal" className="modal sm:modal-middle">
                <div className="modal-box w-3/4">
                    <h3 className="font-bold text-lg">Iniciar sesión</h3>
                    <p className="py-4">Formulario de inicio de sesion</p>
                    <div className="modal-action">
                        <form
                            method="dialog"
                            className="flex gap-1 justify-center"
                        >
                            <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary text-white">
                                Iniciar sesión
                            </button>
                            <button className="btn btn-xs sm:btn-sm md:btn-md btn-secondary text-white">
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default LoginModal;
