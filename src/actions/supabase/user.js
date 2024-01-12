'use server'
import createSupabaseServerClient from "@/lib/supabase/server";

export const getSession = async () => {
    const supabase = await createSupabaseServerClient();
    const { error, data } = await supabase.auth.getSession();

    if (error) {
        throw error
    }

    return data
};

export const getUser = async () => {
    const supabase = await createSupabaseServerClient();
    const { error, data } = await supabase.auth.getUser();

    if (error) {
        throw error;
    }
    return data.user
};

export const getProfile = async () => {
    const supabase = await createSupabaseServerClient();
    const { data: user } = await supabase.auth.getUser()
    const userId = user?.user?.id
    const { data, error } = await supabase.from('installer_profiles').select('*').eq('userId', userId).single()
    if (error) {
        return { error }
    }
    return { data }
}

export const setProfile = async (profile) => {
    const supabase = await createSupabaseServerClient();
    const { data: user } = await supabase.auth.getUser()
    const userId = user?.user?.id
    const getProfile = await supabase.from('installer_profiles').select('*').eq('userId', userId).single()
    if (getProfile.data) {
        const { error } = await supabase.from('installer_profiles').update({
            ...profile,
            updated_at: new Date()
        }).eq('userId', userId)
        if (error) {
            throw error
        }
        return true
    } else {
        const { error } = await supabase.from('installer_profiles').insert(profile)
        if (error) {
            throw error
        }
        return true
    }
}