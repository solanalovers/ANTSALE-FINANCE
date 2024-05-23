import { countdownToSaleEnd } from "@/function/timer";
import { Button, Image, Input } from "@nextui-org/react";
import { Copy } from "iconsax-react";
import React, { ReactNode, useEffect, useState } from "react";
import CustomDivider from "../CustomDivider";
import useTrans from "@/hook/useTrans";

const ContentBox = ({ children }: { children: ReactNode }) => (
  <div
    className="bg-yellow-50 p-10 rounded-2xl"
    style={{
      boxShadow:
        "0px 15px 10px -3px rgba(245,165,46,0.4), 0px 6px 4px -2px rgba(0,0,0,0.05)",
    }}
  >
    {children}
  </div>
);

const MainContent = ({
  content,
}: {
  content: { image: string; saleType: string };
}) => {
  const t = useTrans("landing");
  const saleEndTime = new Date();
  saleEndTime.setHours(saleEndTime.getHours() + 17);
  const [timer, setTimer] = useState("00:00:00:00");
  useEffect(() => {
    const countdown = setInterval(() => {
      const timeleft = countdownToSaleEnd(saleEndTime.toLocaleString());
      setTimer(timeleft);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Image
        src={content.image}
        className="w-[60px] h-[60px] object-cover object-center"
      />
      <p className="text-[20px] leading-[34px] font-semibold text-[#1C1C1E] text-center">
        $ANTF <span className="font-bold">{content.saleType} Sale</span>
      </p>
      <p className="text-center text-sm leading-[22px]">{t("ads.goal")}</p>
      <div className="flex items-center gap-x-1">
        <p className="text-[13px] leading-[32px] text-[#1C1C1E] underline">
          9RFFhhe4XPV8UcBFJkgrDwGGtN3jmktBtw4RBia1bBVn
        </p>
        <Copy
          className="hover:opacity-80 cursor-pointer"
          variant="Bold"
          size={20}
          color="#006FEE"
          onClick={() =>
            navigator.clipboard.writeText(
              "9RFFhhe4XPV8UcBFJkgrDwGGtN3jmktBtw4RBia1bBVn"
            )
          }
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-x-4 w-full">
        <Input
          type="number"
          max={5}
          placeholder="0"
          label={`${t("ads.amount")}SOL)`}
          endContent={t("ads.max")}
          size="sm"
          variant="flat"
          color="default"
          classNames={{inputWrapper: 'bg-white'}}
        />
        <Button
          color="primary"
          size="lg"
        >
          {t("ads.buy")}
        </Button>
      </div>
      <p className="text-[20px] leading-[28px] font-semibold text-[#1C1C1E]">
        {t("ads.saleStart")}{" "}
        <span className="font-bold text-primary">{timer}</span>
      </p>
    </div>
  );
};

const Divider = () => (
  <div className="my-8 border-primary-300 border-t border-dashed" />
);

export default function ANTFAds() {
  const t = useTrans("landing");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ContentBox>
        <MainContent
          content={{
            saleType: t("ads.seed"),
            image: "/image/landing/seed.png",
          }}
        />
        <Divider />
        <div>
          <p className="text-[36px] leading-[42px] font-semibold">
            $ANTF {t("ads.token")}
          </p>
          <ul className="list-disc ml-4 mt-6">
            <li>
              <p className="text-[22px] leading-[30px]">
                <span className="font-medium">{t("ads.seedSale")}:</span>{" "}
                100,000 ANTF (10%)
              </p>
            </li>
            <li>
              <p className="text-[22px] leading-[30px]">
                <span className="font-medium">{t("ads.fairlaunchSale")}:</span>{" "}
                500,000 ANTF (50%)
              </p>
            </li>
            <li>
              <p className="text-[22px] leading-[30px]">
                <span className="font-medium">{t("ads.liquidity")}:</span>{" "}
                200,000 ANTF (20%)
              </p>
            </li>
            <li>
              <p className="text-[22px] leading-[30px]">
                <span className="font-medium">{t("ads.cex")}:</span> 100,000
                ANTF (10%)
              </p>
            </li>
            <li>
              <p className="text-[22px] leading-[30px]">
                <span className="font-medium">{t("ads.dev")}:</span> 50,000 ANTF
                (5%)
              </p>
            </li>
            <li>
              <p className="text-[22px] leading-[30px]">
                <span className="font-medium">{t("ads.airdrop")}:</span> 50,000
                ANTF (5%)
              </p>
            </li>
            <li>
              <p className="text-[22px] leading-[30px]">
                <span className="font-medium">{t("ads.total")}:</span> 1,000,000
                ANTF
              </p>
            </li>
            <li>
              <p className="text-[22px] leading-[30px]">
                <span className="font-medium">{t("ads.maxSupply")}:</span>{" "}
                1,000,000 ANTF
              </p>
            </li>
          </ul>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="flex flex-col gap-y-6">
          <p className="text-[36px] leading-[42px] text-[#1C1C1E] font-semibold">
            {t("ads.howtobuy")} SOL
          </p>
          <ul className="list-disc ml-4 text-base text-[#1C1C1E] leading-6">
            <li>{t("ads.faq1")}</li>
            <li>{t("ads.faq2")}</li>
            <li>{t("ads.faq3")}</li>
          </ul>
          <div>
            <p>{t("ads.fairContent1")}</p>
            <p className="text-base leading-6 text-[#1C1C1E]">
              <span className="text-primary underline">
                9RFFhhe4XPV8UcBFJkgrDwGGtN3jmktBtw4RBia1bBVn
              </span>
              {` `}
              <Copy
                className="hover:opacity-80 cursor-pointer inline"
                variant="Bold"
                size={20}
                color="#006FEE"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "9RFFhhe4XPV8UcBFJkgrDwGGtN3jmktBtw4RBia1bBVn"
                  )
                }
              />
              {t("ads.fairContent2")}
            </p>
          </div>
        </div>
        <Divider />
        <MainContent
          content={{
            saleType: t("ads.fairlaunch"),
            image: "/image/landing/fairlaunch.png",
          }}
        />
      </ContentBox>
    </div>
  );
}
