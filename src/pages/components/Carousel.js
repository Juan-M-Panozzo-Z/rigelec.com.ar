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
<Marquee
            className="p-4"
            gradient={false}
            speed={50}
        >
            {marcas.map((marca) => (
                <img
                    key={marca}
                    src={`/assets/marcas/${marca}`}
                    alt="marca"
                    className="h-24 p-4"
                />
            ))}
        </Marquee>
        </SectionFluid>
    );
}
