import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionFluid from "./SectionFluid";
import SectionTitle from "./SectionTitle";

const marcas = [
    "ALIC.svg",
    "argenplas.svg",
    "artelum.svg",
    "Baw.svg",
    "CAMBRE.svg",
    "candil.svg",
];

export default function Carousel() {
    return (
        <SectionFluid>
            <SectionTitle title="Marcas que comercializamos" />
            <Marquee className="p-4 mt-4" gradient={false} speed={50}>
                {marcas.map((marca) => (
                    <Image
                        width={200}
                        height={200}
                        key={marca}
                        src={`/assets/marcas/${marca}`}
                        alt="marca"
                        className="h-16 p-2"
                    />
                ))}
            </Marquee>
        </SectionFluid>
    );
}
