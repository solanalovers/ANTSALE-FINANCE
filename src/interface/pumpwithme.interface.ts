
export interface PumpItemInterface {
    name: string;
    rank: string;
    symbol: string;
    author: {
        image: string;
        name: string;
    },
    image: string;
    marketCap: number;
    progress: number;
    description: string;
    createdAt: string;
}

export enum TradeType {
    buy = "Buy",
    sell = "Sell"
}

export interface PumpTradeItemInterface {
    account: {
        name: string;
        image: string;
    },
    type: TradeType,
    priceAmount: number,
    amount: string,
    date: Date | string,
    transaction: string
}