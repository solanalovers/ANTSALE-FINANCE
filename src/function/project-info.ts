import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { Program, Provider } from "@coral-xyz/anchor";
import { AntsaleContract } from "@/anchor/antsale_contract";
import idl from '@/anchor/antsale_contract.json'
import bs58 from "bs58";

export enum ProjectType {
    Presale = 'Presale',
    FairLaunch = 'FairLaunch',
}

export const getProjectInfoData = async (projectType: ProjectType, projectId: String, hardCap: number, isMainnet?: boolean) => {
    const connection = new Connection(
        isMainnet
            ? process.env.NEXT_PUBLIC_HELIUS_RPC_MAINNET!
            : process.env.NEXT_PUBLIC_HELIUS_RPC_DEVNET!
    );
    const provider: Provider = {
        connection: connection
    }
    const program = new Program<AntsaleContract>(idl as AntsaleContract, provider)

    const byteArray = Buffer.from(projectId, 'hex');

    const shortId = byteArray.toString('base64').replace(/=+$/, '')

    if (projectType === 'Presale') {
        const [poolPda] = PublicKey.findProgramAddressSync([Buffer.from('presale'), Buffer.from(shortId)], program.programId)

        const poolPdaData = await program.account.presaleCounter.fetch(poolPda)

        // console.log("Remaining: ", poolPdaData.remaining)

        // console.log('Total raised = Hard cap - remaining')

        return { poolAddress: poolPda, totalRaised: hardCap - poolPdaData.remaining}
    } else {
        const [poolPda] = PublicKey.findProgramAddressSync([Buffer.from('fair_launch'), Buffer.from(shortId)], program.programId)

        const poolPdaData = await program.account.fairLaunchCounter.fetch(poolPda)

        // console.log("Total raised: ", poolPdaData.totalAmount)
        return { poolAddress: poolPda, totalRaised: poolPdaData.totalAmount}

    }

}