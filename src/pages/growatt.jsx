import IndexLayout from "./layouts/indexLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import Section from "./components/Section";

export default function Growatt() {
    const [growattData, setGrowattData] = useState({
        eTotal: 0,
        pac: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/api/growattData")
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

    const Card = ({ ...props }) => {
        console.log(props.eTotal);

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

    return (
        <IndexLayout title="Green Energy" className="">
            <Section>
            <div className="container mx-auto">
                {isLoading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <Player
                            autoplay
                            loop
                            src="/assets/lottiefiles/loading.json"
                        />
                    </div>
                ) : (
                    <div className="pt-32">
                        <div className="grid md:grid-cols-3 px-4 gap-4">
                            <Card
                                title="Potencia total que generamos"
                                data={`${growattData.eTotal} Kwh`}
                                lottie="/assets/lottiefiles/energy.json"
                            />
                            <Card
                                title="Reduccion de emisiones de CO2"
                                data={`${(growattData.eTotal * 0.4).toFixed(
                                    2
                                )} Kg`}
                                lottie="/assets/lottiefiles/power.json"
                            />
                            <Card
                                title="Potencia actual de paneles solares"
                                data={`${growattData.pac}W`}
                                lottie="/assets/lottiefiles/solar.json"
                            />
                        </div>
                    </div>
                )}
            </div>
            </Section>
        </IndexLayout>
    );
}
