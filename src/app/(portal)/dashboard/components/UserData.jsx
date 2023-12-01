import { getProfile } from "@/actions/supabase/user";
import ItemUserData from "./ItemUserData"
import { FaEdit, FaHammer, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { getTypeById } from "@/actions/supabase/installer_types";


export default async function UserData() {
    let profile = {
        name: '',
        cuit: '',
        typeId: '',
        address: '',
        locality: '',
        province: ''
    }
    profile = await getProfile()
    const typeById = await getTypeById(profile?.typeId)
    
    return (
        <div className="flex flex-col items-start gap-4 capitalize">
            <div className="flex items-center justify-between w-full">
                <h4 className="text-2xl">{profile?.name}</h4>
                <Link href={'dashboard/edit'} className="btn btn-sm">
                    <FaEdit className="h-4 w-4" />
                </Link>
            </div>
            <span className="text-neutral-400 text-sm">{profile.cuit}</span>
            <ItemUserData
                icon={<FaHammer />}
                label={typeById?.name}
            />
            <ItemUserData
                icon={<FaLocationArrow />}
                label={profile?.address + ', ' + profile?.locality + ', ' + profile?.province}
            />
        </div>
    )
}