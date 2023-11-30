'use server'
import createSupabaseServerClient from "@/lib/supabase/server";


export const getSession = async () => {
    const supabase = createSupabaseServerClient();
    const { error, data } = await (await supabase).auth.getSession();

    if (error) {
        throw error
    }

    return data
};

export const getUser = async () => {
    const supabase = createSupabaseServerClient();
    const { error, data } = await supabase.auth.getUser();

    if (error) {
        throw error;
    }
    return data;
};