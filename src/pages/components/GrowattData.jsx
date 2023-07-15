import { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import axios from "axios";

export default function GrowattData() {
    const [growattData, setGrowattData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // setIsLoading(true);
        // axios
        //   .get("/api/growattData")
        //   .then((response) => {
        //     setGrowattData(response);
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
        //   .finally(() => {
        //     setIsLoading(false);
        //   });
        setGrowattData({
            data: {
                eMonth: 145,
            },
        });
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-20 bg-green-500 bg-opacity-70 rounded-box p-4 shadow-xl text-white hover:-translate-y-2 duration-300 transition-all">
            <span className="">
                {isLoading ? (
                    <span className="loading-spinner loading"></span>
                ) : (
                    <div className="flex items-center gap-1">
                        <Player
                            autoplay
                            loop
                            src="/assets/lottiefiles/energy.json"
                            style={{ width: "2rem" }}
                        ></Player>
                        <span className="text-sm">
                        Energía generada: <strong>{growattData?.data?.eMonth} Kwh</strong>
                        </span>
                    </div>
                )}
            </span>
        </div>
    );
}
