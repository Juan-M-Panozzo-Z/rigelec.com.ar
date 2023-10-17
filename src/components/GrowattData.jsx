import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
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
        <div className="btn btn-sm btn-primary rounded-full text-[10px] md:text-xs shadow-xl text-white">
            <Link href="/growatt">
                {isLoading ? (
                    <Player
                        autoplay
                        loop
                        src="/assets/lottiefiles/leaf.json"
                        style={{ width: "1.2rem" }}
                    ></Player>
                ) : (
                    <>
                        {growattData.error ? (
                            <span>{growattData.error}</span>
                        ) : (
                            <>
                                <span className="hidden sm:inline">
                                    Energía que generamos:
                                </span>{" "}
                                <strong>{growattData?.eTotal} Kwh</strong>
                            </>
                        )}
                    </>
                )}
            </Link>
        </div>
    );
}
