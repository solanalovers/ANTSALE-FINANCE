"use client";
import CustomDivider from "@/components/CustomDivider";
import { DatePicker, Input, Link, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { now } from "@internationalized/date";

export default function CreateMultiChainStep2() {
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
            classNames={{ value: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Sale Type"
            placeholder="Fixed a price in USDT"
          >
            <SelectItem
              key={1}
              value={"fixed"}
            >
              Fixed a price in USDT
            </SelectItem>
            <SelectItem
              key={2}
              value={"multi"}
            >
              Fixed multi prices in USDT
            </SelectItem>
            <SelectItem
              key={3}
              value={"based"}
            >
              Distribute based on purchase currency
            </SelectItem>
          </Select>
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
        </div>
      </div>
    </div>
  );
}
