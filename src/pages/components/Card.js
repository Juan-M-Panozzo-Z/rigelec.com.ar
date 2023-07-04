import Image from "next/image";

export default function Card({ ...props }) {
    return (
        <div className="card bg-base-100 shadow-xl hover:bg-primary-focus hover:text-white transition-all duration-200">
            <figure>
                <Image
                    src="https://fastly.picsum.photos/id/279/700/700.jpg?hmac=pzMBL1z_csgGokJt7gA0et3goPwqEfzfZCy4LZj5Ouk"
                    alt="card image"
                    className="rounded-xl"
                    width={500}
                    height={500}
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
