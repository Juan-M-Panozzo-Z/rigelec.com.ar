"use strict";
const api = require("growatt");
import { useState, useEffect } from "react";

export default function GrowattPage() {
  const [data, setData] = useState(null);
  const getGrowattData = async () => {
    const user = "RIGELEC.SER";
    const pass = "SER.RIGELEC";
    const options = {};
    const apiGrowatt = new api({});
    await apiGrowatt.login(user, pass).catch(() => {});
    const getAllPlantData = await apiGrowatt
      .getAllPlantData(options)
      .catch(() => {});
    if (getAllPlantData && getAllPlantData["2086609"]) {
      console.log(getAllPlantData["2086609"].devices.QGHACE701F.deviceData);
    }
    await apiGrowatt.logout().catch(() => {});
  };

  getGrowattData();

  return (
    <div>
      <h1>Growatt</h1>
    </div>
  );
}
