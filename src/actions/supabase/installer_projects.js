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

export const setProject = async (prevState, formData) => {
    const supabase = await createSupabaseServerClient();
    const bucket = supabase.storage.from('installer_projects')
    const { id } = await getUser()

    const formRaw = Object.fromEntries(formData)
    const { image, ...form } = formRaw

    const { data, error } = await supabase.from('installer_projects').insert(
        {
            userId: id,
            ...form
        })
        .select('id')
        .single()

    if (error) return { error: error.message }

    const projectId = data?.id
    
    if (image) {
        const { error: errorImage, data } = await bucket.upload(`${id}/${projectId}/${image.name}`, image, { upsert: true })
        if (errorImage) {
            return { error: errorImage }
        }
    }
    redirect(`/dashboard/projects/`)
}

export const updateProject = async (prevState, formData) => {
    const supabase = await createSupabaseServerClient();
    const bucket = supabase.storage.from('installer_projects')
    const { id } = await getUser()

    const formRaw = Object.fromEntries(formData)
    const { image, ...form } = formRaw

    const { data, error } = await supabase.from('installer_projects').update(
        {
            userId: id,
            ...form
        })
        .eq('id', form.id)
        .single()

    if (error) return { error: error.message }

    const projectId = data?.id
    
    if (image) {
        const { error: errorImage } = await bucket.upload(`${id}/${projectId}/${image.name}`, image, { upsert: true })
        if (errorImage) {
            return { error: errorImage }
        }
    }

    redirect(`/dashboard/projects/`)
}