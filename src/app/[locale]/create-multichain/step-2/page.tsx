"use client";
import CustomDivider from "@/components/CustomDivider";
import { DatePicker, Input, Link, Select, SelectItem } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { now } from "@internationalized/date";
import { CreateMultiChainContext } from "@/provider/CreateMultiChainProvider";
import { currencyShortName } from "@/constant/network";

export default function CreateMultiChainStep2() {
  const { createMultiChainForm, setCreateMultiChainForm } = useContext(
    CreateMultiChainContext
  );
  return (
    <div>
      <CustomDivider />
      <div>
        <div className="grid grid-cols-2 gap-6">
          <DatePicker
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            label="Startdate"
            variant="bordered"
            showMonthAndYearPickers
            defaultValue={now("Etc/Universal")}
          />
          <DatePicker
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            label="Enddate"
            variant="bordered"
            showMonthAndYearPickers
            defaultValue={now("Etc/Universal")}
          />
          <Select
            classNames={{ value: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Listing Options"
            placeholder="Manual Listing"
          >
            <SelectItem
              key={1}
              value={"manual"}
            >
              Manual Listing
            </SelectItem>
          </Select>
          <div className="grid grid-cols-2 gap-6">
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
            <Select
              classNames={{ value: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Liquidity Type"
              placeholder="Manual Burning"
            >
              <SelectItem
                key={1}
                value={"burn"}
              >
                Manual Burning
              </SelectItem>
              <SelectItem
                key={2}
                value={"lock"}
              >
                Manual Locking
              </SelectItem>
            </Select>
          </div>
          <Select
            classNames={{
              value: `${
                createMultiChainForm?.priceModel
                  ? "text-black"
                  : "text-[#8E8E93]"
              }`,
            }}
            variant="bordered"
            label="Price Model"
            placeholder="Fixed a price in USDT"
            onChange={(e) =>
              setCreateMultiChainForm((prev: any) => ({
                ...prev,
                priceModel: e.target.value,
              }))
            }
            value={createMultiChainForm?.priceModel}
          >
            <SelectItem
              key={"fixed-price"}
              value={"fixed-price"}
            >
              Fixed a price in USDT
            </SelectItem>
            <SelectItem
              key={"multi-price"}
              value={"multi-price"}
            >
              Fixed multi prices in USDT
            </SelectItem>
            <SelectItem
              key={"purchase-currency"}
              value={"purchase-currency"}
            >
              Distribute based on purchase currency
            </SelectItem>
          </Select>
          {createMultiChainForm?.priceModel === "fixed-price" && (
            <div className="grid grid-cols-2 gap-6">
              <Input
                classNames={{ input: "placeholder:text-[#8E8E93]" }}
                variant="bordered"
                type="number"
                label="Price per token (USDT)"
                placeholder="0"
              />
              <Input
                classNames={{ input: "placeholder:text-[#8E8E93]" }}
                variant="bordered"
                type="number"
                label="Token amount for presale"
                placeholder="0"
                isDisabled
              />
            </div>
          )}
          {createMultiChainForm?.priceModel === "purchase-currency" && (
            <div className="flex flex-col gap-y-3">
              {createMultiChainForm?.multiWallet &&
                Object.entries(createMultiChainForm?.multiWallet).map(
                  ([key]: any, idx: number) => (
                    <Input
                      classNames={{ input: "placeholder:text-[#8E8E93]" }}
                      variant="bordered"
                      type="number"
                      label={`${currencyShortName[key]} pool - Amount of Token`}
                      placeholder="0"
                      key={idx}
                    />
                  )
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
