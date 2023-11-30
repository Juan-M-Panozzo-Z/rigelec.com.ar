'use server'

import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { z } from 'zod';

export const login = async (formData) => {
    const supabase = await createSupabaseServerClient();
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
        throw error;
    } else {
        return redirect('/dashboard');
    }
};

export const signup = async (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
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
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    return redirect('/');
}