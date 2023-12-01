'use server';

import createSupabaseServerClient from "@/lib/supabase/server";

export const getTypes = async () => {
    const supabase = await createSupabaseServerClient();
    const { error, data } = await supabase.from('installer_types').select('*')
    if (error) {
        return { error }
    } else {
        return data
    }
}

export const getTypeById = async (id) => {
    const supabase = await createSupabaseServerClient();
    const { error, data } = await supabase.from('installer_types').select('*').eq('id', id).single()
    if (error) {
        return { error }
    } else {
        return data
    }
}