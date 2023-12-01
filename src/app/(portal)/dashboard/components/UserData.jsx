import { getUser } from "@/actions/supabase/user"
import ItemUserData from "./ItemUserData"
import { FaEdit, FaHammer, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";


export default async function UserData() {
    const { user_metadata: metadata } = await getUser()
    return (
        <div className="flex flex-col items-start gap-4 capitalize">
            <div className="flex items-center justify-between w-full">
                <h4 className="text-2xl">{metadata?.name}</h4>
                <Link href={'dashboard/edit'} className="btn btn-sm">
                    <FaEdit className="h-4 w-4" />
                </Link>
            </div>
            <span className="text-neutral-400 text-sm">{metadata.cuit}</span>
            <ItemUserData
                icon={<FaHammer />}
                label={metadata?.type}
            />
            <ItemUserData
                icon={<FaLocationArrow />}
                label={metadata?.address + ', ' + metadata?.locality + ', ' + metadata?.province}
            />
        </div>
    )
}