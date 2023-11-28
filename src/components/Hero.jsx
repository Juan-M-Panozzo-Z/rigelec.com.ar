import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen rounded-b-box">
            <Image
                priority
                className="h-screen object-cover brightness-90 filter"
                src="/assets/hero/hero.jpg"
                width={1920}
                height={1080}
                alt="hero"
            />

            <div className="bg-gradient-to-b from-transparent from-70% via-transparent via-10% to-base-100 absolute -top-0 left-0 w-full h-screen flex justify-center items-center bg-white/10">
                <div className="text-center m-4 text-white flex flex-col gap-4">
                    <h1 className="text-4xl md:text-8xl" style={styles}>
                        ¿Necesitás comprar algo?
                    </h1>
                    <h3 className="mt-4 text-xl md:text-3xl" style={styles}>
                        ingresá a nuestra tienda desde aquí
                    </h3>
                    <span className="md:text-3xl animate-bounce">👇</span>
                    <div
                        className="tooltip tooltip-bottom"
                        data-tip="¡Proximamente!"
                    >
                        <Link
                            href="https://store.rigelec.com.ar/"
                            className="btn btn-primary mx-auto rounded-full text-white transition-all"
                        >
                            Ir a rigelec store
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    textShadow: "-1px 1px 10px rgba(0,0,0,0.4)",
};
