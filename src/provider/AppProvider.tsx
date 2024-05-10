"use client";
import React, { createContext, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { getBalance } from "@/function/wallet";

export const AppContext = createContext<any>({});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cluster, setCluster] = useState(() => {
    // return true;
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("cluster");
      if (!result) {
        localStorage.setItem("cluster", "0");
        return "sol-devnet";
      } else {
        return Number(result);
      }
    }
  });
  const [balance, setBalance] = useState(0);
  const { publicKey } = useWallet();

  const getWalletBalance = async () => {
    if (publicKey) {
      // change to cluster
      const balance: any = await getBalance(publicKey, false);
      setBalance(balance.toFixed(4));
    }
  };

  useEffect(() => {
    (async () => {
      await getWalletBalance();
    })();
  }, [publicKey, cluster]);
  return (
    <AppContext.Provider
      value={{ cluster, setCluster, balance, getWalletBalance }}
    >
      {children}
    </AppContext.Provider>
  );
}
