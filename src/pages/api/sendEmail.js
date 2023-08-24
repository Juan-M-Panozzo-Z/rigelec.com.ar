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
            to: "notificaciones@rigelec.com.ar",
            subject: `¡${name} quiere contactarse con nosotros!`,
            text: message,
            html: `
            
            <div style="background-color: #f5f5f5; padding: 20px;">
                <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
                    <h1 style="text-align: center; color: #000; margin-bottom: 20px;">¡${name} quiere contactarse con nosotros!</h1>
                    <h3 style="text-align: center; color: #000;">Mensaje:</h3>
                    <p style="text-align: center; color: #000;">${message}</p>

                    <div style="text-align: center; color: #000; margin-bottom: 20px; padding: 10px;">
                        <p style="margin: 0;">Nombre: ${name}</p>
                        <p style="margin: 0;">Email: ${email}</p>
                        <p style="margin: 0;">Teléfono: ${phone}</p>
                    </div>

                    <div style="text-align: center; color: #000;">
                        <img src="https://rigelec.com.ar/assets/images/logo.svg" alt="logo" style="width: 100px; height: 100px;">

                        <p style="margin: 0;">Rigelec S.A.</p>
                        <p style="margin: 0;">Las heras 331, Concordia - Entre Rios</p>
                        <p style="margin: 0;">Tel: (0345) 421-9940</p>
                    </div>
            `,
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
