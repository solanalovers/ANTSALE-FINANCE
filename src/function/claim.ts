import {Connection, LAMPORTS_PER_SOL, PublicKey, Transaction} from "@solana/web3.js";
import {WalletContextState} from "@solana/wallet-adapter-react";
import * as bs58 from "bs58";
import {getProgram} from "../function/getProgram";
import idl from '../anchor/antsale_contract.json'
import {DetailData} from "@/app/[locale]/detail/[slug]/page";
import {
    createAssociatedTokenAccountInstruction,
    getAssociatedTokenAddressSync,
    TOKEN_PROGRAM_ID
} from "@solana/spl-token";
import {toast} from "react-toastify";

export const fetchClaimable = async (projectId: any, isMainnet: boolean, wallet: WalletContextState) => {
    try {
        const byteArray = Buffer.from(projectId, 'hex');

        const shortId = byteArray.toString('base64').replace(/=+$/, '')

        const connection = new Connection(
            isMainnet
                ? process.env.NEXT_PUBLIC_HELIUS_RPC_MAINNET!
                : process.env.NEXT_PUBLIC_HELIUS_RPC_DEVNET!
        );

        const program = getProgram(connection, wallet)

        const [accounts] = await Promise.all([connection.getProgramAccounts(program.programId, {
            dataSlice: {
                offset: 0,
                length: 0
            },
            filters: [
                {
                    memcmp: {
                        offset: 0,
                        // @ts-ignore
                        bytes: bs58.encode(idl.accounts.find((obj: any) => obj.name === 'InvestorCounter').discriminator)
                    }
                },
                {
                    memcmp: {
                        offset: 12,
                        bytes: bs58.encode(Buffer.from(shortId))
                    }
                }
            ],
        })])


        let totalPurchased = 0
        let isClaimable = false

        if (wallet.publicKey) {
            const [investorCounter] = PublicKey.findProgramAddressSync([Buffer.from('invest_counter'), Buffer.from(shortId), wallet.publicKey?.toBuffer()], program.programId)
            const investorCounterData = await program.account.investorCounter.fetch(investorCounter)
            totalPurchased = investorCounterData.totalInvestedAmount.toNumber() / LAMPORTS_PER_SOL

            const [claimRecord] = PublicKey.findProgramAddressSync([Buffer.from('claimed'), Buffer.from(shortId), wallet.publicKey?.toBuffer()], program.programId)
            const claimRecordData = await connection.getAccountInfo(claimRecord)

            if (!claimRecordData && totalPurchased) {
                isClaimable = true
            }
        }

        return {
            totalContributor: accounts.length,
            purchased: totalPurchased,
            isClaimable: isClaimable
        }

    } catch (e) {
        console.log(e)
        return {
            purchased: 0,
            totalContributor: 0,
            isClaimable: false
        }
    }

}

export const claim = async (project: DetailData, isMainnet: boolean, wallet: WalletContextState) => {
    const connection = new Connection(
        isMainnet
            ? process.env.NEXT_PUBLIC_HELIUS_RPC_MAINNET!
            : process.env.NEXT_PUBLIC_HELIUS_RPC_DEVNET!
    );

    const program = getProgram(connection, wallet)

    const byteArray = Buffer.from(String(project.id), 'hex');

    const shortId = byteArray.toString('base64').replace(/=+$/, '')

    if (wallet.publicKey) {
        const [investorCounter] = PublicKey.findProgramAddressSync([Buffer.from('invest_counter'), Buffer.from(shortId), wallet.publicKey?.toBuffer()], program.programId)
        const investorCounterData = await program.account.investorCounter.fetch(investorCounter)

        const mint = new PublicKey(project?.tokenAddress!)

        const [vaultPda] = PublicKey.findProgramAddressSync([Buffer.from("vault")], program.programId)
        const vaultPdaAta = getAssociatedTokenAddressSync(mint, vaultPda, true);

        const toAta = getAssociatedTokenAddressSync(mint, wallet.publicKey)
        const toAtaData = await connection.getAccountInfo(toAta)


        const claimTxn = new Transaction()

        if (!toAtaData) {
            claimTxn.add(createAssociatedTokenAccountInstruction(
                wallet.publicKey,
                toAta,
                wallet.publicKey,
                mint
            ))
        }

        if (project.projectType === 'FairLaunch') {
            const claimIns = await program.methods.claimFairLaunch(shortId).accounts({
                investor: wallet.publicKey,
                mint: mint,
                vaultPdaAta: vaultPdaAta,
                toAta: toAta,
                tokenProgram: TOKEN_PROGRAM_ID
            }).instruction()

            claimTxn.add(claimIns)
        } else if (project.projectType === 'Presale') {
            const claimIns = await program.methods.claimPresale(shortId).accounts({
                investor: wallet.publicKey,
                mint: mint,
                vaultPda: vaultPda,
                vaultPdaAta: vaultPdaAta,
                toAta: toAta,
                tokenProgram: TOKEN_PROGRAM_ID
            }).instruction()

            claimTxn.add(claimIns)
        }


        claimTxn.feePayer = wallet.publicKey;
        claimTxn.recentBlockhash = (await connection.getLatestBlockhash()).blockhash

        const sig = await wallet.sendTransaction(claimTxn, connection, {
            skipPreflight: true
        })

        toast(`Claim Success`, {
            position: "top-center",
            theme: "colored",
            type: "success",
        });

        console.log(
            "Transaction sig: ", sig
        )
    }

}