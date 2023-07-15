import { useState, useEffect } from "react";
import axios from "axios";

export default function GrowattData() {
  const [growattData, setGrowattData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/growattData")
      .then((response) => {
        setGrowattData(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-20 bg-green-500 rounded-box p-4 shadow-xl  text-white hover:-translate-y-1 duration-200 transition-all">
      <h1 className="">
        {isLoading ? (
          <span className="loading-spinner loading"></span>
        ) : (
          `${growattData?.data?.eMonth} Kwh`
        )}
      </h1>
    </div>
  );
}
