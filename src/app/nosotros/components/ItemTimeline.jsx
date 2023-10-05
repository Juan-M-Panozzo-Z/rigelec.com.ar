import Image from "next/image";

const ItemTimeLine = ({ image, date, text, align }) => {
    return (
        <div className={align == "left" ? " self-start" : "self-end"}>
            <div className="relative p-4 max-w-lg">
                <div>
                    <span
                        id="fecha"
                        className={`bg-secondary-content p-4 w-36 h-auto rounded-box shadow-lg text-3xl font-semibold text-secondary-focus text-center uppercase absolute transform top-[100px] ${
                            align === "left" ? "-right-[50px]" : "-left-[50px]"
                        }`}
                    >
                        {date || "1988"}
                    </span>
                    <div
                        className={`hidden xl:block absolute divider divider-vertical -z-10 transform top-[120px] ${
                            align === "left"
                                ? "2xl:-right-[200px]"
                                : "2xl:-left-[200px]"
                        } h-px w-full bg-secondary-content`}
                    ></div>
                </div>
                <Image
                    className="w-full rounded-box shadow-2xl"
                    src={
                        image ||
                        "https://fastly.picsum.photos/id/560/536/354.jpg?hmac=TI8joEROYkgTwHMV_Wza2YJSQ1jS2sMNq-BcpFVxoMM"
                    }
                    alt="Nosotros"
                    width={536}
                    height={354}
                />
                <p className="mt-4 text-secondary-focus">
                    {text ||
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                </p>
            </div>
        </div>
    );
};

export default ItemTimeLine;
