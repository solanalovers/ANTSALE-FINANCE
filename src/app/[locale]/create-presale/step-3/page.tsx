"use client";
import CustomDivider from "@/components/CustomDivider";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import { Input, Link, Select, SelectItem } from "@nextui-org/react";
import React, { useContext } from "react";

export default function CreatePresaleStep3() {
  return (
    <div>
      <CustomDivider />
      <div className="grid grid-cols-2 gap-6">
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="Presale (max is 30% total supply)"
          placeholder="10"
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="DEV team (max is 20% total supply)"
          placeholder="10"
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="FREE claim pool (1-5% total supply)"
          placeholder="1%"
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="FAN pool (0-5% total supply)"
          placeholder="0"
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="Amount of claims"
          placeholder="HOLD 1 SOLSALE, you can claim 1000 SHIBA"
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="Amount per LIKE"
          placeholder="0"
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="KOLs pool (0-5% total supply)"
          placeholder="0"
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="CEX pool (0-5% total supply)"
          placeholder="0"
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="Affiliate pool"
          placeholder="We are currently developing this feature"
          isDisabled
        />
        <Input
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          variant="bordered"
          type="number"
          label="LP Pool"
          placeholder="0"
        />
      </div>
    </div>
  );
}
