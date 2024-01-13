import createSupabaseClient from "../../../lib/supabase/client";

export const getSession = async () => {
    const supabase = await createSupabaseClient();
    const { error, data } = await supabase.auth.getSession();

    if (error) {
        throw error
    }

    return data
};

export const getUser = async () => {
    const supabase = await createSupabaseClient();
    const { error, data } = await supabase.auth.getUser();

    if (error) {
        throw error;
    }
    return data.user
};

export const setProfile = async (profile) => {
    const supabase = await createSupabaseClient();
    const { error, data } = await supabase.auth.updateUser({ data: profile });
    if (error) {
        throw error;
    }
    return data;
}