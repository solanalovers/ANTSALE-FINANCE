import {Project} from "@/interface/project-interface";
import {WalletContextState} from "@solana/wallet-adapter-react";
import {Connection, LAMPORTS_PER_SOL, PublicKey, Transaction, TransactionInstruction} from "@solana/web3.js";
import {getProgram} from "@/function/getProgram";
import {BN} from "@coral-xyz/anchor";
import {toast} from "react-toastify";
import {DetailData} from "@/app/[locale]/detail/[slug]/page";

export const invest = async (project: DetailData, isMainnet: boolean, wallet: WalletContextState, amount: number) => {
    try {
        const connection = new Connection(
            isMainnet
                ? process.env.NEXT_PUBLIC_HELIUS_RPC_MAINNET!
                : process.env.NEXT_PUBLIC_HELIUS_RPC_DEVNET!
        );


        const program = getProgram(connection, wallet)

        const byteArray = Buffer.from(project.id, 'hex');

        const shortId = byteArray.toString('base64').replace(/=+$/, '')

        const vaultAddress = new PublicKey(process.env.NEXT_PUBLIC_DESTINATION!)

        if (wallet.publicKey) {
            const tx = new Transaction()
            let investIns: TransactionInstruction;

            if (project.projectType === 'FairLaunch') {
                investIns = await program.methods.investFairLaunch(shortId, new BN(amount * LAMPORTS_PER_SOL)).accounts({
                    investor: wallet.publicKey,
                    vault: vaultAddress
                }).instruction()
                tx.add(investIns)
            } else if (project.projectType === 'Presale') {
                investIns = await program.methods.investPresale(shortId, new BN(amount * LAMPORTS_PER_SOL)).accounts({
                    investor: wallet.publicKey,
                    vault: vaultAddress
                }).instruction()
                tx.add(investIns)
            }

            tx.feePayer = wallet.publicKey;
            tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash

            const sig = await wallet.sendTransaction(tx, connection, {
                skipPreflight: true
            })

            toast(`Buy Success`, {
                position: "top-center",
                theme: "colored",
                type: "success",
            });

            console.log(
                "Transaction sig: ", sig
            )
        }
    } catch (e) {
        console.log('Error: ', e)
        toast(JSON.stringify(e), {
            position: "top-center",
            theme: "colored",
            type: "error",
        });
    }


}