import { supabase } from '@/function/supabaseClients';
import { Project } from '@/interface/project-interface';

export const createProject = async (project: Project) => {
  try {
    const parsedProject: any = { ...project };
    parsedProject.startTime = project.startTime.toDate('UTC');
    parsedProject.endTime = project.endTime.toDate('UTC');

    const { error } = await supabase.from('project').insert(parsedProject);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.log('Insert database error: ', error);
    return null;
  }
};
