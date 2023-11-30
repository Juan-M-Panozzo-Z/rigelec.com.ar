'use server'
import createSupabaseServerClient from "@/lib/supabase/server";


export const login = async (formData) => {
    const supabase = await createSupabaseServerClient();
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password)
    const res = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (res.error) {
        return res.error;
    }
    console.log(res)
    return;
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
    return;
}