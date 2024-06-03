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
      <p className="text-primary-500 text-sm leading-[22px] font-semibold">
        {tag.toUpperCase()}
      </p>
      <p className="text-[#1C1C1E] font-semibold text-[36px] leading-[42px]">
        {title}
      </p>
      <p
        className="text-[#1C1C1E] text-[22px] md:text-base leading-[30px]"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
    <div className="flex items-center justify-center">
      <Image
        className="w-[343px] h-[343px] md:w-[491px] md:h-[491px] object-cover object-center"
        src={image}
      />
    </div>
  </div>
);

export default function Why() {
  const t = useTrans("landing");
  return (
    <div>
      <p className="md:text-center mb-10 p-[10px] text-[60px] break-words md:break-normal md:text-[70px] md:leading-[76px] text-[#1C1C1E] font-bold">
        Why AntSale?
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WhyItem
          image="/image/landing/why/1.png"
          tag={t("why.open.tag")}
          title={t("why.open.title")}
          content={`${t("why.open.content-1")}`}
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
