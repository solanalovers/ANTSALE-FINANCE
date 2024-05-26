import useTrans from "@/hook/useTrans";
import { Button, Image } from "@nextui-org/react";
import React from "react";

export default function Roadmap() {
  const t = useTrans("landing");
  return (
    <div className="p-10 flex bg-primary-50 rounded-2xl items-center">
      <div>
        <p className="text-[3.125vw] leading-[4.0625vw] font-semibold">
          {t("roadmap.title")}
        </p>
        <p className="text-[#8E8E93] text-[1.354vw] leading-[1.771vw] font-medium my-6">
          {t("roadmap.description")}
        </p>
        <Button
          color="primary"
          size="lg"
        >
          {t("roadmap.btn")}
        </Button>
      </div>
      <div className="w-[21.302vw] h-[21.302vw] flex-shrink-0">
        <Image
          src="/image/landing/roadmap.png"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
