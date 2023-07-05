import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <Image
                className="h-screen object-cover rounded-b-box"
                src="/assets/hero/1.jpg"
                width={1920}
                height={1080}
                alt="hero"
            />
            <Image
                className="hidden md:block z-10 absolute bottom-0"
                src={"/assets/hero/header-shape.svg"}
                width={1920}
                height={1080}
                alt="hero"
            />
            <div className="absolute -top-10 left-0 w-full h-full flex justify-center items-center">
                <div className="text-center m-4 p-8 rounded-box text-white bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-md flex flex-col gap-4">
                    <h1 className="text-3xl md:text-6xl">
                        ¿Necesitas comprar algo?
                    </h1>
                    <h3 className="md:text-xl">
                        No te preocupes, ingresa a nuestra tienda desde aquí
                    </h3>
                    <span className="md:text-3xl animate-bounce">👇</span>
                    <a
                        href="https://front-ecommerce-phi.vercel.app/"
                        target="_blank"
                        className="btn btn-primary mx-auto hover:bg-transparent rounded-full text-white transition-all"
                    >
                        Ir a la tienda
                    </a>
                </div>
            </div>
        </section>
    );
}
