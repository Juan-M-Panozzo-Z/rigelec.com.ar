import PortalSection from "../components/PortalSection";
import { getAvatar, getProfile } from "../../../actions/supabase/user";
import { getTypeById } from "../../../actions/supabase/installer_types";
import Link from "next/link";
import { HiEye } from "react-icons/hi";
import { FaPencil } from "react-icons/fa6";
import Image from "next/image";

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
    const { data } = await getProfile()
    const avatar = await getAvatar()
    const type = await getTypeById(data.typeId)

    return (
        <section>
            <PortalSection
                className="max-w-xl mx-auto"
                title="mi perfil">
                {data ? (
                    <>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center gap-4">
                                {avatar ? <Image src={avatar} width={80} height={80} className="rounded-full border shadow" /> : <span className="w-[80px] h-[80px] aspect-square rounded-full grid place-content-center border shadow text-4xl text-neutral-500">{data.name.charAt(0)}</span>}
                                <div className="flex flex-col w-full">
                                    <h3 className="text-xl uppercase text-neutral-700 tracking-tight">{data.name}</h3>
                                    <p className="text-neutral-500">{data.cuit}</p>
                                    <h4 className="text text-neutral-600">{type.name}</h4>
                                    <p className="">{data.address} - {data.locality}</p>
                                </div>
                            </div>
                            <div className="self-end">
                                <Link href="/dashboard/profile" className="btn btn-sm btn-primary">
                                    <FaPencil className="mr-2 inline-block" />
                                    Editar
                                </Link>
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