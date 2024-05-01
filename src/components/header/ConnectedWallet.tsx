"use client";
import { AppContext } from "@/provider/AppProvider";
import React, { useContext, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Image } from "@nextui-org/react";

export default function ConnectedWallet({ address }: { address: string }) {
  const walletName = localStorage.getItem("walletName")?.split('"')[1];
  const { balance } = useContext(AppContext);
  const { disconnect } = useWallet();

  return (
    <div className="flex px-3 py-1 gap-x-4 items-center rounded-lg border border-[#11111126]">
      <div className="flex gap-x-3 items-center">
        <Image
          src={`/image/wallet/${walletName}.png`}
          width={"26px"}
          height={"26px"}
        />
        <div>
          <p className="text-xs leading-5">
            {address.slice(0, 4)}...{address.slice(-4)}
          </p>
          <p className="text-xs leading-5 text-[#006FEE]">{balance} SOL</p>
        </div>
      </div>
      <div className="w-[1px] bg-[#11111126] h-10" />
      <Image
        src={`/image/wallet/signout.png`}
        width={"24px"}
        height={"24px"}
        onClick={disconnect}
        className="cursor-pointer hover:opacity-50"
      />
    </div>
  );
}
