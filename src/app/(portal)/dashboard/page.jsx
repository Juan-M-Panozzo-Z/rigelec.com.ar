import PortalSection from "../components/PortalSection";
import { getProfile } from "../../../actions/supabase/user";
import { getTypeById } from "../../../actions/supabase/installer_types";
import Link from "next/link";
import { HiEye } from "react-icons/hi";

export default async function Dashboard() {
    const { error, data } = await getProfile()
    const type = await getTypeById(data.typeId)

    return (
        <section>
            <PortalSection title="mi perfil">
                {data ? (
                    <>
                        <div className="flex flex-row items-center">
                            <div className="flex flex-col">
                                <h3 className="text-xl uppercase text-neutral-700 tracking-tight">{data.name} - {type.name}</h3>
                                <p className="text-neutral-600">{data.cuit}</p>
                                <p className="text-lg">{data.address} - {data.locality}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col items-center mx-auto">
                            <HiEye className="text-8xl text-neutral-500" />
                            <h3 className="text-lg uppercase text-neutral-700 tracking-tight">
                                No tenemos información de tu perfil
                            </h3>
                            <p>
                                Te invitamos a llenes nuestro <Link className="link link-primary" href="/dashboard/profile">
                                    formulario
                                </Link> para poder publicitarte en nuestra plataforma.
                            </p>
                        </div>
                    </div>

                )}
            </PortalSection>
        </section>
    )
}