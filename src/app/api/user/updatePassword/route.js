import prisma from "../../../../../lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {id, password} = await req.json();
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            password: hashedPassword
        }
    });
    return NextResponse.json({
        status: 200,
        message: "Password updated successfully",
    })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Something went wrong",
            data: error
        })
    }
}