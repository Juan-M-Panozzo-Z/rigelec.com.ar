import { useState, useEffect } from "react";
import { getGrowatt } from "../actions/growatt";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function GrowattData() {
    const [growattData, setGrowattData] = useState();

    useEffect(() => {
        const getData = async () => {
            const data = await getGrowatt();
            setGrowattData(data);
        };
        getData();
    }, []);

    return (

        <Link href="/growatt" className="btn btn-xs md:btn-sm btn-primary rounded-full text-[10px] md:text-xs shadow-xl text-white">
            {
                !growattData ? (
                    <Player
                        autoplay
                        loop
                        src="/assets/lottiefiles/leaf.json"
                        style={{ width: "1.2rem" }}
                    ></Player>
                ) : (
                    growattData?.error ? (
                        <span>{growattData?.error}</span>
                    ) : (
                        <>
                            <span className="hidden sm:inline">
                                Energía que generamos:
                            </span>{" "}
                            <strong>{growattData?.eTotal} Kwh</strong>
                        </>
                    )
                )
            }
        </Link>

    );
}
