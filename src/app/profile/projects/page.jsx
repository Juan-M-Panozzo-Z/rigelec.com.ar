"use client";

import { getSession, getUserData } from "next-auth/react";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";

import { useState, useEffect } from "react";
import axios from "axios";

const ProjectsPage = () => {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState(null);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            setSession(session);
            const user = await axios.get(`/api/user/${session?.user?.email}`);
            setUser(user.data);
        };
        fetchSession();

        const fetchProjects = async () => {
            const projects = await axios.get(`/api/projects/user/${user?.id}`);
            setProjects(projects.data);
        };
        fetchProjects();
    }, [user, projects]);

    const onSubmit = (values) => {
        axios.post("/api/projects/create", {
            ...values,
            userId: user.id,
        });
        document.getElementById("createProyect").close();
    };

    return (
        <>
            <section>
                <div className="container mx-auto">
                    <div className="w-full flex justify-between">
                        <h2 className="text-2xl font-semibold">Proyectos</h2>
                        <button
                            onClick={() =>
                                document
                                    .getElementById("createProyect")
                                    .showModal()
                            }
                            className="btn btn-ghost"
                        >
                            <HiPlus className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects?.map((project) => (
                            <div className="card shadow-lg" key={project?.id}>
                                <div className="card-body">
                                    <h3 className="font-bold text-xl">
                                        {project?.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {project?.date.toLocaleString({
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        }) || "Sin fecha"}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {project?.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <dialog id="createProyect" className="modal">
                <div className="modal-box">
                    <form
                        method="dialog"
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h3 className="font-bold text-lg">
                            Carga tu proyecto a la plataforma
                        </h3>
                        <div className="form-control">
                            <span className="text-sm flex p-1 gap-1">
                                Nombre del proyecto
                                <span className="text-red-500">*</span>
                            </span>
                            <input
                                type="text"
                                placeholder="proyecto 1"
                                className="input input-bordered"
                                {...register("name", {
                                    required: true,
                                    minLength: 3,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <span className="text-sm flex p-1 gap-1">
                                Fecha de finalización del proyecto
                                <span className="text-red-500">*</span>
                            </span>
                            <input
                                type="date"
                                placeholder={new Date()}
                                className="input input-bordered"
                                {...register("date", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <span className="text-sm flex p-1 gap-1">
                                Descripción del proyecto
                            </span>
                            <textarea
                                placeholder="Descripción"
                                className="textarea textarea-bordered"
                                {...register("description", {
                                    minLength: 10,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <span className="text-sm flex p-1 gap-1">
                                URL de la imagen del proyecto
                            </span>
                            <input
                                type="text"
                                placeholder="URL de la Imagen"
                                className="input input-bordered"
                                {...register("image", {
                                    pattern: {
                                        value: /https?:\/\/.*\.(?:png|jpg)/i,
                                        message: "Debe ser una URL válida",
                                    },
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
                                        .getElementById("createProyect")
                                        .close()
                                }
                                className="btn btn-secondary"
                            >
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default ProjectsPage;
