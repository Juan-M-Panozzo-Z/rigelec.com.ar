import Section from "@/pages/components/Section";
import SectionTitle from "@/pages/components/SectionTitle";
import Image from "next/image";

const NosotrosPage = () => {
    return (
        <Section>
            <SectionTitle title="Nosotros" />
            <div className="relative h-full">
                <div className="flex flex-col gap-8 p-4">
                    <div className="hidden md:flex divider divider-horizontal absolute inset-0 w-full h-full"></div>
                    <div className="md:w-1/3 flex flex-col gap-2 justify-center md:self-start md:items-start p-4 rounded-box text-xl">
                        <Image
                            src={"assets/logos/original.svg"}
                            width={200}
                            height={200}
                            alt="sample"
                        />
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Rem asperiores quos ipsam officiis placeat quidem,
                        earum commodi veritatis ducimus assumenda qui itaque
                        facilis provident exercitationem ut sequi harum, eum,
                        neque repellendus unde minus at! Quo accusantium tenetur
                        fugiat? Adipisci, nulla?
                    </div>
                    <div className="md:w-1/3 flex flex-col gap-2 justify-center md:self-end md:items-end p-4 rounded-box text-xl">
                        <Image
                            src={"assets/logos/original.svg"}
                            width={200}
                            height={200}
                            alt="sample"
                        />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore dolorem cumque perferendis officiis iste quaerat
                        ex non tempora quasi quod fuga rem quam possimus velit
                        necessitatibus eius, assumenda inventore nam accusantium
                        sapiente suscipit. Facilis, voluptate laborum accusamus
                        magni libero doloremque.
                    </div>
                    <div className="md:w-1/3 flex flex-col gap-2 justify-center md:self-start md:items-start p-4 rounded-box text-xl">
                        <Image
                            src={"assets/logos/original.svg"}
                            width={200}
                            height={200}
                            alt="sample"
                        />
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Rem asperiores quos ipsam officiis placeat quidem,
                        earum commodi veritatis ducimus assumenda qui itaque
                        facilis provident exercitationem ut sequi harum, eum,
                        neque repellendus unde minus at! Quo accusantium tenetur
                        fugiat? Adipisci, nulla?
                    </div>
                    <div className="md:w-1/3 flex flex-col gap-2 justify-center md:self-end md:items-end p-4 rounded-box text-xl">
                        <Image
                            src={"assets/logos/original.svg"}
                            width={200}
                            height={200}
                            alt="sample"
                        />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore dolorem cumque perferendis officiis iste quaerat
                        ex non tempora quasi quod fuga rem quam possimus velit
                        necessitatibus eius, assumenda inventore nam accusantium
                        sapiente suscipit. Facilis, voluptate laborum accusamus
                        magni libero doloremque.
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default NosotrosPage;
