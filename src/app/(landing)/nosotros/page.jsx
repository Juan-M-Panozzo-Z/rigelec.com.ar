import Image from "next/image";
import Section from "@/components/Section";
import ItemTimeline from "./components/ItemTimeline";

const paragraphs = [
    {
        title: "Misión",
        text: "Brindamos soluciones en iluminación y electricidad con productos duraderos y normalizados, priorizando la sostenibilidad y el menor impacto ambiental. Proporcionamos información detallada y opciones adecuadas para garantizar eciencia energética y prácticas respetuosas con el medio ambiente.",
    },
    {
        title: "Visión",
        text: `Convertirnos en una empresa reconocida en Concordia y en la región, así como en el ámbito nacional e internacional a través de nuestra venta de materiales eléctricos e iluminación. Queremos ser la opción preferida por las familias, proporcionando productos de calidad y servicio online con las necesidades del mercado global.`,
    },
    {
        title: "Valores",
        text: `La excelencia en todas nuestras acciones, superar las expectativas del cliente, fomentar la innovación continua, buscar la mejora constante, respetar la igualdad y la diversidad, aprender de nuestros errores, mantener una conducta ética en el negocio, ejercer nuestra responsabilidad social empresarial, promulgar la transparencia, demostrar compromiso, actuar con integridad y liderar con el ejemplo en todo momento.`,
    },
    {
        title: "Objetivos",
        text: `Nuestros objetivos principales incluyen: vender productos legítimos y brindar un excelente asesoramiento a nuestros clientes, crear un ambiente laboral centrado en el cliente, desarrollar las competencias directivas del personal, impulsar proyectos innovadores, promover la responsabilidad socio-ambiental, fomentar el buen uso de los recursos energéticos, construir una matriz energética más democrática, generar confianza y compromiso con los clientes, y buscar oportunidades de crecimiento a través de la innovación.`,
    },
    {
        title: "Mercado",
        text: `Nuestro mercado objetivo se centra en empresas y clientes residenciales que buscan soluciones en eficiencia y optimización energética. Ofrecemos consultoría en gestión de energía, venta de productos eléctricos como tableros normalizados y equipos de protección, soluciones en iluminación personalizadas, asesoramiento, diseño, acompañamiento y desarrollo de cada deseo del cliente para decorar e iluminar su lugar. Asesoramiento en productos de audio y video. También nos especializamos en la venta de productos de energías renovables.`,
    },
];

const Items = ({ paragraphs }) => {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {paragraphs.map((paragraph, index) => (
                <div key={index} className="">
                    <h3 className="text-xl py-2 px-4 bg-base-200/60 uppercase rounded-box">
                        {paragraph.title}
                    </h3>
                    <p className="p-4">{paragraph.text}</p>
                </div>
            ))}
        </div>
    );
};

const NosotrosPage = () => {
    return (
        <Section>
            <div className="container mx-auto space-y-8 mt-32">
                <Items paragraphs={paragraphs} />
                <div>
                    <h3 className="col-span-1 text-xl py-2 px-4 bg-base-200/60 rounded-box uppercase">
                        Nuestro logo
                    </h3>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-2/3 mx-auto p-4">
                        <Image
                            src="/assets/logos/rigelecOld.svg"
                            width={400}
                            height={400}
                            alt="Rigelec logo anterior"
                        />
                        <div className=" border border-dashed h-12 w-0 mx-auto md:h-0 md:w-full" />
                        <Image
                            src="/assets/logos/rigelecNew.svg"
                            width={400}
                            height={400}
                            alt="Rigelec logo actual"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl py-2 px-4 bg-base-200/60 rounded-box uppercase">
                        Nuestra historia
                    </h3>
                    <ItemTimeline
                        date={"1988"}
                        text={
                            'Esta historia comienza con el abuelo, Abdón (Don Yiye), acompañando a Ricardo a abrir un taller de reparación de electrodomésticos. A medida que el negocio crece, surgen nuevos desafíos debido a la aparición de electrodomésticos considerados "descartables". Ante esta situación, se toma la decisión de incorporar materiales eléctricos de manera gradual.'
                        }
                        image={"/assets/timeline/1988.png"}
                    />
                    <ItemTimeline
                        date={"1998"}
                        text={
                            "A medida que crecía, se fueron incorporando más rubros como ferretería, audio y materiales eléctricos. Los proveedores fueron clave en este crecimiento y se crearon lazos cercanos con ellos. El hogar familiar se convirtió en depósito y la familia ayudaba a acomodar los productos, el trabajo se mezclaba con momentos de diversión y aprendizaje sobre el trabajo colaborativo."
                        }
                        image={"/assets/timeline/1998.jpg"}
                    />
                    <ItemTimeline
                        date={"2003"}
                        text={
                            "Ricardo e Isabel tenían el sueño de tener su propio lugar para Rigelec, y en 2003 lograron comprar un terreno en Calle Las Heras 331."
                        }
                        image={"/assets/timeline/2003.jpg"}
                    />
                    <ItemTimeline
                        date={"2008"}
                        text={
                            "Lo que comenzó como un galpón se convirtió en una construcción de 3 pisos que se completó en 2008. A lo largo de los años, Rigelec ha experimentado altibajos y desafíos, pero ha logrado desarrollar su marca comercial. Comprometidos en ofrecer un gran servicio a sus clientes, fomentar la innovación y contribuir al bienestar de la comunidad."
                        }
                        image={"/assets/timeline/2008.png"}
                    />
                    <ItemTimeline
                        date={"2023"}
                        text={
                            "Con una nueva generación que se suma a nuestra historia, nos enfrentamos al doble desafío de preservarla y hacerla crecer, trabajando en conjunto con nuestros padres. En 35 años de trayectoria, es difícil resumir todo lo vivido, pero queremos agradecer a todos los que formaron parte de nuestro camino hasta hoy. Seguiremos creciendo, superando obstáculos y adaptándonos al cambio, comprometidos en brindar lo mejor de nosotros sin importar las circunstancias."
                        }
                        video={"/assets/timeline/2023.mp4"}
                    />
                </div>
            </div>
        </Section>
    );
};

export default NosotrosPage;
