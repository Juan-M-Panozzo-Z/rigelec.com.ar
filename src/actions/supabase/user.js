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
    const { data, error } = supabase.storage.from('installer_profiles_avatars').getPublicUrl(`${userId}/avatar`)
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

export const setProfile = async (prevState, formData) => {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user?.id

    const formRaw = Object.fromEntries(formData)
    const { avatar, cuit, ...profile } = formRaw

    if (avatar.size > 4 * 1024 * 1024) return { error: 'El tamaño de la imagen es demasiado grande' }

    const { error: fileError } = await supabase.storage.from('installer_profiles_avatars').upload(`${userId}/avatar`, avatar, { upsert: true })

    if (fileError) return { error: fileError.message }

    const { error } = await supabase.from('installer_profiles').upsert({
        ...profile,
        userId,
        cuit,
        updated_at: new Date()
    }, { onConflict: ['userId'] })

    if (error) return { error: error.message }

    revalidatePath('/dashboard')
    redirect('/dashboard')

}