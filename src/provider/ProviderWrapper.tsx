"use client";
import WalletAdapter from "./WalletAdapter";
import AppAdapter from "./AppAdapter";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <WalletAdapter>
      <AppAdapter>
        <NextUIProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="light"
          >
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </AppAdapter>
    </WalletAdapter>
  );
}
