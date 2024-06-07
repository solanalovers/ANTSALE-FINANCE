import { supabase } from "@/function/supabaseClients"
import { PublicKey } from "@solana/web3.js";

const checkWhitelist = async (publicKey: PublicKey) => {
    const { data, error } = await supabase.from('whitelist').select('*').eq('publicKey', publicKey.toString());
    if (!error) {
        return data;
    }
}

export { checkWhitelist }