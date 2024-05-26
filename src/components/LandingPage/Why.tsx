import useTrans from "@/hook/useTrans";
import { Image, image } from "@nextui-org/react";
import React from "react";

const WhyItem = ({
  image,
  title,
  content,
  tag,
  type = "lower",
}: {
  image: string;
  title: string;
  content: string;
  tag: string;
  type?: string;
}) => (
  <div
    className={`p-10 bg-primary-50 flex gap-y-6 rounded-2xl ${
      type === "lower" ? "flex-col" : "flex-col-reverse"
    }`}
  >
    <div className="flex flex-col gap-y-6">
      <p className="text-primary-500 text-[0.833vw] leading-[1.146vw] font-semibold">
        {tag.toUpperCase()}
      </p>
      <p className="text-[#1C1C1E] font-semibold text-[1.875vw] leading-[2.188vw]">
        {title}
      </p>
      <p
        className="text-[#1C1C1E] text-base leading-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
    <div className="flex items-center justify-center">
      <Image
        className="w-[25.573vw] h-[25.573vw] object-cover object-center"
        src={image}
      />
    </div>
  </div>
);

export default function Why() {
  const t = useTrans("landing");
  return (
    <div>
      <p className="text-center mb-10 p-[10px] text-[3.646vw] leading-[4.063vw] text-[#1C1C1E] font-bold">
        Why AntSale?
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WhyItem
          image="/image/landing/why/1.png"
          tag={t("why.open.tag")}
          title={t("why.open.title")}
          content={`${t("why.open.content-1")}<br/><br/>${t(
            "why.open.content-2"
          )}`}
        />
        <WhyItem
          image="/image/landing/why/2.png"
          type="upper"
          tag={t("why.multi-chain.tag")}
          title={t("why.multi-chain.title")}
          content={`${t("why.multi-chain.content-1")}<br/><br/>${t(
            "why.multi-chain.content-2"
          )}`}
        />
        <WhyItem
          image="/image/landing/why/3.png"
          type="upper"
          tag={t("why.multi-gamingfy.tag")}
          title={t("why.multi-gamingfy.title")}
          content={`${t("why.multi-gamingfy.content-1")}`}
        />
        <WhyItem
          image="/image/landing/why/4.png"
          tag={t("why.reward.tag")}
          title={t("why.reward.title")}
          content={`${t("why.reward.content-1")}`}
        />
      </div>
    </div>
  );
}
