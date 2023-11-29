import { Player } from "@lottiefiles/react-lottie-player";

export default function Card(card) {

return (
    <div className="card bg-base-100 shadow-xl">
        <figure>
            <Player
                autoplay
                loop
                src={card?.lottie}
                className="h-56 md:h-96"
            />
        </figure>
        <div className="card-body bg-base-200">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="card-title md:text-2xl">
                    {card?.title || 'cargando...'}
                </h2>
                <div className="badge badge-primary badge-md shadow p-4 font-semibold text-white">
                    {card?.data || 'cargando...'}
                </div>
            </div>
        </div>
    </div>
);
};