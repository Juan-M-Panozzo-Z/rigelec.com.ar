import Section from "@/pages/components/Section";
import SectionTitle from "@/pages/components/SectionTitle";
import ItemTimeline from "./components/ItemTimeline";

const NosotrosPage = () => {
    return (
        <Section>
            <SectionTitle title="Nosotros" />
            <div className="border-l">
                <ItemTimeline align={"left"} />
                <ItemTimeline align={"right"} />
                <ItemTimeline align={"left"} />
                <ItemTimeline align={"right"} />
            </div>
        </Section>
    );
};

export default NosotrosPage;
