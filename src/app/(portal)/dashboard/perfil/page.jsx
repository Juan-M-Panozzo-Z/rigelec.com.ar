import Link from "next/link";
import Section from "../components/Section";
import { FaEdit } from "react-icons/fa";


export default function Page() {
  return (
    <Section
      title="Perfil"
      action={
        <Link href="/dashboard/perfil/edit">
          <FaEdit className="h-4 w-4" />
        </Link>}
    >
      <div className="p-4">
      </div>
    </Section>
  );
}