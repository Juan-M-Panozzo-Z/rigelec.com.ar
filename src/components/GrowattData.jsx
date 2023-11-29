import { useState, useEffect } from "react";
import { getGrowatt } from "@/actions/growatt";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function GrowattData() {
    const [growattData, setGrowattData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await getGrowatt();
            setGrowattData(data);
        };
        getData();
    }, []);

    return (
        <div className="btn btn-sm btn-primary rounded-full text-[10px] md:text-xs shadow-xl text-white">
            <Link href="/growatt">
                {!growattData ? (
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
