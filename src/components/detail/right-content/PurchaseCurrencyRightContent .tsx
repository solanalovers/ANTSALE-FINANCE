import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Input,
  Progress,
} from "@nextui-org/react";
import React, { useState } from "react";
import BorderContent from "../BorderContent";
import Countdown from "../Countdown";
import { currencyList } from "@/constant/network";
import { ArrowDownIcon } from "@/components/Icon";
import { set } from "@coral-xyz/anchor/dist/cjs/utils/features";
import CurrencySelect from "./CustomSelect/CurrencySelect";

export default function PurchaseCurrencyRightContent() {
  const [currency, setCurrency] = useState("eth");
  return (
    <>
      <BorderContent>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="leading-5 text-base font-medium">
            MULTICHAIN-LAUNCH Ends In
          </p>
          {/* <Countdown multichain/> */}
        </div>
        <div className="mt-6">
          <p className="font-semibold text-base leading-5 text-center mb-2">
            Total funds RAISED across all chains ~8,140,987.05 USDT{" "}
          </p>
          <p className="font-semibold text-base leading-5 text-center">
            Total Contributors : 1.000
          </p>
        </div>
        <div className="my-6">
          <Progress
            color="success"
            value={60}
          />
          <p className="font-semibold text-base leading-5 text-center mt-6">
            1 ETH = 1,250 SHIBA
          </p>
        </div>
        <Input
          inputMode="numeric"
          label={`${currency.toUpperCase()} you pay`}
          defaultValue="0"
          placeholder="0"
          labelPlacement="inside"
          endContent={<p className="text-default-600">MAX</p>}
        />
        <div className="grid grid-cols-2 gap-x-3 items-center mt-4">
          <CurrencySelect
            currency={currency}
            setCurrency={setCurrency}
          />
          <Button
            color="primary"
            className="w-full"
            size="lg"
          >
            BUY NOW
          </Button>
        </div>
      </BorderContent>
      <BorderContent>
        <div className="mb-6">
          <CurrencySelect
            currency={currency}
            setCurrency={setCurrency}
          />
        </div>
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
          <p className="text-base font-medium">Current Rate</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            {`1 ${currency.toUpperCase()} = 1,250 SHIBA`}
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Current Raise</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            {`0.8548 ${currency.toUpperCase()} (17.10%)`}
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Token amount in Pool</p>
          <p className="text-base leading-6 text-[#1C1C1E]">23,000,000 SHIBA</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">
            {currency.toUpperCase()} Contributor
          </p>
          <p className="text-base leading-6 text-[#1C1C1E]">69</p>
        </div>
      </BorderContent>
    </>
  );
}
