import { countdownToSaleEnd } from "@/function/timer";
import { Button, Image, Input } from "@nextui-org/react";
import { Copy } from "iconsax-react";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import CustomDivider from "../CustomDivider";
import useTrans from "@/hook/useTrans";
import { useWallet } from "@solana/wallet-adapter-react";
import { AppContext } from "@/provider/AppProvider";
import { SaleType } from "@/interface/project-interface";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const ContentBox = ({ children }: { children: ReactNode }) => (
  <div
    className="bg-yellow-50 p-10 rounded-2xl"
    style={{
      boxShadow:
        "0px 5px 15px -3px rgba(245,165,46,0.4), 0px 6px 4px -2px rgba(0,0,0,0.05)",
    }}
  >
    {children}
  </div>
);

const MainContent = ({
  content,
}: {
  content: { image: string; saleType: string; desc: string };
}) => {
  const t = useTrans("landing");
  const t1 = useTrans("wallet");
  const saleEndTime = new Date();
  saleEndTime.setHours(saleEndTime.getHours() + 17);
  const [timer, setTimer] = useState("00:00:00:00");
  const { publicKey } = useWallet();
  const { balance } = useContext(AppContext);
  const [amount, setAmount] = useState<number>(0);

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
      <p className="text-center text-sm leading-[22px]">{content.desc}</p>
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
      <div className="flex items-center gap-x-4 w-full">
        <Input
          placeholder="0"
          label={`${t("ads.amount")} ${
            publicKey ? `(Your balances: ${balance} SOL)` : ""
          }`}
          onChange={(e) => {
            if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
              setAmount(Number(e.target.value));
            } else {
              e.target.value = "";
            }
          }}
          value={amount?.toString()}
          endContent={
            <>
              {publicKey && (
                <p
                  className="absolute right-2 cursor-pointer"
                  onClick={() => {
                    if (publicKey) {
                      setAmount(balance);
                    }
                  }}
                >
                  {t("ads.max")}
                </p>
              )}
            </>
          }
          size="sm"
          variant="flat"
          color="default"
          classNames={{ inputWrapper: "bg-white" }}
        />
        <div className="w-[40%]">
          <div
            color="primary"
            className="w-full font-medium text-base leading-6 h-12 px-4 bg-primary relative hover:opacity-50 rounded-lg flex items-center justify-center text-white"
          >
            {!publicKey && <WalletMultiButton />}
            {t("ads.buy")}
          </div>
        </div>
      </div>
      <p className="text-[20px] leading-[28px] font-semibold text-[#1C1C1E]">
        {t("ads.saleStart")}{" "}
        <span className="font-bold text-primary">{timer}</span>
      </p>
    </div>
  );
};

const Divider = () => (
  <div className="my-8">
    <svg
      width="100%"
      height="1"
      viewBox="0 0 100% 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="0.5"
        x2="100%"
        y2="0.5"
        stroke="#66AAF9"
        stroke-dasharray="12 12"
      />
    </svg>
  </div>
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
            desc: t("ads.seedDesc"),
          }}
        />
        <Divider />
        <div>
          <p className="text-[36px] leading-[42px] font-semibold">
            $ANTF {t("ads.token")}
          </p>
          <ul className="list-disc ml-4 mt-6">
            <li>
              <p className="text-base leading-6">
                <span className="font-medium">{t("ads.seedSale")}:</span>{" "}
                100,000 ANTF (10%)
              </p>
            </li>
            <li>
              <p className="text-base leading-6">
                <span className="font-medium">{t("ads.fairlaunchSale")}:</span>{" "}
                500,000 ANTF (50%)
              </p>
            </li>
            <li>
              <p className="text-base leading-6">
                <span className="font-medium">{t("ads.liquidity")}:</span>{" "}
                200,000 ANTF (20%)
              </p>
            </li>
            <li>
              <p className="text-base leading-6">
                <span className="font-medium">{t("ads.cex")}:</span> 100,000
                ANTF (10%)
              </p>
            </li>
            <li>
              <p className="text-base leading-6">
                <span className="font-medium">{t("ads.dev")}:</span> 50,000 ANTF
                (5%)
              </p>
            </li>
            <li>
              <p className="text-base leading-6">
                <span className="font-medium">{t("ads.airdrop")}:</span> 50,000
                ANTF (5%)
              </p>
            </li>
            <li>
              <p className="text-base leading-6">
                <span className="font-medium">{t("ads.total")}:</span> 1,000,000
                ANTF
              </p>
            </li>
            <li>
              <p className="text-base leading-6">
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
            desc: t("ads.fairlaunchDesc"),
          }}
        />
      </ContentBox>
    </div>
  );
}
