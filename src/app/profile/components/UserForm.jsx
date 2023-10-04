"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const UserForm = ({ user, installers }) => {
    const [userData, setUserData] = useState(user);
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
            .post("/api/user/update", userData)
            .then((res) => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <section className="grid grid-cols-3 bg-white/30 rounded-box">
            <div style={style} className="p-8 rounded-box col-span-3">
                <div className="tooltip" data-tip="Cambiar avatar">
                    <Image
                        onClick={() => console.log("click")}
                        src={"/assets/rigelec-app/samples/instalador.jpg"}
                        alt="Avatar"
                        width={200}
                        height={200}
                        className="border-4 border-white shadow-lg rounded-full object-cover w-20 h-20 translate-y-20 md:h-32 md:w-32"
                    />
                </div>
            </div>
            <div className="p-8 col-span-3 mt-4">
                <h3 className="md:text-xl text-center">
                    Perfil del instalador
                </h3>
                <form className="flex flex-col gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Tipo de instalador
                            </span>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            value={userData?.installer?.id || ""}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    installer: { id: e.target.value },
                                })
                            }
                        >
                            <option value="">Seleccionar</option>
                            {installers.map((installer) => (
                                <option key={installer.id} value={installer.id}>
                                    {installer.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            disabled
                            value={userData?.email}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    email: e.target.value,
                                })
                            }
                            type="text"
                            placeholder="Nombre"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Nombre</span>
                        </label>
                        <input
                            value={userData?.name}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    name: e.target.value,
                                })
                            }
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
                            value={userData?.lastname}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    lastname: e.target.value,
                                })
                            }
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
                            value={userData?.cuit}
                            disabled
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
                            value={userData?.phone}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    phone: e.target.value,
                                })
                            }
                            type="number"
                            placeholder="Teléfono"
                            className="input input-bordered"
                        />
                    </div>
                    <button
                        disabled={loading}
                        onClick={handleFormSubmit}
                        className="btn btn-primary text-white col-span-2"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-md"></span>
                        ) : (
                            "Guardar cambios"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

const style = {
    backgroundImage: "url('/assets/rigelec-app/samples/portada.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

export default UserForm;
