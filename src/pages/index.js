import Layout from "./layouts/indexLayout";
import Section from "./components/Section";
import SectionFluid from "./components/SectionFluid";
import SectionTitle from "./components/SectionTitle";
import Card from "./components/Card";

export default function Home() {
    return (
        <Layout>
            <Section>
                <SectionTitle title="Articulos destacados" />
                <div className="mt-8 grid md:grid-cols-3 text-center gap-8">
                    <Card
                        title="Articulo 1"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    />
                    <Card
                        title="Articulo 2"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    />
                    <Card
                        title="Articulo 3"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    />
                </div>
            </Section>
            <SectionFluid>
            </SectionFluid>
        </Layout>
    );
}
