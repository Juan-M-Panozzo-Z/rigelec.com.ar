import { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import Link from "next/link";

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
        <div className="bg-base-100 rounded-box p-1 duration-300 transition-all text-[9px] w-28 md:text-xs md:w-auto">
            <span className="">
                <Link href="/growatt">
                    {isLoading ? (
                        <Player
                            autoplay
                            loop
                            src="/assets/lottiefiles/battery.json"
                            style={{ width: "2rem" }}
                        ></Player>
                    ) : (
                        <div className="flex items-center gap-1">
                            <Player
                                autoplay
                                loop
                                src="/assets/lottiefiles/battery.json"
                                style={{ width: "2rem" }}
                            ></Player>
                            <span className="">
                                Energía que generamos:{" "}
                                <strong>{growattData?.data?.eTotal} Kwh</strong>
                            </span>
                        </div>
                    )}
                </Link>
            </span>
        </div>
    );
}
