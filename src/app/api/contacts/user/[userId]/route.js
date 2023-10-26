import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function GET(req) {
    const userId = req.url.split("/")[6];

    if (userId === "undefined") {
        return NextResponse.error({
            status: 400,
            message: "userId is undefined",
        });
    }
    const contactMethod = await prisma.contactMethod.findMany({
        where: {
            userId,
        },
    });
    return NextResponse.json(contactMethod);
}
