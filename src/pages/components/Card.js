import Image from "next/image";

export default function Card({ ...props }) {
    return (
        <div className="card bg-base-100 shadow-xl hover:bg-primary-focus hover:text-white transition-all duration-200">
            <figure>
                <Image
                    src={
                        props.image ||
                        "https://fastly.picsum.photos/id/279/700/700.jpg?hmac=pzMBL1z_csgGokJt7gA0et3goPwqEfzfZCy4LZj5Ouk"
                    }
                    alt={props.title}
                    className="rounded-xl aspect-square object-cover"
                    width={600}
                    height={600}
                    placeholder="blur"
                />
            </figure>
            <div className="card-body items-center justify-center space-y-2">
                <h2 className="card-title text-sm flex-grow">{props.title}</h2>
                <button className="btn btn-primary">
                    <a
                        href={props.urlArchivo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ficha técnica
                    </a>
                </button>
            </div>
        </div>
    );
}
