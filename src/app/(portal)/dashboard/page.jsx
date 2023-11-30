import { logout } from "@/actions/supabase/auth"
export default async function Dashboard() {

    return (
        <div>
            <form action={logout}>
                <button type="submit">Logout</button>
            </form>
        </div>
    )
}