import Image from "next/image";
import Section from "./components/Section";
import IndexLayout from "./layouts/indexLayout";

export default function NosotrosPage() {
    return (
        <IndexLayout title="Sobre nosotros">
            <Section className="container mx-auto flex flex-col items-center justify-center gap-4 mt-32">
                <h1 className="text-6xl">Nosotros</h1>
                <div className="text-left space-y-3 bg-base-200/50 p-4 rounded-box">
                    <p>
                        Rigelec S.R.L. (1988 - 2023) Nuestra historia comenzó
                        hace más de 35 años como un modesto taller de reparación
                        de electrodomésticos. Desde entonces, hemos crecido y
                        nos hemos convertido en una empresa líder en la región
                        en el comercio de materiales eléctricos.{" "}
                    </p>
                    <p>
                        Queremos expresar nuestro sincero agradecimiento a todos
                        aquellos que han sido parte de nuestro camino y han
                        contribuido a nuestro éxito. Cada persona que ha formado
                        parte de nuestra historia ha dejado una huella
                        invaluable en nuestro crecimiento.
                    </p>{" "}
                    <p>
                        En Rigelec, nuestro compromiso es seguir creciendo,
                        superando obstáculos y adaptándonos constantemente al
                        cambio. Nos enorgullece formar parte de una
                        transformación continua y brindar siempre lo mejor de
                        nosotros, sin importar los desafíos que se presenten en
                        nuestro camino.
                    </p>{" "}
                    <p>
                        Agradecemos la confianza que nuestros clientes y socios
                        comerciales han depositado en nosotros a lo largo de los
                        años. Esperamos continuar sirviendo a nuestra comunidad
                        y ofreciendo soluciones eléctricas de calidad.
                    </p>{" "}
                    <p className="font-semibold">
                        ¡Bienvenidos a Rigelec, donde la excelencia y el
                        servicio excepcional son nuestra prioridad!
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 justify-center mt-12">
                    <Image
                        className="rounded-box aspect-square object-cover w-3/4 mx-auto hover:opacity-70 duration-200"
                        src="/assets/nosotros/01.jpg"
                        width={500}
                        height={500}
                        alt="hero"
                    />
                    <Image
                        className="rounded-box aspect-square object-cover w-3/4 mx-auto hover:opacity-70 duration-200"
                        src="/assets/nosotros/02.jpg"
                        width={500}
                        height={500}
                        alt="hero"
                    />
                    <Image
                        className="rounded-box aspect-square object-cover w-3/4 mx-auto hover:opacity-70 duration-200"
                        src="/assets/nosotros/03.jpg"
                        width={500}
                        height={500}
                        alt="hero"
                    />
                </div>
            </Section>
        </IndexLayout>
    );
}
