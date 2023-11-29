import Image from "next/image";
import { BsFillCircleFill } from "react-icons/bs";

const ItemTimeLine = ({ image, video, date, text }) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 border-l-2 border-dashed md:border-none">
                {image && (
                    <Image
                        lazy="true"
                        className="rounded-box shadow-2xl m-4 object-cover aspect-video"
                        src={
                            image ||
                            "https://fastly.picsum.photos/id/560/536/354.jpg?hmac=TI8joEROYkgTwHMV_Wza2YJSQ1jS2sMNq-BcpFVxoMM"
                        }
                        alt="Nosotros"
                        width={536}
                        height={354}
                    />
                )}
                {video && (
                    <video
                        className="rounded-box shadow-2xl m-4 object-cover aspect-video"
                        src={video}
                        alt="Nosotros"
                        width={536}
                        height={354}
                        controls
                    />
                )}
                <div className="md:w-2/3 space-y-2 md:border-l-2 md:border-dashed mt-4">
                    <div className="md:-translate-x-2.5 md:-translate-y-1 flex gap-2 items-center">
                        <BsFillCircleFill className="hidden md:block text-xl text-secondary outline-2 outline-offset-1 outline-secondary outline rounded-full" />
                        <h3 className="text-3xl font-bold text-gray-700">
                            {date || "2023"}
                        </h3>
                    </div>
                    <p className="p-4 border-b-2 border-dashed md:border-none text-secondary-focus">
                        {text ||
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemTimeLine;
