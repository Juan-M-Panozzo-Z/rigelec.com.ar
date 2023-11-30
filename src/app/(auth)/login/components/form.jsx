import { login } from '@/actions/supabase/auth';

export default function LoginForm() {


    return (
        <form action={login}>
            <input type="text" name="email" />
            <input type="password" name="password" />
            <button type="submit">Login</button>
        </form>
    )
}