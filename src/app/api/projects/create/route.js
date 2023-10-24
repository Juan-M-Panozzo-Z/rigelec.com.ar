import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req) {
    const { userId, name, date, description, image } = await req.json();

    const project = await prisma.project.create({
        data: {
            userId,
            name,
            date: new Date(date),
            description,
            imageUrl: image,
        },
    });

    return NextResponse.json(project);
}
