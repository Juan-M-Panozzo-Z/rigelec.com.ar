'use server'

import { revalidatePath } from "next/cache";
import createSupabaseServerClient from "../../lib/supabase/server";
import { redirect } from "next/navigation";
import { z } from 'zod';

export const loginFromCli = async (email, password) => {
    console.log('loginFromCli', email, password)
    const supabase = await createSupabaseServerClient();
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

export const loginFromSsr = async (prevState, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });
    const zod = schema.safeParse({ email, password });
    if (zod.error) return { error: zod.error.message }

    if (zod.success) {
        const supabase = await createSupabaseServerClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return { error: error.message };
        }
        revalidatePath('/');
        return { data: 'success' };
    }
};

export const signup = async (prevState, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });
    const zod = schema.safeParse({ email, password });
    if (zod.error) return { error: zod.error.message }

    if (zod.success) {
        const supabase = await createSupabaseServerClient();
        const { error, data } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            return { error: error.message };
        }
        return { data: '¡El usuario ha sido creado con exito!, te va a llegar un link de verificación a tu casilla de correo' };
    }
};

export const logout = async () => {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    return redirect('/');
}