'use client'

import IndexLayout from "../layout";
import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Section from "@/components/Section";

export default function Growatt() {
    const [growattData, setGrowattData] = useState(null);

    useEffect(() => {
        fetch("/api/growatt")
            .then((res) => res.json())
            .then((data) => {
                setGrowattData(data);
            });
    }, []);



    return (
            <Section>
                <div className="container mx-auto">
                    {(
                        <div className="pt-32">
                            <div className="grid md:grid-cols-3 px-4 gap-4">
                                <Card
                                    title="Potencia total que generamos"
                                    data={`${growattData?.eTotal} Kwh`}
                                    lottie="/assets/lottiefiles/energy.json"
                                />
                                <Card
                                    title="Reduccion de emisiones de CO2"
                                    data={`${(growattData?.eTotal * 0.4).toFixed(
                                        2
                                    )} Kg`}
                                    lottie="/assets/lottiefiles/power.json"
                                />
                                <Card
                                    title="Potencia actual de paneles solares"
                                    data={`${growattData?.pac}W`}
                                    lottie="/assets/lottiefiles/solar.json"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </Section>
    );
}

const Card = ({ ...props }) => {

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <Player
                    autoplay
                    loop
                    src={props.lottie}
                    className="h-56 md:h-96"
                />
            </figure>
            <div className="card-body bg-base-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="card-title md:text-2xl">
                        {props.title}
                    </h2>
                    <div className="badge badge-primary badge-md shadow p-4 font-semibold text-white">
                        {props.data}
                    </div>
                </div>
            </div>
        </div>
    );
};