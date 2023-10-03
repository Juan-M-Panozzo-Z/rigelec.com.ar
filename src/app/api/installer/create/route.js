import prisma from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name } = await req.json();
    console.log();
    try {
        const installer = await prisma.installer.create({
            data: {
                name,
            },
        });

        return NextResponse.json({
            message: "Installer created",
            installer,
        });
    } catch (error) {
        return NextResponse.json({
            message: "Installer not created",
            error,
        });
    }
}
