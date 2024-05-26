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
import { debounce, isNumber } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { now } from "@internationalized/date";
import { changeForm, requiredField } from "@/function/form";
import { useWallet } from "@solana/wallet-adapter-react";
import { AppContext } from "@/provider/AppProvider";
import { ListingOption, RefundType } from "@/interface/project-interface";

export default function CreatePresaleStep1() {
  const { form, setForm, setNext, checkValidStep1 } =
    useContext(CreatePresaleContext);
  const handleChangeForm = changeForm(setForm);
  const { publicKey } = useWallet();

  const { cluster } = useContext(AppContext);

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

    return await new Promise((resolve) => {
      const debouncedFetch = debounce(() => {
        resolve(
          getTokenData(publicKey?.toString(), form.tokenAddress!, isMainnet)
        );
      }, 1000);

      debouncedFetch();
    });
  };
  useEffect(() => {
    const fetchDataAndLog = async () => {
      const tokenInfo = await fetchData();
      handleChangeForm({ tokenInfo });
    };
    if (form?.tokenAddress) {
      fetchDataAndLog();
    }
  }, [form?.tokenAddress]);

  const calculateAutoListing = () => {
    if (
      form?.hardCap &&
      form?.presaleRate &&
      form?.listingRate &&
      form?.liquidityPercent
    ) {
      const hardCap = parseFloat(form?.hardCap.toString().replace(/,/g, ""));
      const presaleRate = parseFloat(
        form?.presaleRate.toString().replace(/,/g, "")
      );
      const listingRate = parseFloat(
        form?.listingRate.toString().replace(/,/g, "")
      );
      const liquidityPercent = form?.liquidityPercent;

      const total =
        hardCap * presaleRate +
        (hardCap * 0.95 * listingRate * liquidityPercent) / 100;

      return `${total} ${form?.tokenInfo?.name}`;
    } else {
      return "?";
    }
  };

  return (
    <div>
      <CustomDivider />
      <div>
        <div>
          <Input
            {...requiredField(form?.tokenAddress)}
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Token Address"
            placeholder="HG1s2n414ke6yrDi3ZHnbDTHuP2ANMiwuR4DnJRZ6Kqu"
            onChange={(e) => handleChangeForm({ tokenAddress: e.target.value })}
            onBlur={() => {
              if (!form?.tokenAddress) {
                handleChangeForm({ tokenAddress: "" });
              }
            }}
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
                <p className='text-xs leading-5 text-[#8E8E93]'>
                  Total Supply: {form?.tokenInfo?.supply}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Decimals: {form?.tokenInfo?.decimals}
                </p>
                <p className='text-xs leading-5 text-[#8E8E93]'>
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
              handleChangeForm({ feeOption: e.target.value });
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
            defaultValue="auto"
            className={"text-sm leading-5"}
            onChange={(e) =>
              handleChangeForm({ listingOption: e.target.value })
            }
            value={form?.listingOption}
          >
            <Radio value={ListingOption.AutoListing}>
              <p className={"text-sm leading-5"}>Auto Listing</p>
            </Radio>
            <Radio value={ListingOption.ManualListing}>
              <p className={"text-sm leading-5"}>Manual Listing</p>
            </Radio>
          </RadioGroup>
        </div>
        <div className="rounded-lg overflow-hidden">
          <ToastItem
            content={
              form?.listingOption === ListingOption.AutoListing
                ? "For auto listing, after you finalize the pool your token will be auto listed on DEX"
                : "For manual listing, AntSale won't charge tokens for liquidity.</br>You may withdraw SOL after the pool ends then do DEX listing yourself."
            }
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
          <div>
            <Input
              {...requiredField(form?.presaleRate)}
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="PRESALE rate"
              placeholder="0"
              value={form?.presaleRate?.toString()}
              onBlur={() => {
                if (form?.presaleRate) {
                  handleChangeForm({
                    presaleRate: Number(form?.presaleRate)?.toLocaleString(),
                  });
                } else {
                  handleChangeForm({ presaleRate: "" });
                }
              }}
              onFocus={() => {
                if (form?.presaleRate) {
                  handleChangeForm({
                    presaleRate: parseFloat(
                      form?.presaleRate?.toString().replace(/,/g, "")
                    ),
                  });
                }
              }}
              onChange={(e) => {
                if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
                  handleChangeForm({
                    presaleRate: e.target.value,
                  });
                } else {
                  e.target.value = "";
                }
              }}
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              1 SOL ={" "}
              {`${
                form?.presaleRate && form?.tokenInfo?.name
                  ? `${form?.presaleRate} ${form?.tokenInfo?.name}`
                  : "?"
              } `}{" "}
              <br />
              If I spend 1 SOL on how many tokens will i receive?
            </p>
          </div>
          <div>
            {form?.listingOption === "Auto Listing" && (
              <>
                <Input
                  {...requiredField(form?.listingRate)}
                  classNames={{ input: "placeholder:text-[#8E8E93]" }}
                  variant="bordered"
                  label="LISTING rate"
                  placeholder="0"
                  onBlur={() => {
                    if (form?.listingRate) {
                      handleChangeForm({
                        listingRate: Number(
                          form?.listingRate
                        )?.toLocaleString(),
                      });
                    } else {
                      handleChangeForm({ listingRate: "" });
                    }
                  }}
                  onFocus={() => {
                    if (form?.listingRate) {
                      handleChangeForm({
                        listingRate: parseFloat(
                          form?.listingRate?.toString().replace(/,/g, "")
                        ),
                      });
                    }
                  }}
                  onChange={(e) => {
                    if (
                      !e.target.value ||
                      !Number.isNaN(Number(e.target.value))
                    ) {
                      handleChangeForm({
                        listingRate: e.target.value,
                      });
                    } else {
                      e.target.value = "";
                    }
                  }}
                  value={form?.listingRate?.toString()}
                />

                <p className="text-[#1C1C1E] text-xs mt-1">
                  1 SOL ={" "}
                  {`${
                    form?.listingRate && form?.tokenInfo?.name
                      ? `${form?.listingRate} ${form?.tokenInfo?.name}`
                      : "?"
                  } `}
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
              {...requiredField(form?.softCap)}
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Softcap"
              placeholder="0"
              onBlur={() => {
                if (form?.softCap) {
                  handleChangeForm({
                    softCap: Number(form?.softCap)?.toLocaleString(),
                  });
                } else {
                  handleChangeForm({ softCap: "" });
                }
              }}
              onFocus={() => {
                if (form?.softCap) {
                  handleChangeForm({
                    softCap: parseFloat(form?.softCap.toString().replace(/,/g, "")),
                  });
                }
              }}
              onChange={(e) => {
                if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
                  handleChangeForm({
                    softCap: e.target.value,
                  });
                } else {
                  e.target.value = "";
                }
              }}
              value={form?.softCap?.toString()}
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              Softcap must be greater than or equals 20% of Hardcap
            </p>
          </div>
          <Input
            {...requiredField(form?.hardCap)}
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Hardcap"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={() => {
              if (form?.hardCap) {
                handleChangeForm({
                  hardCap: Number(form?.hardCap)?.toLocaleString(),
                });
              } else {
                handleChangeForm({
                  hardCap: "",
                });
              }
            }}
            onFocus={() => {
              if (form?.hardCap) {
                handleChangeForm({
                  hardCap: parseFloat(form?.hardCap.toString().replace(/,/g, "")),
                });
              }
            }}
            onChange={(e) => {
              if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
                handleChangeForm({
                  hardCap: e.target.value,
                });
              } else {
                e.target.value = "";
              }
            }}
            value={form?.hardCap?.toString()}
          />
          <Input
            {...requiredField(form?.minBuy)}
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Minimum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={() => {
              if (form?.minBuy) {
                handleChangeForm({
                  minBuy: Number(form?.minBuy)?.toLocaleString(),
                });
              } else {
                handleChangeForm({ minBuy: "" });
              }
            }}
            onFocus={() => {
              if (form?.minBuy) {
                handleChangeForm({
                  minBuy: parseFloat(form?.minBuy?.toString().replace(/,/g, "")),
                });
              }
            }}
            onChange={(e) => {
              if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
                handleChangeForm({
                  minBuy: e.target.value,
                });
              } else {
                e.target.value = "";
              }
            }}
            value={form?.minBuy?.toString()}
          />
          <Input
            {...requiredField(form?.maxBuy)}
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Maximum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={() => {
              if (form?.maxBuy) {
                handleChangeForm({
                  maxBuy: Number(form?.maxBuy)?.toLocaleString(),
                });
              } else {
                handleChangeForm({ maxBuy: "" });
              }
            }}
            onFocus={() => {
              if (form?.maxBuy) {
                handleChangeForm({
                  maxBuy: parseFloat(form?.maxBuy?.toString().replace(/,/g, "")),
                });
              }
            }}
            onChange={(e) => {
              if (!e.target.value || !Number.isNaN(Number(e.target.value))) {
                handleChangeForm({
                  maxBuy: e.target.value,
                });
              } else {
                e.target.value = "";
              }
            }}
            value={form?.maxBuy?.toLocaleString()}
          />
          {form?.listingOption === "Auto Listing" && (
            <>
              <Select
                classNames={{
                  value: `placeholder:text-[#8E8E93] ${
                    form?.router && "text-black"
                  }`,
                }}
                variant="bordered"
                label="Router"
                placeholder="RaydiumAmmV4"
                onChange={(e) => {
                  if (e.target.value) {
                    handleChangeForm({ router: e.target.value });
                  }
                }}
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
                  type="number"
                  max={100}
                  onChange={(e) => {
                    if (e.target.value) {
                      handleChangeForm({ liquidityPercent: e.target.value });
                    }
                  }}
                  onBlur={() => {
                    if (!form?.liquidityPercent) {
                      handleChangeForm({ liquidityPercent: "" });
                    }
                  }}
                  value={form?.liquidityPercent?.toString()}
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
            onChange={(e) => {
              if (e) {
                handleChangeForm({ startTime: e });
              }
            }}
            value={form?.startTime}
          />
          <DatePicker
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            label="End Time (UTC)"
            variant="bordered"
            showMonthAndYearPickers
            defaultValue={now("Etc/Universal")}
            onChange={(e) => {
              if (e) {
                handleChangeForm({ endTime: e });
              }
            }}
            value={form?.endTime}
          />
          {form?.listingOption === "Auto Listing" && (
            <>
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
                  endContent={
                    <p className="text-sm text-default-500">Minutes</p>
                  }
                  onChange={(e) => {
                      handleChangeForm({ liquidityLockupTime: e.target.value });
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
            </>
          )}
          <div>
            <Select
              classNames={{
                value: `placeholder:text-[#8E8E93] ${
                  form?.refundType && "text-black"
                }`,
              }}
              variant="bordered"
              label="Unsold Tokens Refund Type"
              placeholder="Refund"
              onChange={(e) => {
                if (e.target.value) {
                  handleChangeForm({ refundType: e.target.value });
                }
              }}
              selectedKeys={form?.refundType ? [form?.refundType] : undefined}
              selectionMode="single"
            >
              <SelectItem
                key={RefundType.Refund}
                value={RefundType.Refund}
              >
                Refund
              </SelectItem>
              <SelectItem
                key={RefundType.Burn}
                value={RefundType.Burn}
              >
                Burn
              </SelectItem>
            </Select>
            {form?.listingOption === ListingOption.AutoListing && (
              <p className="text-[#1C1C1E] text-xs mt-1">
                Auto Burning can only see selected if the Listing Options is
                Auto Listing
              </p>
            )}
          </div>
        </div>
        <div className="rounded-lg overflow-hidden mt-6">
          <ToastItem
            status="info"
            content={`Need <span class='font-bold'>${calculateAutoListing()}</span> to create launchpad`}
          />
        </div>
      </div>
    </div>
  );
}
