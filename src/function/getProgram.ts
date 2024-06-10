import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { AntsaleContract } from '@/anchor/antsale_contract';
import IDL from '@/anchor/antsale_contract.json';

export const getProgram = (connection: Connection, wallet: any): Program<AntsaleContract> => {
  const provider = new AnchorProvider(connection, wallet, {
    commitment: 'confirmed',
  });

  const program = new Program<AntsaleContract>(
    IDL as AntsaleContract,
    provider
  );

  return program;
};
