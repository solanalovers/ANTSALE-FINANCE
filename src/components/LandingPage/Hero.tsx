import useTrans from "@/hook/useTrans";
import { Image } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  const t = useTrans('landing')
  return (
    <div className="flex flex-col md:flex-row justify-between gap-x-16">
      <div className="flex-1">
        <p className="text-[48px] leading-[56px] md:text-[5vw] md:leading-[5.417vw] font-bold text-[#001731]">{t('hero.title')}</p>
        <p className="mt-6 text-[#8E8E93] text-xl leading-7 md:text-[1.354vw] md:leading-[1.771vw]">
          {t('hero.content1')}
          <br/>
          <br/>
          {t('hero.content2')}
        </p>
      </div>
      <Image
        src="/image/landing/hero.png"
        className="w-screen md:w-[37.57vw] md:h-[37.57vw]"
      />
    </div>
  );
}
