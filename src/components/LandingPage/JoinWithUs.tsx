import useTrans from "@/hook/useTrans";
import { Image } from "@nextui-org/react";
import React from "react";

export default function JoinWithUs() {
  const t = useTrans("landing");
  return (
    <div>
      <Image
        src="/image/landing/full.png"
        className="object-cover object-center h-[623px] w-screen hidden md:block"
      />
      <Image
        src="/image/landing/full-mobile.png"
        className="object-cover object-center w-screen md:hidden"
      />
      <p className="mt-12 p-[10px] text-center font-bold text-[56px] leading-[64px] md:text-[70px] md:leading-[85px] text-[#1C1C1E]">
        {t("join.content1")}
        <br /> {t("join.content2")}{" "}
        <span className="text-primary">Solana, Ton</span> {t("join.content3")}
      </p>
    </div>
  );
}
