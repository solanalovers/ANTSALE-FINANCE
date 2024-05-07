import * as splToken from '@solana/spl-token'
import { Connection, PublicKey } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js';
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";


const getTokenData = async (address: string) => {
    const connection = new Connection(process.env.NEXT_PUBLIC_HELIUS_RPC_DEVNET || '');

    const mintAddress = new PublicKey(address);

    try {
        const mintInfo = await splToken.getMint(connection, mintAddress);

        const metaplex = Metaplex.make(connection);
        const metadataPda = metaplex.nfts().pdas().metadata({ mint: mintAddress });
        const account = await Metadata.fromAccountAddress(connection, metadataPda);
        console.log(mintInfo)
        return { supply: mintInfo.supply, decimals: mintInfo.decimals, ...account.data }
    } catch (err) {
        console.error("Error: ", err);
    }
}

export { getTokenData }