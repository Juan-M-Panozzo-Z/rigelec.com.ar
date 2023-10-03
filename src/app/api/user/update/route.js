import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req) {
    const { email, ...userUpdate } = await req.json();
    try {
        const user = await prisma.user.update({
            where: {
                email,
            },
            data: {
                installerId: userUpdate.installer.id,
                name: userUpdate.name,
                lastname: userUpdate.lastname,
                phone: userUpdate.phone,
            }
        });
        return NextResponse.json({
            message: "User updated",
            user
        });
    } catch (error) {
        return NextResponse.json({
            message: "User not updated",
            error
        });
    }
}
