import * as splToken from '@solana/spl-token';
import { Connection, PublicKey } from '@solana/web3.js';
import { ShyftSdk, Network } from '@shyft-to/js';

const getTokenData = async (
  wallet: string,
  tokenAddress: string,
  isMainnet: boolean
) => {
  try {
    const shyft = new ShyftSdk({
      apiKey: process.env.NEXT_PUBLIC_SHYFT_XAPI_KEY!,
      network: isMainnet ? Network.Mainnet : Network.Devnet,
    });

    const res: any = await shyft.wallet.getTokenBalance({
      wallet: wallet,
      token: tokenAddress,
    });

    return {
      name: res?.info?.name,
      symbol: res?.info?.symbol,
      decimals: Number(res?.info?.decimals),
      balance: Number(res?.balance),
      supply: Number(res?.balance),
    };
  } catch (err) {
    console.error('Error: ', err);

    return {};
  }
};

export { getTokenData };
