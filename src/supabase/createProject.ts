import {supabase} from '@/function/supabaseClients';
import {Project, ProjectType} from '@/interface/project-interface';
import {WalletContextState} from "@solana/wallet-adapter-react";
import {getProgram} from "@/function/getProgram";
import {Connection, PublicKey, Transaction} from "@solana/web3.js";
import {v4} from 'uuid';
import {
    createAssociatedTokenAccountInstruction,
    createSetAuthorityInstruction,
    getAssociatedTokenAddressSync,
    getMint, TOKEN_PROGRAM_ID
} from "@solana/spl-token";
import {BN, IdlTypes,} from '@coral-xyz/anchor';
import {AntsaleContract} from "@/anchor/antsale_contract";

type FairLaunchConfig = IdlTypes<AntsaleContract>['fairLaunchConfig']
type PresaleConfig = IdlTypes<AntsaleContract>['presaleConfig']

export const createProject = async (project: Project, isMainnet: boolean, wallet: WalletContextState) => {
    try {
        const parsedProject: any = {...project};
        parsedProject.startTime = project.startTime.toDate('UTC');
        parsedProject.endTime = project.endTime.toDate('UTC');

        const connection = new Connection(
            isMainnet
                ? process.env.NEXT_PUBLIC_HELIUS_RPC_MAINNET!
                : process.env.NEXT_PUBLIC_HELIUS_RPC_DEVNET!
        );

        const program = getProgram(connection, wallet)
        const mint = new PublicKey(project.tokenAddress!)
        const mintData = await getMint(connection, mint);

        if (wallet.publicKey) {
            const fromAta = getAssociatedTokenAddressSync(mint, wallet.publicKey)
            const vaultAddress = new PublicKey(process.env.NEXT_PUBLIC_DESTINATION!)

            const vaultAta = getAssociatedTokenAddressSync(mint, vaultAddress)
            const [vaultPda] = PublicKey.findProgramAddressSync([Buffer.from("vault")], program.programId)
            const vaultPdaAta = getAssociatedTokenAddressSync(mint, vaultPda, true);

            const tx = new Transaction()
            const vaultAtaData = await connection.getAccountInfo(vaultAta)
            const vaultPdaAtaData = await connection.getAccountInfo((vaultPdaAta))

            if (!vaultAtaData) {
                tx.add(createAssociatedTokenAccountInstruction(
                    wallet.publicKey,
                    vaultAta,
                    vaultAddress,
                    mint
                ))
            }

            if (!vaultPdaAtaData) {
                tx.add(createAssociatedTokenAccountInstruction(
                    wallet.publicKey,
                    vaultPdaAta,
                    vaultPda,
                    mint
                ))
            }

            if (mintData.mintAuthority) {
                tx.add(createSetAuthorityInstruction(mint, wallet.publicKey, 0, null, []))
            }

            if (mintData.freezeAuthority) {
                tx.add(createSetAuthorityInstruction(mint, wallet.publicKey, 1, null, []))
            }

            const {id, shortId} = generateShortUUID()

            if (project.projectType === ProjectType.FairLaunch) {
                const fairLaunchConfig: FairLaunchConfig = {
                    feeOption: project.feeOption,
                    listingOption: {
                        autoListing: {}
                    },
                    saleType: {
                        public: {}
                    },
                    totalSellingAmount: parseFloat(project?.totalSellingAmount?.toString()?.replace(/,/g, "")!),
                    softCap: project.softCap!,
                    maxBuy: null,
                    router: {
                        raydium: {}
                    },
                    liquidityPercent: project.liquidityPercent!,
                    startTime: new BN(Math.floor(parsedProject.startTime.getTime() / 1000)),
                    endTime: new BN(Math.floor(parsedProject.endTime.getTime() / 1000)),
                    liquidityType: {
                        autoLocking: {}
                    },
                    liquidityLockupTime: project.liquidityLockupTime!
                }
                const createFairLaunchIns = await program.methods.createFairLaunch(shortId, fairLaunchConfig).accounts({
                    creator: wallet.publicKey,
                    mint: mint,
                    fromAta: fromAta,
                    vaultPdaAta: vaultPdaAta,
                    tokenProgram: TOKEN_PROGRAM_ID
                }).instruction()
                tx.add(createFairLaunchIns);
                parsedProject.totalSellingAmount = parseFloat(project?.totalSellingAmount?.toString()?.replace(/,/g, "")!) || 0;
                delete parsedProject.isMaxBuy;
            } else if (project.projectType === ProjectType.Presale) {
                const isAuto = project.listingOption === 'Auto Listing'

                const presaleConfig: PresaleConfig = {
                    feeOption: project.feeOption,
                    listingOption: {
                        autoListing: {},
                    },
                    saleType: {
                        public: {}
                    },
                    presaleRate: project.presaleRate!,
                    listingRate: isAuto ? project.listingRate! : 0,
                    softCap: project.softCap!,
                    hardCap: project.hardCap!,
                    minBuy: project.minBuy!,
                    maxBuy: project.maxBuy!,
                    router: {
                        raydium: {}
                    },
                    liquidityPercent: isAuto ? project.liquidityPercent! : 0,
                    startTime: new BN(Math.floor(parsedProject.startTime.getTime() / 1000)),
                    endTime: new BN(Math.floor(parsedProject.endTime.getTime() / 1000)),
                    liquidityType: {
                        autoLocking: {}
                    },
                    liquidityLockupTime: isAuto ? project.liquidityLockupTime! : 0,
                    refundType: {
                        refund: {}
                    }
                }

                const createPresaleIns = await program.methods.createPresale(shortId, presaleConfig).accounts({
                    creator: wallet.publicKey,
                    mint: mint,
                    fromAta: fromAta,
                    vaultPdaAta: vaultPdaAta,
                    tokenProgram: TOKEN_PROGRAM_ID
                }).instruction()
                tx.add(createPresaleIns)
            }

            tx.feePayer = wallet.publicKey;
            tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
            const sig = await wallet.sendTransaction(tx, connection)

            console.log(
                "Transaction sig: ", sig
            )

            const {data, error} = await supabase.from('project').insert({...parsedProject, id: id}).select("*");

            if (error || data?.length === 0) {
                console.log('Insert database error: ', error)
                return error;
            }
        }


    } catch (error) {
        return error;
    }
};

export function generateShortUUID() {
    const uuid = v4();

    const byteArray = Buffer.from(uuid, 'hex');

    return {id: uuid, shortId: byteArray.toString('base64').replace(/=+$/, ''),};
}