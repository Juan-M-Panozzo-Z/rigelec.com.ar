'use server'
import { supabase } from "@/lib/supabase/server";

export const login = async (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw error;
    }
    console.log(data);
    return data;
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
    const { error, data } = await supabase.auth.signOut()

    if (error) {
        throw error;
    }
    console.log('logout success');
};