import { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
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
        <div className="bg-green-500 bg-opacity-70 rounded-box p-2 shadow-xl text-white duration-300 transition-all text-xs">
            <span className="">
                {isLoading ? (
                    <Player
                        autoplay
                        loop
                        src="/assets/lottiefiles/energy.json"
                        style={{ width: "2rem" }}
                    ></Player>
                ) : (
                    <div className="flex items-center gap-1">
                        <Player
                            autoplay
                            loop
                            src="/assets/lottiefiles/energy.json"
                            style={{ width: "2rem" }}
                        ></Player>
                        <span className="">
                            Energía generada:{" "}
                            <strong>{growattData?.data?.eMonth} Kwh</strong>
                        </span>
                    </div>
                )}
            </span>
        </div>
    );
}
