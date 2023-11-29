'use server'
import api from "growatt";

export const getGrowatt = async () => {
    const user = process.env.GROWATT_USER;
    const pass = process.env.GROWATT_PASSWORD;
    const apiGrowatt = new api();
    try {
        await apiGrowatt?.login(user, pass);
        const getAllPlantData = await apiGrowatt.getAllPlantData();
        console.log(getAllPlantData)
        if (getAllPlantData && getAllPlantData["2086609"]) {
            return getAllPlantData["2086609"].devices.QGHACE701F.deviceData;
        }
    } catch (error) {
        await apiGrowatt.logout();
        return { error: 'Los datos no estan disponibles en este momento' }
    }
}
