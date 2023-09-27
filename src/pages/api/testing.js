import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    const result = await prisma.user.findMany();
    return res.status(200).json({ message: "Hello World", result });
}
