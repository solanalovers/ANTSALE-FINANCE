const networkImage = {
  solana: '/image/network/solana.png'
}

const currencyList = [
  {
    image: "eth",
    name: "Ethereum (ETH)",
  },
  {
    image: "bnb",
    name: "BNB Chain (BNB)",
  },
  {
    image: "sol",
    name: "Solona (SOL)",
  },
  {
    image: "base",
    name: "Base (BASE)",
  },
  {
    image: "polygon",
    name: "Polygon (MATIC)",
  },
  {
    image: "avax",
    name: "Avalanche (AVAX)",
  },
  {
    image: "ton",
    name: "Toncoin (TON)",
  },
  {
    image: "arb",
    name: "Arbitrum (ARB)",
  },
  {
    image: "trx",
    name: "TRON (TRX)",
  },
];

const currencyShortName: any = {
  eth: "Ethereum",
  bnb: "BNB Chain",
  sol: "Solona",
  base: "Base",
  polygon: "Polygon",
  avax: "Avalanche",
  ton: "Toncoin",
  arb: "Arbitrum",
  trx: "TRON",
  usdt: "USDT"
}

const clusterList = [
  {
    name: 'sol-devnet',
    logo: '/image/multi-chain/sol.png',
    label: 'SOLANA Devnet'
  },
  {
    name: 'sol-mainnet',
    logo: '/image/multi-chain/sol.png',
    label: 'SOLANA Mainnet'
  },
  {
    name: 'ton-devnet',
    logo: '/image/multi-chain/ton.png',
    label: 'TON Devnet'
  },
  {
    name: 'ton-mainnet',
    logo: '/image/multi-chain/ton.png',
    label: 'TON Mainnet'
  }
]
export { networkImage, currencyList, currencyShortName, clusterList }