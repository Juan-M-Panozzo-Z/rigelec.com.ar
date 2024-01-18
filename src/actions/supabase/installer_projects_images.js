'use server'
import createSupabaseServerClient from "../../lib/supabase/server";
import { getUser } from './user'

export const getProjectImages = async (projectId) => {
    const supabase = await createSupabaseServerClient();
    const bucket = supabase.storage.from('installer_projects')
    const { id } = await getUser()

    try {
        const { data, error } = await bucket.list(`${id}/${projectId}`)
        if (error) {
            return { error }
        }

        const images = data.map(image => {
            const { data: { publicUrl } } = bucket.getPublicUrl(`${id}/${projectId}/${image.name}`)
            return publicUrl
        })

        return { data: images }

    } catch {
        return { error: 'Error fetching images' }
    }
}