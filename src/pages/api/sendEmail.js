import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const { method } = req;
    if (method === "POST") {
        const { name, email, phone, message } = req.body;
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
            secure: true,
        });
        const mailData = {
            from: `${name} <${email}>`,
            to: 'notificaciones@rigelec.com.ar',
            subject: `¡${name} quiere contactarse con nosotros!`,
            text: message,
            html: `
            <div>Telefono de contacto: ${phone}</div>
            <div>Mensaje: ${message}</div>`,
        };
        transporter.sendMail(mailData, function (err, info) {
            if (err) console.log(err);
            else console.log(info);
        });
        res.status(200).json({ status: "OK" });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `Method ${method} not allowed` });
    }
}
