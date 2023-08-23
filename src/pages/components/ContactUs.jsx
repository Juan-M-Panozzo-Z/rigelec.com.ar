import axios from "axios";
import { useState, useEffect } from "react";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && email && phone && message) {
            await axios
                .post("/api/sendEmail", {
                    name,
                    email,
                    phone,
                    message,
                })
                .then(() => {
                    alert("Gracias por contactarnos");
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert("Por favor, completa todos los campos");
        }
    };

    return (
        <div className="md:w-1/2 mx-auto">
            <form className=" space-y-4">
                <div className="form-control w-full">
                    <label className="label">¿Cuál es tu nombre?</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Ej: Juan Pérez"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">¿Cuál es tu correo electronico?</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Ej: persona@mail.com"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">¿Cuál es tu teléfono?</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        placeholder="Ej: 12345678"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">¿Cuál es tu nombre?</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="¿Cuál es tu mensaje?"
                        className="textarea h-24 input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <button
                        onClick={handleSubmit}
                        className="btn btn-primary w-full text-white"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
