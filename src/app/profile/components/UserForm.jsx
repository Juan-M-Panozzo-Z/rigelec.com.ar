"use client";
import Image from "next/image";

const UserForm = ({ user }) => {
    return (
        <section className="p-4 grid grid-cols-3">
            <div
                className="col-span-1 flex items-center tooltip"
                data-tip="Cambiar avatar"
            >
                <Image
                    onClick={() => console.log("click")}
                    src={"assets/logos/original.svg"}
                    alt="Rigelec logo"
                    width={200}
                    height={200}
                    className="hover:opacity-75 ease-in-out duration-200 rounded-full"
                />
            </div>
            <div className="col-span-2">
                <h2 className="md:text-2xl">{`¡Bienvenid@ ${user?.name}!`}</h2>
                <p className="text-[10px] md:text-sm text-gray-500">{`CUIT: ${user?.cuit}`}</p>
            </div>
            <div className="col-span-3 mt-4">
                <h3 className="md:text-xl text-center">
                    Perfil del instalador
                </h3>
                <form className="md:grid md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Nombre</span>
                        </label>
                        <input
                            value={user?.name}
                            type="text"
                            placeholder="Nombre"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Apellido</span>
                        </label>
                        <input
                            value={user?.lastname}
                            type="text"
                            placeholder="Apellido"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">CUIT</span>
                        </label>
                        <input
                            value={user?.cuit}
                            type="number"
                            placeholder="cuit"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Teléfono</span>
                        </label>
                        <input
                            value={user?.phone}
                            type="number"
                            placeholder="Teléfono"
                            className="input input-bordered"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UserForm;
