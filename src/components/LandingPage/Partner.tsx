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
      <p className="mb-6 text-center p-[10px] text-[#1C1C1E] text-[2.083vw] leading-[2.5vw] font-bold">{t("partner")}</p>
      <div className="flex items-center flex-wrap px-10 gap-[60px] justify-center">
        {listPartner.map((value,idx)=><Image radius="none" key={idx} src={`/image/landing/partner/${value}.png`}/>)}
      </div>
    </div>
  );
}
