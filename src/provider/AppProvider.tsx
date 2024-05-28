'use client';
import React, { createContext, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getBalance } from '@/function/wallet';
import { useCookies } from 'next-client-cookies';

export const AppContext = createContext<any>({});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = useCookies();
  const [cluster, setCluster] = useState<number>(() => {
    if (!cookieStore.get('cluster')) {
      cookieStore.set('cluster', '0');
      return 0;
    } else {
      const result = cookieStore.get('cluster');
      return Number(result);
    }
  });
  const [balance, setBalance] = useState(0);
  const { publicKey } = useWallet();

  const getWalletBalance = async () => {
    if (publicKey) {
      // change to cluster
      const isMainnet = cluster === 1;
      const balance: any = await getBalance(publicKey, isMainnet);
      setBalance(balance.toFixed(4));
    }
  };

  useEffect(() => {
    (async () => {
      await getWalletBalance();
    })();
  }, [publicKey, cluster]);

  useEffect(() => {
    cookieStore.set('cluster', cluster.toString());
  }, [cluster]);

  return (
    <AppContext.Provider
      value={{ cluster, setCluster, balance, getWalletBalance }}
    >
      {children}
    </AppContext.Provider>
  );
}
