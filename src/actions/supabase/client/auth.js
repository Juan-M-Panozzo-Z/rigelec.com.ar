import createSupabaseClient from "@/lib/supabase/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from 'zod';

export const loginFromCli = async ( email, password ) => {
    console.log('loginFromCli', email, password)
    const supabase = await createSupabaseClient();
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });
    const zod = schema.safeParse({ email, password });
    if (zod.error) { throw zod.error }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return JSON.stringify(error.message);
    } else {
        return redirect('/dashboard');
    }
};

export const loginFromSsr = async (formData) => {
    const supabase = await createSupabaseClient();
    const email = formData.get('email');
    const password = formData.get('password');
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });
    const zod = schema.safeParse({ email, password });
    if (zod.error) { throw zod.error }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return JSON.stringify(error.message);
    } else {
        return redirect('/dashboard');
    }
};

export const signup = async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        throw error;
    }
    console.log('signup success');
};

export const logout = async () => {
    const supabase = await createSupabaseClient();
    await supabase.auth.signOut();
    revalidatePath('/');
}