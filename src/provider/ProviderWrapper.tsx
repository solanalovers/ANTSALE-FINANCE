"use client";
import WalletAdapter from "./WalletAdapter";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import AppProvider from "./AppProvider";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
    console.log('aaa')
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);
  return (
    <WalletAdapter>
      <AppProvider>
        <NextUIProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="light"
          >
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </AppProvider>
    </WalletAdapter>
  );
}
