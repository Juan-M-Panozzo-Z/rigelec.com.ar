'use server'
import createSupabaseServerClient from "../../lib/supabase/server";
import { getUser } from './user'

export const getProjectImages = async () => {
    const supabase = await createSupabaseServerClient();
    const bucket = supabase.storage.from('installer_projects')
    const { id } = await getUser()

    try {
        const { data, error } = await bucket.list(`${id}/`)
        if (error) {
            return { error }
        }
        return { data }
    } catch {
        return { error: 'Error fetching images' }
    }
}