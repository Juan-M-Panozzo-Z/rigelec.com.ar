import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
    const { email, password, cuit } = await req.json();
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: await bcrypt.hash(password, 10),
                cuit,
            }
        });
        return NextResponse.json({
            message: "User created",
            user,
        });
    } catch (error) {
        return NextResponse.json({
            message: "User not created",
            error,
        });
    }
}
