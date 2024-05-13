import type { Metadata } from "next";
import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ProviderWrapper } from "@/provider/ProviderWrapper";
import { Inter } from "next/font/google";
import { CookiesProvider } from "next-client-cookies/server";

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
        <CookiesProvider>
          <ProviderWrapper>{children}</ProviderWrapper>
        </CookiesProvider>
      </body>
    </html>
  );
}
