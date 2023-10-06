import Image from "next/image";

const ItemTimeLine = ({ image, date, text }) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 border-l-2 md:border-none">
                <Image
                    className="rounded-box shadow-2xl m-4 object-cover aspect-video"
                    src={
                        image ||
                        "https://fastly.picsum.photos/id/560/536/354.jpg?hmac=TI8joEROYkgTwHMV_Wza2YJSQ1jS2sMNq-BcpFVxoMM"
                    }
                    alt="Nosotros"
                    width={536}
                    height={354}
                />
                <div className=" md:w-2/3 space-y-2 md:border-l-2">
                    <h3 className="p-4 text-3xl font-bold text-gray-700">
                        {date || "2023"}
                    </h3>
                    <p className="p-4 border-b-2 md:border-none text-secondary-focus">
                        {text ||
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemTimeLine;
