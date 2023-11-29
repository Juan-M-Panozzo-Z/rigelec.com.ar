'use server'
import { supabase } from "@/lib/supabase/action";

export const getSession = async (req) => {
    const { error, data } = await supabase.auth.getSession()

    if (error) {
        throw error
    }

    return data
};

export const getUser = async () => {
    const { error, data } = await supabase.auth.getUser();

    if (error) {
        throw error;
    }
    return data;
};