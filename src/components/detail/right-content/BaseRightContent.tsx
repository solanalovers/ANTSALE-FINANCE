import React, { useContext, useState, useEffect } from "react";
import BorderContent from "../BorderContent";
import Countdown from "../Countdown";
import { Button, Input, Progress } from "@nextui-org/react";
import { ListingOption } from "@/interface/project-interface";
import { toTitleCase } from "@/function/text";
import { CautionIcon } from "@/components/Icon";
import { AppContext } from "@/provider/AppProvider";
import { invest } from "@/function/invest";
import { useWallet } from "@solana/wallet-adapter-react";
import { DetailData } from "@/app/[locale]/detail/[slug]/page";
import { claim, fetchClaimable } from "@/function/claim";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function BaseRightContent({
  data,
  status,
}: {
  data: DetailData;
  status: string;
}) {
  const { cluster } = useContext(AppContext);
  const [amount, setAmount] = useState<any>(0);
  const wallet = useWallet();
  const [loading, setLoading] = useState(false);
  const [loadingClaim, setLoadingClaim] = useState(false);
  const [purchased, setPurchased] = useState<number>(0);
  const [totalContributors, setTotalContributors] = useState<number>(0);
  const [disableClaim, setDisableClaim] = useState<boolean>(true);
  const setDataClaimable = async () => {
    const { totalContributor, purchased, isClaimable } = await fetchClaimable(
      data.id,
      cluster === 1,
      wallet
    );

    setPurchased(purchased);

    setTotalContributors(totalContributor);

    setDisableClaim(!isClaimable);
  };
  useEffect(() => {
    setDataClaimable();
  }, [cluster, wallet, status, loading]);

  return (
    <>
      <BorderContent>
        <div className="flex flex-col items-center justify-center gap-y-2">
          {status === "ended" && (
            <p className="leading-5 text-base font-medium">
              {data.projectType} Ended
            </p>
          )}
          {status === "live" && (
            <>
              <p className="leading-5 text-base font-medium">
                {data.projectType} Ends In
              </p>
              <Countdown endTime={data.endTime} />
            </>
          )}
          {status === "upcoming" && (
            <>
              <p className="leading-5 text-base font-medium">
                {data.projectType} Start In
              </p>
              <Countdown endTime={data.startTime} />
            </>
          )}
        </div>
        {status === "live" && (
          <>
            <div className="my-6">
              <Progress
                color="success"
                value={60}
              />
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm leading-5">{`0.85 SOL ($126.74)`}</p>
                <p className="text-sm leading-5">{`5 SOL ($741.4)`}</p>
              </div>
            </div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Amount (MAX: 0.0009 SOL)"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount.toString()}
              defaultValue="0"
              placeholder="0"
              labelPlacement="inside"
              endContent={<p className="text-default-600">MAX</p>}
              isDisabled={loading}
            />
            <Button
              color="primary"
              className="mt-4 w-full"
              size="lg"
              isLoading={loading}
              onClick={async () => {
                setLoading(true);
                await invest(data, cluster === 1, wallet, amount);
                setLoading(false);
              }}
            >
              BUY WITH SOL
            </Button>
            {data.listingOption === ListingOption.ManualListing && (
              <div className="flex bg-[#FFF3DF] px-4 py-3 gap-x-3 mt-4">
                <div className="flex-shrink-0">
                  <CautionIcon />
                </div>
                <div>
                  <p className="text-sm leading-6 font-bold">
                    Manual Listing Launchpad
                  </p>
                  <p className="text-sm leading-6 text-[#2D3748]">{`Manual listing can lead to complete control of funds to project owners and thereby does not always guarantee token listings. This can sometimes result into mishandling of funds. Please assess necessary risks before investing into manually listing projects.`}</p>
                </div>
              </div>
            )}
          </>
        )}
      </BorderContent>
      <BorderContent>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Status</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            {toTitleCase(status)}
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Sale Type</p>
          <p className="text-base leading-6 text-[#1C1C1E]">{data.saleType}</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Min Buy</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            {data.minBuy} SOL
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Max Buy</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            {data.maxBuy} SOL
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Current Rate</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            1 {data.currency} = {data.presaleRate} {data.tokenInfo?.symbol}
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Current Raise</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            {parseFloat((data.totalRaised / LAMPORTS_PER_SOL).toFixed(4))}{" "}
            {data.currency} (
            {parseFloat(
              (
                (data.totalRaised / LAMPORTS_PER_SOL / Number(data.hardCap)) *
                100
              ).toFixed(2)
            )}
            %)
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Total Contributor</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            {totalContributors}
          </p>
        </div>
      </BorderContent>

      <BorderContent>
        <>
          <div className="flex items-center justify-between">
            <p className="text-base font-medium">Your Purchase</p>
            <p className="text-base leading-6 text-[#1C1C1E]">
              {purchased} SOL
            </p>
          </div>
          <div className="my-[14px] w-full border-t border-dashed border-divider" />
          <div className="flex items-center justify-between mb-3">
            <p className="text-base font-medium">Token Amount</p>
            <p className="text-base leading-6 text-[#1C1C1E]">
              {purchased * Number(data.presaleRate)} {data.tokenInfo?.symbol}
            </p>
          </div>
          {status === "ended" && (
            <Button
              color="primary"
              className="mt-4 w-full"
              size="lg"
              isLoading={loadingClaim}
              isDisabled={disableClaim}
              onClick={async () => {
                setLoadingClaim(true);
                await claim(data, cluster === 1, wallet);
                setDisableClaim(true);
                setLoadingClaim(false);
              }}
            >
              {disableClaim
                ? purchased
                  ? "Claimed"
                  : "Not eligible"
                : "Claim your token"}
            </Button>
          )}
        </>
      </BorderContent>
    </>
  );
}
