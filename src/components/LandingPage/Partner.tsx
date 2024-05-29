import useTrans from "@/hook/useTrans";
import { Image } from "@nextui-org/react";
import React from "react";

const listPartner = [
  "phantom",
  "cmc",
  "dex",
  "dextool",
  "coinbase",
  "sol",
  "helius",
  "mexc",
  "ton",
  "tradingview",
  "trust",
];

export default function Partner() {
  const t = useTrans("landing");
  return (
    <div>
      <p className="mb-6 text-center p-[10px] text-[#1C1C1E] text-[2.083vw] leading-[2.5vw] font-bold">
        {t("partner")}
      </p>
      <div className="px-10">
        <Image
          radius="none"
          src={`/image/landing/partner.png`}
        />
      </div>
    </div>
  );
}