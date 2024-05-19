
export interface PumpItemInterface {
    name: string;
    rank: string;
    symbol: string;
    author:{
        image: string;
        name: string;
    },
    image: string;
    marketCap: number;
    progress: number;
    description: string;
    createdAt: string;
}