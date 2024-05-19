import { DateValue } from '@nextui-org/react';

export type Project = {
  projectType?: ProjectType;
  tokenAddress?: string;
  tokenInfo?: TokenInfor;
  currency: 'SOL';
  feeOption: number;
  listingOption: ListingOption;
  saleType: SaleType;
  totalSellingAmount?: number;
  softCap?: number;
  hardCap?: number;
  minBuy?: number;
  isMaxBuy?: boolean;
  maxBuy?: number;
  router?: Router;
  liquidityPercent?: number;
  startTime: DateValue;
  endTime: DateValue;
  liquidityType: LiquidityType;
  liquidityLockupTime?: number;
  image: string;
  backgroundImage: string;
  description?: string;
  website?: string;
  tokenMetric?: Array<TokenSomething>;
  socials?: Social;
  presaleRate?: number;
  listingRate?: number;
  refundType: RefundType;
};

export enum ProjectType {
  Presale = 'Presale',
  FairLaunch = 'Fairlaunch',
}

export enum ListingOption {
  AutoListing = 'Auto Listing',
  ManualListing = 'Manual Listing',
}

export enum SaleType {
  Public = 'Public',
  Private = 'Private',
}

export enum Router {
  Rayidum = 'RaydiumAmmv4',
}

export enum LiquidityType {
  AutoLocking = 'Auto Locking',
  AutoBurning = 'Auto Burning',
}

export type TokenSomething = {
  title: string;
  percent: number;
  color: string;
};

export type Social = {
  Telegram?: string;
  Discord?: string;
  Reddit?: string;
  Youtube?: string;
  Instagram?: string;
  Github?: string;
  Twitter?: string;
  Facebook?: string;
};

export type TokenInfor = {
  name: string;
  decimals: number;
  symbol: string;
  supply: number;
  balance: number;
};

export enum RefundType {
  Refund = 'Refund',
  Burn = 'Burn',
}
