import api from "growatt";

export default async function handler(req, res) {
  const user = "RIGELEC.SER";
  const pass = "SER.RIGELEC";
  const options = {};
  const apiGrowatt = new api({});
  await apiGrowatt.login(user, pass).catch(() => {});
  const getAllPlantData = await apiGrowatt
    .getAllPlantData(options)
    .catch(() => {});
  if (getAllPlantData && getAllPlantData["2086609"]) {
    res
      .status(200)
      .json(getAllPlantData["2086609"].devices.QGHACE701F.deviceData);
  }

  await apiGrowatt.logout().catch(() => {});
}
