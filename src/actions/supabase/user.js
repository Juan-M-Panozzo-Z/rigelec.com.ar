'use server'
import createSupabaseServerClient from "../../lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export const getAvatar = async () => {
    const supabase = await createSupabaseServerClient();
    const { data: user } = await supabase.auth.getUser()
    const userId = user?.user?.id
    const { data, error } = await supabase.storage.from('installer_profiles_avatars').getPublicUrl(`${userId}/avatar`)
    if (error) {
        return error
    }
    return data.publicUrl
}

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

export const setProfile = async (form) => {

    const supabase = await createSupabaseServerClient();
    const { data: user } = await supabase.auth.getUser()
    const userId = user?.user?.id
    const avatar = form.get('avatar')
    const profile = {
        userId,
        typeId: form.get('type'),
        name: form.get('name'),
        address: form.get('address'),
        locality: form.get('locality'),
        province: form.get('province'),
    }
    const cuit = form.get('cuit')
    if (cuit) {
        profile.cuit = cuit
    }
    const { error } = await supabase.storage.from('installer_profiles_avatars').upload(`${userId}/avatar`, avatar, { upsert: true })

    if (error) {
        return error
    } else {
        const getProfile = await supabase.from('installer_profiles').select('*').eq('userId', userId).single()
        if (getProfile.data) {
            const { error } = await supabase.from('installer_profiles').update({
                ...profile,
                updated_at: new Date()
            }).eq('userId', userId)
            if (error) {
                return error
            }

            revalidatePath('/dashboard')
            return redirect('/dashboard')

        } else {
            const { error } = await supabase.from('installer_profiles').insert(profile)
            if (error) {
                return error
            }

            revalidatePath('/dashboard')
            return redirect('/dashboard')
        }
    }
}