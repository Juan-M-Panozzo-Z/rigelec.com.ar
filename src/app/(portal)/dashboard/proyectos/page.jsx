import Link from "next/link";
import Section from "../components/Section";
import { FaPlus } from "react-icons/fa";

export default function Page() {
    return (
        <Section
            title="Proyectos"
            action={
                <Link href="/dashboard/perfil/edit">
                    <FaPlus className="h-4 w-4" />
                </Link>}
        >
            <div className="p-4">

            </div>
        </Section>
    );
}