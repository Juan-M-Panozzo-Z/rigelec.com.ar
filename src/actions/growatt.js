'use server'
import api from "growatt";

export const getGrowatt = async () => {
    console.log("getGrowatt")
    const user = process.env.GROWATT_USER;
    const pass = process.env.GROWATT_PASSWORD;
    const apiGrowatt = new api();
    await apiGrowatt.login(user, pass);
    const getAllPlantData = await apiGrowatt.getAllPlantData();
    if (getAllPlantData && getAllPlantData["2086609"]) {
        console.log(getAllPlantData["2086609"].devices.QGHACE701F.deviceData);
        return getAllPlantData["2086609"].devices.QGHACE701F.deviceData;
    }
    await apiGrowatt.logout();
    return { error: "No disponible" };
}
