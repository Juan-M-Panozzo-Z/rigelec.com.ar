import { useState, useEffect } from "react";

export default function ContactUs() {
    const inputs = [
        {
            label: "¿Cuál es tu nombre?",
            sample: "Ej: Juan Pérez",
            type: "text",
        },
        {
            label: "¿Cuál es tu correo electrónico?",
            sample: "Ej: persona@mail.com",
            type: "email",
        },
        {
            label: "¿Cuál es tu número de teléfono?",
            sample: "Ej: 12345678",
            type: "tel",
        },
        {
            label: "¿Cuál es tu mensaje?",
            type: "textarea",
        },
    ];

    return (
        <div className="md:w-1/2 mx-auto">
            <form className=" space-y-4">
                {inputs.map((input, index) => (
                    <div key={index} className="form-control w-full">
                        <label className="label">
                            <span className="label-text">{input.label}</span>
                        </label>
                        <input
                            type={input.type}
                            placeholder={input.sample || ""}
                            className={`input input-bordered w-full ${
                                input.type === "textarea" ? "textarea h-24" : ""
                            }`}
                        />
                    </div>
                ))}
                <div className="form-control w-full">
                    <button className="btn btn-primary w-full">Enviar</button>
                </div>
            </form>
        </div>
    );
}
