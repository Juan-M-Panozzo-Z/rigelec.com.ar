"use client";

import { getSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";

import axios from "axios";
import { useEffect, useState } from "react";

const ContactsPage = () => {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useState({});
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser().then((data) => {
            setUser(data);
        });
    }, []);

    useEffect(() => {
        fetchContacts(user).then((data) => {
            setContacts(data);
            setLoading(false);
        });
    }, [user]);

    const onSubmit = (values) => {
        axios
            .post("/api/contacts/create", {
                ...values,
                userId: user.id,
            })
            .then(({ data }) => {
                console.log(data);
            });
        document.getElementById("createContactMethod").close();
    };

    return (
        <section>
            <div className="container mx-auto">
                <div className="w-full flex justify-between">
                    <h2 className="text-2xl font-semibold">
                        Métodos de contacto publicados
                    </h2>
                    <button
                        onClick={() =>
                            document
                                .getElementById("createContactMethod")
                                .showModal()
                        }
                        className="btn btn-ghost"
                    >
                        <HiPlus className="w-5 h-5" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {loading ? (
                        Array.from({ length: 6 }, (_, i) => (
                            <div
                                key={i}
                                className="card transition animate-pulse bg-base-200 h-12"
                            ></div>
                        ))
                    ) : contacts ? (
                        contacts?.map((contact) => (
                            <div
                                className="card card-compact shadow-lg"
                                key={contact?.id}
                            >
                                <div className="card-body space-y-2">
                                    <h3 className="font-bold text-2xl">
                                        {contact?.type}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {contact?.value}
                                    </p>
                                    <div className="card-actions"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="card card-compact shadow-lg">
                            <div className="card-body space-y-2">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-xl">
                                        No tienes metodos de contacto publicados
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <dialog id="createContactMethod" className="modal">
                <div className="modal-box">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        method="dialog"
                        className="flex flex-col gap-4"
                    >
                        <h3 className="font-bold text-lg">
                            Crear método de contacto público
                        </h3>
                        <div className="form-control">
                            <span className="text-sm flex p-1 gap-1">
                                Tipo de método
                                <span className="text-red-500">*</span>
                            </span>
                            <input
                                type="text"
                                placeholder="Ej: WhatsApp"
                                className="input input-bordered w-full"
                                {...register("type", {
                                    required: true,
                                    minLength: 3,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <span className="text-sm flex p-1 gap-1">
                                Metodo de contacto
                                <span className="text-red-500">*</span>
                            </span>
                            <input
                                type="text"
                                placeholder="Ej: +54 9 11 1234-5678"
                                className="input input-bordered w-full"
                                {...register("value", {
                                    required: true,
                                    minLength: 3,
                                })}
                            />
                        </div>
                        <div className="modal-action">
                            <button
                                type="submit"
                                className="btn btn-primary text-white"
                            >
                                Crear
                            </button>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("createContactMethod")
                                        .close()
                                }
                                className="btn btn-secondary text-white"
                            >
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </section>
    );
};

const fetchUser = async () => {
    const session = await getSession();
    const { data } = await axios.get(`/api/user/${session.user.email}`);
    return data;
};

const fetchContacts = async (user) => {
    const { data } = await axios.get(`/api/contacts/user/${user.id}`);
    return data;
};

export default ContactsPage;
