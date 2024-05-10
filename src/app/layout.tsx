import type { Metadata } from "next";
import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ProviderWrapper } from "@/provider/ProviderWrapper";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Inter } from "next/font/google";
import NProgress from 'nprogress'

export const metadata: Metadata = {
  title: "Antsale",
  description: "Antsale",
  icons: "/image/logo-ant-base.png",
};

const inter = Inter({ subsets: ["latin"] });

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
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
