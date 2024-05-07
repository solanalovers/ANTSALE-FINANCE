"use client";
import CustomDivider from "@/components/CustomDivider";
import ToastItem from "@/components/toast/ToastItem";
import { getTokenData } from "@/function/token";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import {
  DatePicker,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { debounce } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { now } from "@internationalized/date";

export default function CreatePresaleStep1() {
  const { createPresaleForm, setCreatePresaleForm } =
    useContext(CreatePresaleContext);
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
            onChange={(e) =>
              setCreatePresaleForm((prev: any) => ({
                ...prev,
                listingOption: e.target.value,
              }))
            }
            value={createPresaleForm?.listingOption}
          >
            <Radio value="auto">
              <p className={"text-sm leading-5"}>Auto Listing</p>
            </Radio>
            <Radio value="manual">
              <p className={"text-sm leading-5"}>Manual Listing</p>
            </Radio>
          </RadioGroup>
        </div>
        <div className="rounded-lg overflow-hidden">
          <ToastItem
            content={
              createPresaleForm?.listingOption === "auto"
                ? "For auto listing, after you finalize the pool your token will be auto listed on DEX"
                : "For manual listing, AntSale won't charge tokens for liquidity.</br>You may withdraw SOL after the pool ends then do DEX listing yourself."
            }
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
          <div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="PRESALE rate"
              placeholder="0"
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              1 SOL = 1000 COIN4 <br />
              If I spend 1 SOL on how many tokens will i receive?
            </p>
          </div>
          <div>
            {createPresaleForm?.listingOption === "auto" && (
              <>
                <Input
                  classNames={{ input: "placeholder:text-[#8E8E93]" }}
                  variant="bordered"
                  label="LISTING rate"
                  placeholder="0"
                />
                <p className="text-[#1C1C1E] text-xs mt-1">
                  1 SOL = 800 COIN4
                  <br />
                  If I spend 1 SOL on how many tokens will i receive? Usually
                  this amount is lower than presale rate to allow for a higher
                  listing price on
                </p>
              </>
            )}
          </div>

          <div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Softcap"
              placeholder="0"
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              Softcap must be greater than or equals 20% of Hardcap
            </p>
          </div>
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Hardcap"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Minimum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Maximum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
          />
          {createPresaleForm?.listingOption === "auto" && (
            <>
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
                  Enter the percentage of raised funds that should be allocated
                  to Liquidity on (Min 20%, Max 100%)
                </p>
              </div>
            </>
          )}
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
            classNames={{ value: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Liquidity Type"
            placeholder="Auto Locking"
          >
            <SelectItem
              key={1}
              value={"auto"}
            >
              Manual Locking
            </SelectItem>
            <SelectItem
              key={"manual"}
              value={"manual"}
            >
              Manual Listing
            </SelectItem>
          </Select>
          <div>
            {createPresaleForm?.listingOption === "auto" && (
              <>
                <Select
                  classNames={{ value: "placeholder:text-[#8E8E93]" }}
                  variant="bordered"
                  label="Unsold Tokens Refund Type"
                  placeholder="Refund"
                >
                  <SelectItem
                    key={1}
                    value={"refund"}
                  >
                    Refund
                  </SelectItem>
                </Select>
                <p className="text-[#1C1C1E] text-xs mt-1">
                  Auto Burning can only see selected if the Listing Options is
                  Auto Listing
                </p>
              </>
            )}
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
