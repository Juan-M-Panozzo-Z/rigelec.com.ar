'use client'

import { useState, useEffect } from "react";
import { getGrowatt } from "@/actions/growatt";
import Section from "@/components/Section";
import Card from './components/Card';

export default function Growatt() {
    const [growattData, setGrowattData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await getGrowatt();
            setGrowattData(data);
        };
        getData();
    }, []);

    const cards = [
        {
            title: "Potencia total que generamos",
            data: `${growattData?.eTotal} Kwh`,
            lottie: "/assets/lottiefiles/energy.json",
        },
        {
            title: "Reduccion de emisiones de CO2",
            data: `${(growattData?.eTotal * 0.4).toFixed(2)} Kg`,
            lottie: "/assets/lottiefiles/power.json",
        },
        {
            title: "Potencia actual de paneles solares",
            data: `${growattData?.pac}W`,
            lottie: "/assets/lottiefiles/solar.json",
        },
    ]

    return (
        <Section>
            <div className="container mx-auto">
                {(
                    <div className="pt-32">
                        <div className="grid lg:grid-cols-3 px-4 gap-4">
                            {
                                cards.map((card, index) => (
                                    <Card key={index} card={card} />
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}

