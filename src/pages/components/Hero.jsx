import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen rounded-b-box">
            <Image
                className="h-screen object-cover brightness-75 filter blur-[2px]"
                src="/assets/hero/hero.jpg"
                width={1920}
                height={1080}
                alt="hero"
            />
            
            <div className="absolute -top-0 left-0 w-full h-screen flex justify-center items-center bg-white/10">
                <div className="text-center m-4 text-white flex flex-col gap-4">
                    <h1 className="text-3xl md:text-8xl">
                        ¿Necesitas comprar algo?
                    </h1>
                    <h3 className="md:text-2xl">
                        No te preocupes, ingresa a nuestra tienda desde aquí
                    </h3>
                    <span className="md:text-3xl animate-bounce">👇</span>
                    <a
                        href="https://front-ecommerce-phi.vercel.app/"
                        target="_blank"
                        className="btn btn-primary mx-auto rounded-full text-white transition-all"
                        disabled
                    >
                        Ir a la tienda
                    </a>
                </div>
            </div>
        </section>
    );
}
