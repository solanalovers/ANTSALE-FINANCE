import useTrans from "@/hook/useTrans";
import { Image } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  const t = useTrans('landing')
  return (
    <div className="flex justify-between gap-16">
      <div className="flex-1">
        <p className="text-[5vw] leading-[5.417vw] font-bold text-[#001731]">{t('hero.title')}</p>
        <p className="mt-6 text-[#8E8E93] text-[1.354vw] leading-[1.771vw]">
          {t('hero.content1')}
          <br/>
          <br/>
          {t('hero.content2')}
        </p>
      </div>
      <Image
        src="/image/landing/hero.png"
        className="w-[37.57vw] h-[37.57vw]"
      />
    </div>
  );
}
