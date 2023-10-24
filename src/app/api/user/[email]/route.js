import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(req) {
    const email = req.url.split("/")[5];

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
            name: true,
            lastname: true,
            password: false,
        },
    });

    return NextResponse.json(user);
}
