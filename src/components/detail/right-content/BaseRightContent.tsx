import React, {useContext, useState} from "react";
import BorderContent from "../BorderContent";
import Countdown from "../Countdown";
import { Button, Input, Progress } from "@nextui-org/react";
import {
  ListingOption,
  Project,
  SaleType,
} from "@/interface/project-interface";
import { toTitleCase } from "@/function/text";
import { CautionIcon } from "@/components/Icon";
import {AppContext} from "@/provider/AppProvider";
import {invest} from "@/function/invest";
import {useWallet} from "@solana/wallet-adapter-react";
import { useRouter } from 'next/router';
import {useParams, useSearchParams} from "next/navigation";

interface BaseRightContentData extends Project {
  id: number
}

export default function BaseRightContent({
  data,
  status,
}: {
  data: BaseRightContentData;
  status: string;
}) {
  const { cluster } = useContext(AppContext);
  const[ amount, setAmount] = useState<any>(0);
  const wallet  = useWallet()
  const [loading, setLoading] = useState(false);
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
              <Countdown endTime={data.endTime}/>
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
                  setAmount(e.target.value)
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
                setLoading(true)
                await  invest(data.id, cluster === 1, wallet, amount)
                setLoading(false)
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
            0.8548 SOL (17.10%)
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Total Contributor</p>
          <p className="text-base leading-6 text-[#1C1C1E]">6</p>
        </div>
      </BorderContent>
    </>
  );
}
