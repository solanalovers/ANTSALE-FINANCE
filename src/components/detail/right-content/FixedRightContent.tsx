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
import { currencyList, currencyShortName } from "@/constant/network";
import { ArrowDownIcon } from "@/components/Icon";
import { set } from "@coral-xyz/anchor/dist/cjs/utils/features";
import CurrencySelect from "./CustomSelect/CurrencySelect";
import PoolSelect from "./CustomSelect/PoolSelect";

export default function FixedRightContent({ type }: any) {
  const [currency, setCurrency] = useState("usdt");
  const [payment, setPayment] = useState("eth");
  const [upperPool, setUpperPool] = useState(2);
  const [lowerPool, setLowerPool] = useState(2);

  return (
    <>
      <BorderContent>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="leading-5 text-base font-medium">
            MULTICHAIN-LAUNCH Ends In
          </p>
          <Countdown multichain />
        </div>
        <p className="font-semibold text-base leading-5 text-center mt-6">
          USDT RAISED: $8,140,987.05/ $8,832,636
        </p>
        <div className="my-6">
          <Progress
            color="success"
            value={60}
          />
          {type === "multi-price" ? (
            <div className="mt-6">
              <PoolSelect
                pool={upperPool}
                setPool={setUpperPool}
              />
            </div>
          ) : (
            <p className="font-semibold text-base leading-5 text-center mt-6">
              1 USDT = 1,250 SHIBA
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-x-3 my-6">
          <Button
            variant="bordered"
            size="lg"
            className={`${
              currency === "eth" &&
              "border-primary bg-primary-50 font-bold text-primary"
            } text-lg leading-[28px]`}
            onClick={() => setCurrency("eth")}
          >
            <Image
              src="/image/multi-chain/eth.png"
              className="w-6 h-6"
            />
            Ethereum
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className={`${
              currency === "usdt" &&
              "border-primary bg-primary-50 font-bold text-primary"
            } text-lg leading-[28px]`}
            onClick={() => setCurrency("usdt")}
          >
            <Image
              src="/image/multi-chain/usdt.png"
              className="w-6 h-6"
            />
            USDT
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <Input
            inputMode="numeric"
            label={`${currency.toUpperCase()} you pay`}
            defaultValue="0"
            placeholder="0"
            labelPlacement="inside"
            endContent={
              <Image
                src={`${
                  currency === "eth"
                    ? "/image/multi-chain/eth.png"
                    : "/image/multi-chain/usdt.png"
                }`}
                className="w-4 h-4"
              />
            }
          />
          <Input
            inputMode="numeric"
            label={`SHIBA you receive`}
            defaultValue="0"
            placeholder="0"
            labelPlacement="inside"
            isReadOnly
            endContent={
              <Image
                src="/image/token/shiba.png"
                className="w-4 h-4"
              />
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-x-3 items-center mt-4">
          <CurrencySelect
            currency={payment}
            setCurrency={setPayment}
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
          {/* <CurrencySelect
            currency={currency}
            setCurrency={setCurrency}
          /> */}
          {type === "multi-price" && (
            <PoolSelect
              pool={lowerPool}
              setPool={setLowerPool}
              info
            />
          )}
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

        {type === "multi-price" ? (
          <>
            <div className="my-[14px] w-full border-t border-dashed border-divider" />
            <div className="flex items-center justify-between">
              <p className="text-base font-medium">Current Price</p>
              <p className="text-base leading-6 text-[#1C1C1E]">
                {`1 ${currency.toUpperCase()} = 1,250 SHIBA`}
              </p>
            </div>
            <div className="my-[14px] w-full border-t border-dashed border-divider" />
            <div className="flex items-center justify-between">
              <p className="text-base font-medium">Token amount in Pool</p>
              <p className="text-base leading-6 text-[#1C1C1E]">
                23,000,000 SHIBA
              </p>
            </div>
            <div className="my-[14px] w-full border-t border-dashed border-divider" />
            <div className="flex items-center justify-between">
              <p className="text-base font-medium">SOLD Tokens</p>
              <p className="text-base leading-6 text-[#1C1C1E]">
                18,000,000 SHIBA
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="my-[14px] w-full border-t border-dashed border-divider" />
            <div className="flex items-center justify-between">
              <p className="text-base font-medium">Target</p>
              <p className="text-base leading-6 text-[#1C1C1E]">$8,832,636</p>
            </div>
            <div className="my-[14px] w-full border-t border-dashed border-divider" />
            <div className="flex items-center justify-between">
              <p className="text-base font-medium">Total Raised</p>
              <p className="text-base leading-6 text-[#1C1C1E]">
                $8,140,987.05
              </p>
            </div>
          </>
        )}
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Total Contributor</p>
          <p className="text-base leading-6 text-[#1C1C1E]">69</p>
        </div>
      </BorderContent>
    </>
  );
}
