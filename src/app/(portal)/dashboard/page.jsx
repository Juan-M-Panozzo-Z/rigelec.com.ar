import { login } from "@/actions/supabase/auth"
import { getSession } from "@/actions/supabase/user"

export default async function Dashboard() {
    const session = await getSession()
    console.log(session)
    
    return (
        <div>
        <form action={login} className="space-y-2">
            <input type="email" name="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
            <input type="password" name="password" placeholder="Password" className="border border-gray-300 p-2 rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
        </div>
    )
}