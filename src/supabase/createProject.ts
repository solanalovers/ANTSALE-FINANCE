import {supabase} from '@/function/supabaseClients';
import {Project} from '@/interface/project-interface';
import {WalletContextState} from "@solana/wallet-adapter-react";
import {getProgram} from "@/function/getProgram";
import {Connection, PublicKey, Transaction} from "@solana/web3.js";
import {
    createAssociatedTokenAccountInstruction, createSetAuthorityInstruction,
    getAccount,
    getAssociatedTokenAddressSync, getMint,
    TOKEN_PROGRAM_ID
} from "@solana/spl-token";
import {AnchorProvider, BN, getProvider, IdlTypes, Program, setProvider, workspace,} from '@coral-xyz/anchor';
import {AntsaleContract} from "@/anchor/antsale_contract";

type FairLaunchConfig = IdlTypes<AntsaleContract>['fairLaunchConfig']

export const createProject = async (project: Project, isMainnet: boolean, wallet: WalletContextState) => {
    try {
        const parsedProject: any = {...project};
        parsedProject.startTime = project.startTime.toDate('UTC');
        parsedProject.endTime = project.endTime.toDate('UTC');

        const {data, error} = await supabase.from('project').insert(parsedProject).select("*");

        if (error || data?.length === 0) {
            console.log('Insert database error: ', error)
            return error;
        }

        const connection = new Connection(
            isMainnet
                ? process.env.NEXT_PUBLIC_HELIUS_RPC_MAINNET!
                : process.env.NEXT_PUBLIC_HELIUS_RPC_DEVNET!
        );

        const program = getProgram(connection, wallet)
        const mint = new PublicKey(project.tokenAddress!)
        const mintData = await getMint(connection, mint);

        if (wallet.publicKey instanceof PublicKey) {
            const fromAta = getAssociatedTokenAddressSync(mint, wallet.publicKey)
            const vaultAddress = new PublicKey(process.env.NEXT_PUBLIC_DESTINATION!)

            const vaultAta = getAssociatedTokenAddressSync(mint, vaultAddress)

            const fairLaunchConfig: FairLaunchConfig = {
                feeOption: project.feeOption,
                listingOption: {
                    autoListing: {}
                },
                saleType: {
                    public: {}
                },
                totalSellingAmount: project.totalSellingAmount!,
                softCap: project.softCap!,
                hardCap: project.hardCap ? project.hardCap : null,
                router: {
                    raydium: {}
                },
                liquidityPercent: project.liquidityPercent!,
                startTime: new BN(parsedProject.startTime.getTime()),
                endTime: new BN(parsedProject.endTime.getTime()),
                liquidityType: {
                    autoLocking: {}
                },
                liquidityLockupTime: project.liquidityLockupTime!
            }

            const createFairLaunchIns = await program.methods.createFairLaunch(data[0].id.toString(), fairLaunchConfig).accounts({
                creator: wallet.publicKey,
                mint: mint,
                fromAta: fromAta,
                vaultAta: vaultAta,
                tokenProgram: TOKEN_PROGRAM_ID
            }).instruction()

            const tx = new Transaction()
            const vaultAtaData = await connection.getAccountInfo(vaultAta)

            if (!vaultAtaData) {
                tx.add(createAssociatedTokenAccountInstruction(
                    wallet.publicKey,
                    vaultAta,
                    vaultAddress,
                    mint
                ))
            }

            if (mintData.mintAuthority) {
                tx.add(createSetAuthorityInstruction(mint, wallet.publicKey, 0, null, []))
            }

            if (mintData.freezeAuthority) {
                tx.add(createSetAuthorityInstruction(mint, wallet.publicKey, 1, null, []))
            }

            tx.add(createFairLaunchIns);

            tx.feePayer = wallet.publicKey;
            tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash

            const sig = await wallet.sendTransaction(tx, connection, {
                skipPreflight: true
            })

            console.log(
                "Transaction sig: ", sig
            )
        }


    } catch (error) {
        return error;
    }
};
