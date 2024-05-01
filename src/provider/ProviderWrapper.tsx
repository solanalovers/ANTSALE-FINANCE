"use client";
import WalletAdapter from "./WalletAdapter";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import AppProvider from "./AppProvider";

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
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
