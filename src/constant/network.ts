const networkImage = {
  solana: '/image/multi-chain/sol.png'
}

const currencyList = [
  {
    image: "eth",
    name: "Ethereum (ETH)",
    shortName: "Ethereum",
    symbol: "ETH"
  },
  {
    image: "bnb",
    name: "BNB Chain (BNB)",
    shortName: "BNB Chain",
    symbol: "BNB"
  },
  {
    image: "sol",
    name: "Solona (SOL)",
    shortName: "Solona",
    symbol: "SOL"
  },
  {
    image: "base",
    name: "Base (BASE)",
    shortName: "Base",
    symbol: "BASE"
  },
  {
    image: "polygon",
    name: "Polygon (MATIC)",
    shortName: "Polygon",
    symbol: "MATIC"
  },
  {
    image: "avax",
    name: "Avalanche (AVAX)",
    shortName: "Avalanche",
    symbol: "AVAX"
  },
  {
    image: "ton",
    name: "Toncoin (TON)",
    shortName: "Toncoin",
    symbol: "TON"
  },
  {
    image: "arb",
    name: "Arbitrum (ARB)",
    shortName: "Arbitrum",
    symbol: "ARB"
  },
  {
    image: "trx",
    name: "TRON (TRX)",
    shortName: "TRON",
    symbol: "TRX"
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