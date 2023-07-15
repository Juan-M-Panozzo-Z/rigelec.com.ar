import Image from "next/image";

export default function Card({ ...props }) {
    return (
        <div className="pb-32 md:pb-8">
            <div className="card mx-8 bg-base-100 shadow-xl shadow-base-200 transition-all duration-200">
                <figure>
                    <Image
                        src={props.image}
                        alt={props.title}
                        className="rounded-box aspect-square object-cover"
                        width={300}
                        height={400}
                    />
                </figure>
                <div className="flex flex-col justify-center gap-4 p-4">
                    <h2 className="card-title text-[10px] md:text-xs">
                        {props.title ? props.title.slice(0, 30) + " [...]" : ""}
                    </h2>
                    <h3 className="card-subtitle text-[10px] md:text-xs">
                        Marca
                        <div className="badge badge-sm mx-2 badge-primary text-[10px] md:text-xs">
                            {props.subtitle}
                        </div>
                    </h3>
                    <p className="card-description text-[10px] md:text-xs">
                        Modelo
                        <div className="badge badge-sm mx-2 badge-primary text-[10px] md:text-xs">
                            {props.description
                                ? props.description.slice(0, 15) + " [...]"
                                : ""}
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}
