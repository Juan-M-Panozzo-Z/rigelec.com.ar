import Section from "@/pages/components/Section";
import SectionTitle from "@/pages/components/SectionTitle";
import ItemTimeline from "./components/ItemTimeline";

const NosotrosPage = () => {
    return (
        <Section>
            <SectionTitle title="Nosotros" />
            <div className="flex flex-col relative">
                <div className="hidden xl:block absolute divider divider-horizontal left-1/2 transform -translate-x-1/2 top-0 w-px h-full bg-secondary-content mx-auto"></div>
                <ItemTimeline align={"left"} />
                <ItemTimeline align={"right"} />
                <ItemTimeline align={"left"} />
                <ItemTimeline align={"right"} />
            </div>
        </Section>
    );
};

export default NosotrosPage;
