const calculateType = (marketcap: number) => {
    if (marketcap <= 39000) {
        return '/image/pumpwithme/pump-yellow.png';
    }
    if (marketcap <= 69000) {
        return '/image/pumpwithme/pump-green.png';
    }
    return '/image/pumpwithme/pump-orange.png';
}

export { calculateType }