'use server';
import { revalidatePath } from "next/cache";
import createSupabaseServerClient from "../../lib/supabase/server";
import { getUser } from './user'
import { redirect } from "next/navigation";

export const getSelfProjects = async () => {
    const supabase = await createSupabaseServerClient();
    const { id } = await getUser()
    try {
        const { data, error } = await supabase.from('installer_projects').select('*').eq('userId', id)
        if (error) {
            return { error }
        }
        return { data }
    } catch {
        return { error: 'Error fetching projects' }
    }
}


export const getProject = async (projectId) => {
    const supabase = await createSupabaseServerClient();
    const { id } = await getUser()
    try {
        const { data, error } = await supabase.from('installer_projects').select('*').eq('id', projectId).eq('userId', id).single()
        if (error) {
            return { error }
        }
        return { data }
    } catch {
        return { error: 'Error fetching project' }
    }
}

export const setProject = async (project) => {
    const supabase = await createSupabaseServerClient();
    const bucket = supabase.storage.from('installer_projects')
    const { id } = await getUser()

    const name = project.get('name')
    const description = project.get('description')
    const date = project.get('date')
    const image = project.get('image')

    const { data, error } = await supabase.from('installer_projects').insert([
        {
            userId: id,
            name,
            description,
            date
        }])
        .select('id')
    if (error) {
        throw error
    }

    const projectId = data[0].id

    if (image) {
        try {
            const { error: errorImage } = await bucket.upload(`${id}/${projectId}/${image.name}`, image, { upsert: true })
            if (errorImage) {
                return { error: errorImage }
            }
        } catch {
            return { error: 'Error uploading image' }
        }
    }
    redirect(`/dashboard/projects/`)


}