import useTrans from "@/hook/useTrans";
import { Button, Image } from "@nextui-org/react";
import React from "react";

export default function Roadmap() {
  const t = useTrans("landing");
  return (
    <div className="p-10 flex flex-col md:flex-row bg-primary-50 rounded-2xl items-center">
      <div>
        <p className="text-[56px] leading-[64px] md:text-[60px] md:leading-[78px] font-semibold">
          {t("roadmap.title")}
        </p>
        <p className="text-[#8E8E93] text-[26px] leading-[34px] font-medium my-6">
          {t("roadmap.description")}
        </p>
        <Button
          color="primary"
          size="lg"
        >
          {t("roadmap.btn")}
        </Button>
      </div>
      <div className="w-[311px] h-[311px] md:w-[409px] md:h-[409px] flex-shrink-0">
        <Image
          src="/image/landing/roadmap.png"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
