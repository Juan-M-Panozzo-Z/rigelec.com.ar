import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req) {
    const { type, value, userId } = await req.json();

    const createContactMethod = await prisma.contactMethod.create({
        data: {
            type,
            value,
            userId,
        },
    });

    return NextResponse.json(createContactMethod);
}
