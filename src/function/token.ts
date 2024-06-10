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

    const res1 = await shyft.token.getInfo({
      tokenAddress: tokenAddress,
    });

    console.log(res, res1);

    return {
      name: res?.info?.name,
      symbol: res?.info?.symbol,
      decimals: Number(res?.info?.decimals),
      balance: Number(res?.balance),
      supply: Number(res1?.current_supply),
    };
  } catch (err) {
    console.error('Error: ', err);

    return {};
  }
};

export { getTokenData };
