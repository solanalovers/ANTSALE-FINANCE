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
  Spinner,
} from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { getTokenData } from "@/function/token";
import { now } from "@internationalized/date";
import { CreateFairLaunchContext } from "@/provider/CreateFairLaunchProvider";
import { changeForm } from "@/function/form";
import { AppContext } from "@/provider/AppProvider";
import { useWallet } from "@solana/wallet-adapter-react";
import { LiquidityType, ListingOption } from "@/interface/project-interface";

export default function CreateFairLaunchStep1() {
  const { form, setForm, setNext, checkValidStep1 } = useContext(
    CreateFairLaunchContext
  );
  const { publicKey } = useWallet();
  const [loading, setLoading] = useState(false);

  const { cluster } = useContext(AppContext);
  const handleChangeForm = changeForm(setForm);

  useEffect(() => {
    if (checkValidStep1(form)) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [form]);

  const fetchData = async () => {
    const isMainnet = cluster === 1;

    if (!publicKey) {
      return {};
    }

    return getTokenData(publicKey?.toString(), form.tokenAddress!, isMainnet);
  };

  useEffect(() => {
    const fetchDataAndLog = async () => {
      setLoading(true);
      const tokenInfo = await fetchData();
      setLoading(false);
      handleChangeForm({ tokenInfo });
    };

    if (form?.tokenAddress) {
      fetchDataAndLog();
    }
  }, [form?.tokenAddress]);

  const calculateAutoListing = () => {
    if (form.totalSellingAmount && form.tokenInfo && form.liquidityPercent) {
      const total = (
        form.totalSellingAmount +
        (form.totalSellingAmount * form.liquidityPercent * 0.95) / 100
      ).toLocaleString();

      return `${total} ${form?.tokenInfo?.name}`;
    }
    return "?";
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
            placeholder="4LU6qSioai7RSwSBaNErE4pcj6z7dCtUY2UTNHXstxsg"
            onChange={(e) => handleChangeForm({ tokenAddress: e.target.value })}
            endContent={
              <>
                {loading && (
                  <Spinner
                    color="primary"
                    size="sm"
                  />
                )}
              </>
            }
          />
          <div className="mt-2 flex flex-col gap-y-1">
            <p className="text-xs leading-5 font-semibold text-[#8E8E93]">
              Creation fee: FREE
            </p>
            {form?.tokenInfo && (
              <>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Name: {form?.tokenInfo?.name}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Symbol: {form?.tokenInfo?.symbol}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Total Supply: {form?.tokenInfo?.supply?.toLocaleString()}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Decimals: {form?.tokenInfo?.decimals}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Your balance: {form?.tokenInfo?.balance}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="my-6 flex flex-col gap-y-6">
          <RadioGroup
            label="Currency"
            className={"text-sm leading-5"}
            value={form?.currency}
            onChange={(e) => {
              handleChangeForm({ currency: e.target.value });
            }}
          >
            <Radio value="SOL">
              <p className={"text-sm leading-5"}>
                SOL (User will pay with SOL for your token)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label="Fee options"
            className={"text-sm leading-5"}
            value={form?.feeOption?.toString()}
            onChange={(e) => {
              handleChangeForm({ feeOption: Number(e.target.value) });
            }}
          >
            <Radio value="5">
              <p className={"text-sm leading-5"}>
                5% SOL raised only (no hidden fees)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label="Listing Options"
            className={"text-sm leading-5"}
            onChange={(e) =>
              handleChangeForm({ listingOption: Number(e.target.value) })
            }
            value={form?.listingOption}
          >
            <Radio value={ListingOption.AutoListing}>
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
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                form?.saleType && "text-black"
              }`,
            }}
            variant="bordered"
            label="Sale Type"
            placeholder="Public"
            onChange={(e) => {
              if (e.target.value) {
                handleChangeForm({ saleType: e.target.value });
              }
            }}
            value={form?.saleType}
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
            onBlur={() => {
              if (form?.totalSellingAmount) {
                handleChangeForm({
                  presaleRate: Number(
                    form?.totalSellingAmount
                  )?.toLocaleString(),
                });
              }
            }}
            onFocus={() => {
              if (form?.totalSellingAmount) {
                handleChangeForm({
                  totalSellingAmount: parseFloat(
                    form?.totalSellingAmount?.toString()?.replace(/,/g, "")
                  ),
                });
              }
            }}
            onChange={(e) => {
              if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
                handleChangeForm({
                  totalSellingAmount: Number(e.target.value),
                });
              } else {
                e.target.value = "";
              }
            }}
            value={form?.totalSellingAmount?.toString()}
          />
          <div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Softcap"
              placeholder="0"
              endContent={<p className="text-sm text-default-500">SOL</p>}
              onBlur={() => {
                if (form?.softCap) {
                  handleChangeForm({
                    presaleRate: Number(form?.softCap)?.toLocaleString(),
                  });
                }
              }}
              onFocus={() => {
                if (form?.softCap) {
                  handleChangeForm({
                    softCap: parseFloat(
                      form?.softCap?.toString()?.replace(/,/g, "")
                    ),
                  });
                }
              }}
              onChange={(e) => {
                if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
                  handleChangeForm({
                    softCap: Number(e.target.value),
                  });
                } else {
                  e.target.value = "";
                }
              }}
              value={form?.softCap?.toString()}
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
          value={form?.isMaxBuy?.toString()}
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
          isDisabled={!form?.isMaxBuy}
          onBlur={() => {
            if (form?.maxBuy) {
              handleChangeForm({
                maxBuy: Number(form?.maxBuy)?.toLocaleString(),
              });
            }
          }}
          onFocus={() => {
            if (form?.maxBuy) {
              handleChangeForm({
                presaleRate: parseFloat(
                  form?.maxBuy?.toString()?.replace(/,/g, "")
                ),
              });
            }
          }}
          onChange={(e) => {
            if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
              handleChangeForm({
                maxBuy: Number(e.target.value),
              });
            } else {
              e.target.value = "";
            }
          }}
          value={form?.maxBuy?.toString()}
        />
        <div className="grid grid-cols-2 gap-6 mt-6">
          <Select
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                form?.router && "text-black"
              }`,
            }}
            variant="bordered"
            label="Router"
            placeholder="RaydiumAmmV4"
            onChange={(e) => handleChangeForm({ router: e.target.value })}
            value={form?.router}
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
              onChange={(e) =>
                handleChangeForm({ liquidityPercent: Number(e.target.value) })
              }
              value={form?.liquidityPercent?.toString()}
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
            onChange={(e) => handleChangeForm({ startTime: e })}
            value={form?.startTime}
          />
          <DatePicker
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            label="End Time (UTC)"
            variant="bordered"
            showMonthAndYearPickers
            defaultValue={now("Etc/Universal")}
            onChange={(e) => handleChangeForm({ endTime: e })}
            value={form?.endTime}
          />
          <Select
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                form?.liquidityType && "text-black"
              }`,
            }}
            variant="bordered"
            label="Liquidity Type"
            placeholder="Auto Listing"
            onChange={(e) => {
              if (e.target.value) {
                handleChangeForm({ liquidityType: e.target.value });
              }
            }}
            value={form?.liquidityType}
          >
            <SelectItem
              key={"Auto Locking"}
              value={"Auto Locking"}
            >
              Auto Locking
            </SelectItem>
            <SelectItem
              key={"Auto Burning"}
              value={"Auto Burning"}
            >
              Auto Burning
            </SelectItem>
          </Select>
          <div>
            <Input
              // {...requiredField(form?.liquidityLockupTime)}
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Liquidity Lockup Time"
              placeholder="0"
              isDisabled={form?.liquidityType === "Auto Burning"}
              isRequired
              type="number"
              min={43200}
              errorMessage={'Value must be greater than or equal 43200 minutes (30 days)'}
              endContent={<p className="text-sm text-default-500">Minutes</p>}
              onChange={(e) => {
                handleChangeForm({
                  liquidityLockupTime: Number(e.target.value),
                });
              }}
              onBlur={() => {
                if (!form?.liquidityLockupTime) {
                  handleChangeForm({ liquidityLockupTime: "" });
                }
              }}
              value={form?.liquidityLockupTime?.toString()}
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              Liquidity lock up time must be greater than 30 days
            </p>
          </div>
        </div>
        {form?.tokenInfo?.name && (
          <div className="rounded-lg overflow-hidden mt-6">
            <ToastItem
              status="info"
              content={`Need <span class='font-bold'>${calculateAutoListing()}</span> to create launchpad`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
