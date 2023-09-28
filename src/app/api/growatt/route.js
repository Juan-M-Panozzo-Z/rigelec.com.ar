import api from "growatt";
import { NextResponse } from "next/server";

export async function GET() {
    const user = process.env.GROWATT_USER || "user";
    const pass = process.env.GROWATT_PASSWORD || "pass";
    const options = {};
    const apiGrowatt = new api({});
    await apiGrowatt.login(user, pass).catch(() => {});
    const getAllPlantData = await apiGrowatt
        .getAllPlantData(options)
        .catch(() => {});
    if (getAllPlantData && getAllPlantData["2086609"]) {
        return NextResponse.json(
            getAllPlantData["2086609"].devices.QGHACE701F.deviceData
        );
    }

    await apiGrowatt.logout().catch(() => {});
}
