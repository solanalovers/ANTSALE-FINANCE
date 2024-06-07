import { supabase } from "@/function/supabaseClients"

const checkWhitelist = async (publicKey: string) => {
    const {data,error} = await supabase.from('whitelit').select('*').eq('publicKey',publicKey);
    if(!error) {
        return data;
    }
}