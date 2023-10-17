export default function SkeletonCard() {
    return (
        <div className="pb-16 md:pb-8">
            <div className="card mx-8 bg-base-100 shadow-xl shadow-base-200 transition-all duration-200">
                <div className="flex flex-col justify-center gap-4 p-4">
                    <h2 className="animate-pulse w-36 badge badge-secondary card-title text-[10px] md:text-xs"></h2>
                    <div className="animate-pulse w-20 badge badge-sm badge-primary text-white"></div>
                    <div className="animate-pulse w-32 badge badge-sm badge-primary text-white"></div>
                </div>
            </div>
        </div>
    );
}
