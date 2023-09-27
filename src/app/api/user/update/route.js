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
                ...userUpdate,
            },
        });
        return NextResponse.json({
            message: "User updated",
        });
    } catch (error) {
        return NextResponse.json({
            message: "User not updated",
        });
    }
}
