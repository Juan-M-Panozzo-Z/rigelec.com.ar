"use strict";
const api = require("growatt");
import { URLSearchParams } from "url-search-params-polyfill";

export default function GrowattPage() {
  const user = "RIGELEC.SER";
  const pass = "SER.RIGELEC";
  const options = {};
  const apiGrowatt = new api({});

  const growatt = async () => {
    await apiGrowatt
      .login(user, pass)
      .then((res) => {
        console.log("login:", JSON.stringify(res, null, " "));
      })
      .catch(() => {});

    await apiGrowatt
      .getAllPlantData(options)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {});

    await apiGrowatt
      .logout()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {});
  };

  growatt();

  return (
    <div>
      <h1>Growatt</h1>
    </div>
  );
}
