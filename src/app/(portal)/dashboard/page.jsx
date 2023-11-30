import PortalSection from "../components/PortalSection";
import DataForm from "./components/DataForm";

export default function Dashboard() {
    return (
        <section>
            <PortalSection title="tus datos">
                <DataForm />
            </PortalSection>
        </section>
    )
}