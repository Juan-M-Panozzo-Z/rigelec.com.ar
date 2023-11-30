import { logout } from "@/actions/supabase/auth";
import { CiLogout } from "react-icons/ci";

export default function Logout() {
    return (
        <div className="fixed bottom-16 right-0 p-4">

            <form action={logout}>
                <button className="btn btn-md btn-circle">
                    <CiLogout className="h-6 w-6" />
                </button>
            </form>
        </div>
    )
}