import Image from "next/image";
import { useState } from "react";

export default function Card({ ...props }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="m-8 card shadow-xl shadow-base-200 transition-all duration-200">
            <figure className="relative flex justify-center items-center">
                <Image
                    src={props.image}
                    alt={props.title}
                    className="rounded-box aspect-square object-cover"
                    width={600}
                    height={600}
                    onLoad={() => setIsLoading(false)}
                />
                {isLoading && (
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="loading loading-spinner text-base-300 h-32 w-32" />
                    </div>
                )}
            </figure>
            <div className="flex flex-col justify-center gap-4 p-4 h-36">
                <h2 className="font-semibold text-sm">
                    {props.title ? props.title.slice(0, 30) : ""}
                </h2>

                <div className="badge badge-md shadow badge-primary text-xs text-white">
                    {props.subtitle}
                </div>

                <div className="badge badge-md shadow badge-primary text-xs text-white">
                    {props.description?.slice(0, 15)}
                </div>
            </div>
        </div>
    );
}
