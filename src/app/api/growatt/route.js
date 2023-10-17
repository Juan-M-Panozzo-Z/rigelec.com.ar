import api from "growatt";
import { NextResponse } from "next/server";

export async function GET() {
  const user = process.env.GROWATT_USER;
  const pass = process.env.GROWATT_PASSWORD;
  const apiGrowatt = new api();
  await apiGrowatt.login(user, pass);
  const getAllPlantData = await apiGrowatt.getAllPlantData();
  if (getAllPlantData && getAllPlantData["2086609"]) {
    return NextResponse.json(
      getAllPlantData["2086609"].devices.QGHACE701F.deviceData
    );
  }
  await apiGrowatt.logout();
  return NextResponse.json({ error: "No disponible" });
}
