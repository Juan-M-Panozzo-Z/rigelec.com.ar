import { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import Link from "next/link";

export default function GrowattData() {
    const [growattData, setGrowattData] = useState({
        eTotal: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
        <div className="bg-primary rounded-box p-2 duration-300 transition-all text-[9px] md:text-[11px] w-28 md:w-auto text-base-100">
            <span className="">
                <Link href="/growatt">
                    {isLoading ? (
                        <Player
                            autoplay
                            loop
                            src="/assets/lottiefiles/leaf.json"
                            style={{ width: "1.7rem" }}
                        ></Player>
                    ) : (
                        <span className="">
                            Energía que generamos:{" "}
                            <strong>{growattData?.data?.eTotal} Kwh</strong>
                        </span>
                    )}
                </Link>
            </span>
        </div>
    );
}
