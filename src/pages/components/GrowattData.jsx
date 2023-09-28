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
            .get("/api/growatt")
            .then(({ data }) => {
                setGrowattData(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="bg-primary rounded-full p-2 duration-300 transition-all text-[11px] md:w-auto text-base-100">
            <span className="">
                <Link href="/growatt">
                    {isLoading ? (
                        <Player
                            autoplay
                            loop
                            src="/assets/lottiefiles/leaf.json"
                            style={{ width: "1.1rem" }}
                        ></Player>
                    ) : (
                        <>
                            {growattData.error ? (
                                <span className="capitalize">
                                    no disponible
                                </span>
                            ) : (
                                <>
                                    <span className="hidden sm:inline">
                                        Energía que generamos:
                                    </span>{" "}
                                    <strong>
                                        {growattData?.data?.eTotal} Kwh
                                    </strong>
                                </>
                            )}
                        </>
                    )}
                </Link>
            </span>
        </div>
    );
}
