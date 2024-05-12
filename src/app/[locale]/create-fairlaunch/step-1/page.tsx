"use client";
import CustomDivider from "@/components/CustomDivider";
import ToastItem from "@/components/toast/ToastItem";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import {
  Checkbox,
  DatePicker,
  Input,
  Link,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { getTokenData } from "@/function/token";
import { now } from "@internationalized/date";
import { CreateFairLaunchContext } from "@/provider/CreateFairLaunchProvider";

export default function CreateFairLaunchStep1() {
  const { createFairLaunchForm, setCreateFairLaunchForm } = useContext(
    CreateFairLaunchContext
  );
  const [tokenAddr, setTokenAddr] = useState("");
  const [tokenInfo, setTokenInfo] = useState<any>(null);
  const fetchData = async () => {
    return await new Promise((resolve) => {
      const debouncedFetch = debounce(() => {
        resolve(getTokenData(tokenAddr));
      }, 1000);

      debouncedFetch();
    });
  };
  useEffect(() => {
    const fetchDataAndLog = async () => {
      const tokenInfo = await fetchData();
      setTokenInfo(tokenInfo);
    };
    if (tokenAddr) {
      fetchDataAndLog();
    }
  }, [tokenAddr]);

  const handleChangeForm = (formValue: any) => {
    setCreateFairLaunchForm((prev: any) => ({ ...prev, ...formValue }));
  };
  return (
    <div>
      <CustomDivider />
      <div>
        <div>
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Token Address"
            placeholder="0x912CE59144191C1204E64559 E8253a0e49E6548"
            onChange={(e) => setTokenAddr(e.target.value)}
          />
          <div className="mt-2 flex flex-col gap-y-1">
            <p className="text-xs leading-5 font-semibold text-[#8E8E93]">
              Creation fee: FREE
            </p>
            {tokenInfo && (
              <>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Name: {tokenInfo.name}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Symbol: {tokenInfo.symbol}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Total Supply: 223398198040.53727
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Decimals: {tokenInfo.decimals}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Your balance: 223398198040.53727
                </p>
              </>
            )}
          </div>
        </div>
        <div className="my-6 flex flex-col gap-y-6">
          <RadioGroup
            label="Currency"
            defaultValue="SOL"
            className={"text-sm leading-5"}
          >
            <Radio value="SOL">
              <p className={"text-sm leading-5"}>
                SOL (User will pay with SOL for your token)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label="Fee options"
            defaultValue="5%"
            className={"text-sm leading-5"}
          >
            <Radio value="5%">
              <p className={"text-sm leading-5"}>
                5% SOL raised only (no hidden fees)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label="Listing Options"
            defaultValue="auto"
            className={"text-sm leading-5"}
          >
            <Radio value="auto">
              <p className={"text-sm leading-5"}>Auto Listing</p>
            </Radio>
          </RadioGroup>
        </div>
        <div className="rounded-lg overflow-hidden">
          <ToastItem
            content="For auto listing, after you finalize the pool your token will be auto listed on DEX"
            status="caution"
          />
        </div>
        <CustomDivider />
        <div className="grid grid-cols-2 gap-6">
          <Select
            classNames={{ value: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Sale Type"
            placeholder="Public"
          >
            <SelectItem
              key={"public"}
              value={"public"}
            >
              Public
            </SelectItem>
          </Select>
          <div />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Total Selling Amount"
            placeholder="0"
          />
          <div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Softcap"
              placeholder="0"
              endContent={<p className="text-sm text-default-500">SOL</p>}
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              Softcap minimum must be 1 SOL
            </p>
          </div>
        </div>
        <Checkbox
          className="text-sm leading-5 mb-3"
          radius="none"
          size="sm"
          value={createFairLaunchForm?.isMaxBuy}
          onChange={(e) => {
            handleChangeForm({ isMaxBuy: e.target.checked });
          }}
        >
          CONFIG Max Buy (The maximum amount that per wallet can buy)
        </Checkbox>
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          label="Max Buy"
          placeholder="0"
          endContent={<p className="text-sm text-default-500">SOL</p>}
          isDisabled={!createFairLaunchForm?.isMaxBuy}
        />
        <div className="grid grid-cols-2 gap-6 mt-6">
          <Select
            classNames={{ value: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Router"
            placeholder="RaydiumAmmV4"
          >
            <SelectItem
              key={1}
              value={"raydium"}
            >
              RaydiumAmmV4
            </SelectItem>
          </Select>
          <div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Liquidity Percent (%)"
              placeholder="51"
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              Enter the percentage of raised funds that should be allocated to
              Liquidity on (Min 20%, Max 100%)
            </p>
          </div>
          <DatePicker
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            label="Start Time (UTC)"
            variant="bordered"
            showMonthAndYearPickers
            defaultValue={now("Etc/Universal")}
          />
          <DatePicker
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            label="End Time (UTC)"
            variant="bordered"
            showMonthAndYearPickers
            defaultValue={now("Etc/Universal")}
          />
          <Select
            classNames={{ value: "placeholder:text-[#8E8E93] text-black" }}
            variant="bordered"
            label="Liquidity Type"
            placeholder="Auto Locking"
            selectedKeys={[createFairLaunchForm?.liquidityType]}
            onChange={(e) =>
              handleChangeForm({ liquidityType: e.target.value })
            }
          >
            <SelectItem
              key={"lock"}
              value={"lock"}
            >
              Auto Locking
            </SelectItem>
            <SelectItem
              key={"burn"}
              value={"burn"}
            >
              Auto Burning
            </SelectItem>
          </Select>
          <div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Liquidity Lockup Time"
              placeholder="0"
              endContent={<p className="text-sm text-default-500">Minutes</p>}
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              Liquidity lock up time must be greater than 30 days
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden mt-6">
          <ToastItem
            status="info"
            content={`Need <span class='font-bold'>321,600 COIN4</span> to create launchpad`}
          />
        </div>
      </div>
    </div>
  );
}
