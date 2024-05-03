import React, { useEffect, useState } from "react";
import BorderContent from "./BorderContent";
import { Button, Input, Progress } from "@nextui-org/react";
import { countdownToSaleEnd } from "@/function/timer";
import Countdown from "./Countdown";
import BaseRightContent from "./right-content/BaseRightContent";
import PurchaseCurrencyRightContent from "./right-content/PurchaseCurrencyRightContent";

export default function RightContent({ type }: { type: string }) {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-warning-50 border border-warning py-[10px]">
        <p className="text-sm leading-5 text-center">
          Make sure the website is{" "}
          <span className="font-semibold">solsale.fi</span>
        </p>
      </div>
      {type === "normal" && <BaseRightContent />}
      {type === "purchase-currency" && <PurchaseCurrencyRightContent />}
      {/* <BorderContent>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="leading-5 text-base font-medium">
            {type !== "nomal" ? "MULTICHAIN-LAUNCH" : "FAIRLAUNCH"} Ends In
          </p>
          <Countdown />
        </div>
        {type === "purchase-currency" && (
          <div className="mt-6">
            <p className="font-semibold text-base leading-5 text-center mb-2">
              Total funds RAISED across all chains ~8,140,987.05 USDT{" "}
            </p>
            <p className="font-semibold text-base leading-5 text-center">
              Total Contributors : 1.000
            </p>
          </div>
        )}
        <div className="my-6">
          <Progress
            color="success"
            value={60}
          />
          {type === "normal" && (
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm leading-5">{`0.85 SOL ($126.74)`}</p>
              <p className="text-sm leading-5">{`5 SOL ($741.4)`}</p>
            </div>
          )}
          {type === "purchase-currency mt-6" && (
            <p className="font-semibold text-base leading-5 text-center">
              1 ETH = 1,250 SHIBA
            </p>
          )}
        </div>
        <Input
          inputMode="numeric"
          label="Amount (MAX: 0.0009 SOL)"
          defaultValue="0"
          placeholder="0"
          labelPlacement="inside"
          endContent={<p className="text-default-600">MAX</p>}
        />
        <Button
          color="primary"
          className="mt-4 w-full"
          size="lg"
        >
          BUY WITH SOL
        </Button>
      </BorderContent>
      <BorderContent>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Status</p>
          <p className="text-base leading-6 text-[#1C1C1E]">Upcoming</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Sale Type</p>
          <p className="text-base leading-6 text-[#1C1C1E]">Public</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Min Buy</p>
          <p className="text-base leading-6 text-[#1C1C1E]">0.1 SOL</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Max Buy</p>
          <p className="text-base leading-6 text-[#1C1C1E]">15 SOL</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Current Rate</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            1 SOL = 307,691 SOLFIN
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
      </BorderContent> */}
    </div>
  );
}
