"use client";

import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";

import axios from "axios";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useState({});
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser().then((data) => {
            setUser(data);
        });
    }, []);

    useEffect(() => {
        fetchProjects(user).then(({ data }) => {
            setProjects(data);
            setLoading(false);
        });
    }, [user]);

    const onSubmit = (values) => {
        axios.post("/api/projects/create", {
            ...values,
            userId: user.id,
        });
        refreshProjects();
        document.getElementById("createProyect").close();
    };

    const refreshProjects = () => {
        setLoading(true);
        fetchProjects(user).then(({ data }) => {
            setProjects(data);
            setLoading(false);
        });
    }

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
                        {loading ? (
                            Array.from({ length: 6 }, (_, i) => (
                                <div
                                    key={i}
                                    className="card transition animate-pulse bg-base-200 h-24"
                                ></div>
                            ))
                        ) : projects ? (
                            projects?.map((project) => (
                                <div
                                    className="card shadow-lg"
                                    key={project?.id}
                                >
                                    <div className="card-body space-y-2">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="font-bold text-2xl">
                                                {project?.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {project?.date.split("T")[0]}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {project?.description ||
                                                "Sin descripcion"}
                                        </p>
                                        <div className="card-actions">
                                            <button
                                                type="button"
                                                className="btn btn-primary text-white shadow-lg"
                                            >
                                                Mas detalles
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="card shadow-lg">
                                <div className="card-body space-y-2">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-xl">
                                            No tienes proyectos
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        )}
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
                                className="input input-bordered w-full"
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
                                className="input input-bordered w-full"
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
                                className="input input-bordered w-full"
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
                                className="btn btn-secondary text-white"
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

const fetchUser = async () => {
    const session = await getSession();
    const { data } = await axios.get(`/api/user/${session.user.email}`);
    return data;
};

const fetchProjects = async (user) => {
    const projects = await axios.get(`/api/projects/user/${user.id}`);
    return projects;
};

export default ProjectsPage;
