import React, { useEffect, useState } from "react";
import BorderContent from "./BorderContent";
import { Button, Input, Progress } from "@nextui-org/react";
import { countdownToSaleEnd } from "@/function/timer";
import Countdown from "./Countdown";
import BaseRightContent from "./right-content/BaseRightContent";
import PurchaseCurrencyRightContent from "./right-content/PurchaseCurrencyRightContent ";
import FixedRightContent from "./right-content/FixedRightContent";

export default function RightContent({ type }: { type: string }) {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="bg-warning-50 border border-warning py-[10px]">
        <p className="text-sm leading-5 text-center">
          Make sure the website is{" "}
          <span className="font-semibold">solsale.fi</span>
        </p>
      </div>
      {type === "normal" && <BaseRightContent />}
      {type === "purchase-currency" && <PurchaseCurrencyRightContent />}
      {(type === "fixed-price" || type === "multi-price") && (
        <FixedRightContent type={type} />
      )}
    </div>
  );
}
