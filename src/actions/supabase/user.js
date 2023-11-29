'use server'
import { supabase } from "@/lib/supabase/action";

export const getUser = async () => {
    const { error, data } = await supabase.auth.getSession();

    if (error) {
        throw error;
    }
    return data;
};