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

export default function CreatePresaleStep1() {
  const { createPresaleForm, setCreatePresaleForm } =
    useContext(CreatePresaleContext);
  const handleChangeForm = changeForm(setCreatePresaleForm);
  const fetchData = async () => {
    return await new Promise((resolve) => {
      const debouncedFetch = debounce(() => {
        resolve(getTokenData(createPresaleForm?.tokenAddress));
      }, 1000);

      debouncedFetch();
    });
  };
  useEffect(() => {
    const fetchDataAndLog = async () => {
      const tokenInfo = await fetchData();
      handleChangeForm({ tokenInfo });
    };
    if (createPresaleForm?.tokenAddress) {
      fetchDataAndLog();
    }
  }, [createPresaleForm?.tokenAddress]);

  const calculateAutoListing = () => {
    if (
      createPresaleForm?.hardCap &&
      createPresaleForm?.presaleRate &&
      createPresaleForm?.listingRate &&
      createPresaleForm?.liquidityPercent
    ) {
      const hardCap = parseFloat(createPresaleForm?.hardCap.replace(/,/g, ""));
      const presaleRate = parseFloat(
        createPresaleForm?.presaleRate.replace(/,/g, "")
      );
      const listingRate = parseFloat(
        createPresaleForm?.listingRate.replace(/,/g, "")
      );
      const liquidityPercent = createPresaleForm?.liquidityPercent;

      const total =
        hardCap * presaleRate +
        (hardCap * 0.95 * listingRate * liquidityPercent) / 100;

      return `${total} ${createPresaleForm?.tokenInfo?.name}`;
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
            {...requiredField(createPresaleForm?.tokenAddress)}
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Token Address"
            placeholder="0x912CE59144191C1204E64559 E8253a0e49E6548"
            onChange={(e) => handleChangeForm({ tokenAddress: e.target.value })}
            onBlur={() => {
              if (!createPresaleForm?.tokenAddress) {
                handleChangeForm({ tokenAddress: "" });
              }
            }}
          />
          <div className="mt-2 flex flex-col gap-y-1">
            <p className="text-xs leading-5 font-semibold text-[#8E8E93]">
              Creation fee: FREE
            </p>
            {createPresaleForm?.tokenInfo && (
              <>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Name: {createPresaleForm?.tokenInfo?.name}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Symbol: {createPresaleForm?.tokenInfo?.symbol}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Total Supply: 223398198040.53727
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Decimals: {createPresaleForm?.tokenInfo?.decimals}
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
            className={"text-sm leading-5"}
            value={createPresaleForm?.currency}
            onChange={(e) => {
              handleChangeForm({ currency: e.target.value });
            }}
          >
            <Radio value="sol">
              <p className={"text-sm leading-5"}>
                SOL (User will pay with SOL for your token)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label="Fee options"
            className={"text-sm leading-5"}
            value={createPresaleForm?.feeOption}
            onChange={(e) => {
              handleChangeForm({ feeOption: e.target.value });
            }}
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
              handleChangeForm({ listingOption: e.target.value })
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
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                createPresaleForm?.saleType && "text-black"
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
            value={createPresaleForm?.saleType}
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
              {...requiredField(createPresaleForm?.presaleRate)}
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="PRESALE rate"
              placeholder="0"
              value={createPresaleForm?.presaleRate}
              onBlur={() => {
                if (createPresaleForm?.presaleRate) {
                  handleChangeForm({
                    presaleRate: Number(
                      createPresaleForm?.presaleRate
                    )?.toLocaleString(),
                  });
                } else {
                  handleChangeForm({ presaleRate: "" });
                }
              }}
              onFocus={() => {
                if (createPresaleForm?.presaleRate) {
                  handleChangeForm({
                    presaleRate: parseFloat(
                      createPresaleForm?.presaleRate.replace(/,/g, "")
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
                createPresaleForm?.presaleRate &&
                createPresaleForm?.tokenInfo?.name
                  ? `${createPresaleForm?.presaleRate} ${createPresaleForm?.tokenInfo?.name}`
                  : "?"
              } `}{" "}
              <br />
              If I spend 1 SOL on how many tokens will i receive?
            </p>
          </div>
          <div>
            {createPresaleForm?.listingOption === "auto" && (
              <>
                <Input
                  {...requiredField(createPresaleForm?.listingRate)}
                  classNames={{ input: "placeholder:text-[#8E8E93]" }}
                  variant="bordered"
                  label="LISTING rate"
                  placeholder="0"
                  onBlur={() => {
                    if (createPresaleForm?.listingRate) {
                      handleChangeForm({
                        listingRate: Number(
                          createPresaleForm?.listingRate
                        )?.toLocaleString(),
                      });
                    } else {
                      handleChangeForm({ listingRate: "" });
                    }
                  }}
                  onFocus={() => {
                    if (createPresaleForm?.listingRate) {
                      handleChangeForm({
                        listingRate: parseFloat(
                          createPresaleForm?.listingRate.replace(/,/g, "")
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
                  value={createPresaleForm?.listingRate}
                />

                <p className="text-[#1C1C1E] text-xs mt-1">
                  1 SOL ={" "}
                  {`${
                    createPresaleForm?.presaleRate &&
                    createPresaleForm?.tokenInfo?.name
                      ? `${createPresaleForm?.presaleRate} ${createPresaleForm?.tokenInfo?.name}`
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
              {...requiredField(createPresaleForm?.softCap)}
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Softcap"
              placeholder="0"
              onBlur={() => {
                if (createPresaleForm?.softCap) {
                  handleChangeForm({
                    softCap: Number(
                      createPresaleForm?.softCap
                    )?.toLocaleString(),
                  });
                } else {
                  handleChangeForm({ softCap: "" });
                }
              }}
              onFocus={() => {
                if (createPresaleForm?.softCap) {
                  handleChangeForm({
                    softCap: parseFloat(
                      createPresaleForm?.softCap.replace(/,/g, "")
                    ),
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
              value={createPresaleForm?.softCap}
            />
            <p className="text-[#1C1C1E] text-xs mt-1">
              Softcap must be greater than or equals 20% of Hardcap
            </p>
          </div>
          <Input
            {...requiredField(createPresaleForm?.hardCap)}
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Hardcap"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={() => {
              if (createPresaleForm?.hardCap) {
                handleChangeForm({
                  hardCap: Number(createPresaleForm?.hardCap)?.toLocaleString(),
                });
              } else {
                handleChangeForm({
                  hardCap: "",
                });
              }
            }}
            onFocus={() => {
              if (createPresaleForm?.hardCap) {
                handleChangeForm({
                  hardCap: parseFloat(
                    createPresaleForm?.hardCap.replace(/,/g, "")
                  ),
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
            value={createPresaleForm?.hardCap}
          />
          <Input
            {...requiredField(createPresaleForm?.minBuy)}
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Minimum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={() => {
              if (createPresaleForm?.minBuy) {
                handleChangeForm({
                  minBuy: Number(createPresaleForm?.minBuy)?.toLocaleString(),
                });
              } else {
                handleChangeForm({ minBuy: "" });
              }
            }}
            onFocus={() => {
              if (createPresaleForm?.minBuy) {
                handleChangeForm({
                  minBuy: parseFloat(
                    createPresaleForm?.minBuy.replace(/,/g, "")
                  ),
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
            value={createPresaleForm?.minBuy}
          />
          <Input
            {...requiredField(createPresaleForm?.maxBuy)}
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Maximum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={() => {
              if (createPresaleForm?.maxBuy) {
                handleChangeForm({
                  maxBuy: Number(createPresaleForm?.maxBuy)?.toLocaleString(),
                });
              } else {
                handleChangeForm({ maxBuy: "" });
              }
            }}
            onFocus={() => {
              if (createPresaleForm?.maxBuy) {
                handleChangeForm({
                  maxBuy: parseFloat(
                    createPresaleForm?.maxBuy.replace(/,/g, "")
                  ),
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
            value={createPresaleForm?.maxBuy}
          />
          {createPresaleForm?.listingOption === "auto" && (
            <>
              <Select
                classNames={{
                  value: `placeholder:text-[#8E8E93] ${
                    createPresaleForm?.router && "text-black"
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
                value={createPresaleForm?.router}
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
                    if (!createPresaleForm?.liquidityPercent) {
                      handleChangeForm({ liquidityPercent: "" });
                    }
                  }}
                  value={createPresaleForm?.liquidityPercent}
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
            value={createPresaleForm?.startTime}
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
            value={createPresaleForm?.endTime}
          />
          {createPresaleForm?.listingOption === "auto" && (
            <>
              <Select
                classNames={{
                  value: `placeholder:text-[#8E8E93] ${
                    createPresaleForm?.liquidityType && "text-black"
                  }`,
                }}
                variant="bordered"
                label="Liquidity Type"
                placeholder="Auto Locking"
                onChange={(e) => {
                  if (e.target.value) {
                    handleChangeForm({ liquidityType: e.target.value });
                  }
                }}
                value={createPresaleForm?.liquidityType}
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
                  {...requiredField(createPresaleForm?.liquidityLockupTime)}
                  classNames={{ input: "placeholder:text-[#8E8E93]" }}
                  variant="bordered"
                  label="Liquidity Lockup Time"
                  isDisabled={createPresaleForm?.liquidityType === "auto"}
                  placeholder="0"
                  endContent={
                    <p className="text-sm text-default-500">Minutes</p>
                  }
                  onChange={(e) => {
                    if (e.target.value) {
                      handleChangeForm({ liquidityLockupTime: e.target.value });
                    }
                  }}
                  onBlur={() => {
                    if (!createPresaleForm?.liquidityLockupTime) {
                      handleChangeForm({ liquidityLockupTime: "" });
                    }
                  }}
                  value={createPresaleForm?.liquidityLockupTime}
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
                  createPresaleForm?.refundType && "text-black"
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
              selectedKeys={
                createPresaleForm?.refundType
                  ? [createPresaleForm?.refundType]
                  : undefined
              }
              selectionMode="single"
            >
              <SelectItem
                key={"refund"}
                value={"refund"}
              >
                Refund
              </SelectItem>
              <SelectItem
                key={"burn"}
                value={"burn"}
              >
                Burn
              </SelectItem>
            </Select>
            {createPresaleForm?.listingOption === "auto" && (
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
