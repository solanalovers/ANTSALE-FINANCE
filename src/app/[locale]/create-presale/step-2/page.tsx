"use client";
import CustomDivider from "@/components/CustomDivider";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import { Input, Link, Select, SelectItem } from "@nextui-org/react";
import React, { useContext } from "react";

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
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="number"
            label="Hardcap"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="number"
            label="Minimum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="number"
            label="Maximum buy"
            placeholder="0"
            endContent={<p className="text-sm text-default-500">SOL</p>}
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="date"
            label="Startdate"
            placeholder="0"
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            type="date"
            label="Enddate"
            placeholder="0"
          />
          <Select
            classNames={{ value: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Listing Options"
            placeholder="Manual Listing"
          >
            <SelectItem
              key={1}
              value={1}
            >
              1
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
              value={1}
            >
              1
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
              value={1}
            >
              1
            </SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
}
