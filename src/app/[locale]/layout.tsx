import type { Metadata } from "next";
import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ProviderWrapper } from "@/provider/ProviderWrapper";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "HotSolToken",
  description: "HotSolToken",
  icons: "/image/header-logo.png",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.className}`}
    >
      <body>
        <ProviderWrapper>
          <DefaultLayout>{children}</DefaultLayout>
        </ProviderWrapper>
      </body>
    </html>
  );
}
