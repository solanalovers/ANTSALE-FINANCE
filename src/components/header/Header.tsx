"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import LocaleSelect from "./localeComponent/LocaleSelect";
// import ClusterSelect from "./solanaCluster/ClusterSelect";
import ConnectedWallet from "./ConnectedWallet";
import { Image, Input, Link, commonColors } from "@nextui-org/react";
import Navbar from "./Navbar/Navbar";
import { useTheme } from "next-themes";
import ClusterSelect from "./ClusterSelect";
import { SearchIcon } from "../Icon";
import useTrans from "@/hook/useTrans";

export default function Header() {
  const { publicKey } = useWallet();
  const pathName = usePathname();
  const t = useTrans("wallet");

  return (
    <div>
      <div className={`border-b border-default-300`}>
        <div className="container mx-auto">
          <div className="flex py-4 items-center gap-x-8 justify-between">
            <Link href={"/"}>
              <Image
                src={"/image/logo-ant.png"}
                radius="none"
                width={96}
                height={90}
                className="object-contain object-center"
              />
            </Link>
            {pathName.split("/")?.length > 2 && (
              <Input
                variant="bordered"
                className="flex-1 border-[base-default-200] placeholder:(text-[layout.foreground-500]) text-sm leading-5"
                placeholder="Search"
                startContent={<SearchIcon color={"#71717A"} />}
              />
            )}
            <div className="flex gap-x-4 items-center">
              <ClusterSelect />
              <LocaleSelect />
              {!publicKey ? (
                <div className="h-10 py-2 px-[26px] bg-primary relative hover:opacity-50 rounded-lg">
                  <WalletMultiButton />
                  <p className="font-medium text-base leading-6 text-white">
                    {t("connect")}
                  </p>
                </div>
              ) : (
                <ConnectedWallet
                  address={JSON.stringify(publicKey)?.split('"')[1]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`border-b border-default-300`}>
        <Navbar />
      </div>
    </div>
  );
}
