'use server'
import { supabase } from "@/lib/supabase/server"

export const getTest = async () => {
    const { error, data } = await supabase.from('test').select('*')

    if (error) {
        throw error
    }
    return data
}
