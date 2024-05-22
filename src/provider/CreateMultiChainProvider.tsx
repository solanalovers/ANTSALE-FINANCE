"use client";
import {
  ListingOption,
  PriceModel,
  RefundType,
  SaleType,
  TokenInfo,
} from "@/interface/project-interface";
import { DateValue } from "@nextui-org/react";
import React, { createContext, useState } from "react";
import { now } from "@internationalized/date";

export const CreateMultiChainContext = createContext<any>({});

interface multichainFormInterface {
  fee: number;
  listingOption: ListingOption;
  priceModel: PriceModel;
  poolList?: Array<{ amount: number; price: number }>;
  tokenInfo?: TokenInfo;
  multiWallet?: { [key: string]: string }[];
  saleType: SaleType;
  startTime: DateValue;
  endTime: DateValue;
  refundType: RefundType;
}

export default function CreateMultiChainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createMultiChainForm, setCreateMultiChainForm] =
    useState<multichainFormInterface>({
      listingOption: ListingOption.ManualListing,
      priceModel: PriceModel.fixedPrice,
      fee: 5,
      multiWallet: [],
      startTime: now("UTC"),
      endTime: now("UTC"),
      refundType: RefundType.Refund,
      saleType: SaleType.Public,
    });

  return (
    <CreateMultiChainContext.Provider
      value={{ createMultiChainForm, setCreateMultiChainForm }}
    >
      {children}
    </CreateMultiChainContext.Provider>
  );
}
