export default function SkeletonCard() {
    return (
        <div className="pb-16 md:pb-8">
            <div className="card mx-8 bg-base-100 shadow-xl shadow-base-200 transition-all duration-200">
                <div className="flex flex-col justify-center gap-4 p-4">
                    <h2 className="animate-pulse card-title text-[10px] md:text-xs">
                        Cargando...
                    </h2>
                    <h3 className="card-subtitle text-[10px] md:text-xs">
                        Marca
                        <div className="animate-pulse badge badge-sm mx-2 badge-primary text-[10px] md:text-xs">
                            Cargando...
                        </div>
                    </h3>
                    <p className="card-description text-[10px] md:text-xs">
                        Modelo
                        <div className="animate-pulse badge badge-sm mx-2 badge-primary text-[10px] md:text-xs">
                            Cargando...
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}
