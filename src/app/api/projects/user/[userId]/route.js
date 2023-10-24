import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function GET(req) {
    const userId = req.url.split("/")[6];
    
    const projects = await prisma.project.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
            name: true,
            date: true,
            description: true,
            imageUrl: true,
        },
    });

    return NextResponse.json(projects);
}