"use client";
import CustomDivider from "@/components/CustomDivider";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import { DatePicker, Input, Link, Select, SelectItem } from "@nextui-org/react";
import React, { useContext } from "react";
import {
  now,
  getLocalTimeZone,
  parseZonedDateTime,
} from "@internationalized/date";

export default function CreatePresaleStep2() {
  return (
    <div>
      <CustomDivider />
      <div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="number"
            label="Softcap"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={(e: any) => {
              const value = parseFloat(e.target.value);
              const roundedValue = Math.round(value);
              e.target.value = roundedValue.toString();
              if (Number(e.target.value) < 0) {
                e.target.value = 0;
              }
            }}
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="number"
            label="Hardcap"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={(e: any) => {
              const value = parseFloat(e.target.value);
              const roundedValue = Math.round(value);
              e.target.value = roundedValue.toString();
              if (Number(e.target.value) < 0) {
                e.target.value = 0;
              }
            }}
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="number"
            label="Minimum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={(e: any) => {
              const value = parseFloat(e.target.value);
              const roundedValue = Math.round(value);
              e.target.value = roundedValue.toString();
              if (Number(e.target.value) < 0) {
                e.target.value = 0;
              }
            }}
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="number"
            label="Maximum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
            onBlur={(e: any) => {
              const value = parseFloat(e.target.value);
              const roundedValue = Math.round(value);
              e.target.value = roundedValue.toString();
              if (Number(e.target.value) < 0) {
                e.target.value = 0;
              }
            }}
          />
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
            <SelectItem
              key={1}
              value={"auto"}
            >
              Auto Listing
            </SelectItem>
          </Select>
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
              value={"manual"}
            >
              Manual Burning
            </SelectItem>
            <SelectItem
              key={2}
              value={"auto"}
            >
              Auto Burning
            </SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
//
