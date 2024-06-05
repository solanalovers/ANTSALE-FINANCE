import { supabase } from "@/function/supabaseClients"
import { Project } from "@/interface/project-interface";

const getListProject = async () => {
    const { data, error } = await supabase.from('project').select('*');
    if (error) {
        console.log(error)
    } else {
        return data;
    }
}

const getProjectDetail = async (id: string) => {
    const { data, error } = await supabase.from('project').select('*').eq('id', id);
    if (error) {
        console.log(error)
    } else {
        return data[0];
    }
}

export { getListProject, getProjectDetail };