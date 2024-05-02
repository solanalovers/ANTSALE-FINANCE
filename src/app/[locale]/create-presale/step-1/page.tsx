"use client";
import CustomDivider from "@/components/CustomDivider";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import { Input, Link, Select, SelectItem } from "@nextui-org/react";
import React, { useContext } from "react";

export default function CreatePresaleStep1() {
  return (
    <div>
      <CustomDivider />
      <div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Token Address"
              placeholder="0x912CE59144191C1204E64559 E8253a0e49E6548"
            />
            <div className="mt-3 flex flex-col gap-y-1">
              <p className="text-xs ledaing-5 text-[#8E8E93]">
                Name: We are going to $0
              </p>
              <p className="text-xs ledaing-5 text-[#8E8E93]">Symbol: 0</p>
              <p className="text-xs ledaing-5 text-[#8E8E93]">Decimals: 5</p>
              <p className="text-xs ledaing-5 text-[#8E8E93]">
                Supply: 223398198040.53727
              </p>
            </div>
          </div>
          <Select
            classNames={{ value: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Currency"
            placeholder="SOL"
            value={'sol'}
          >
            <SelectItem
              key={1}
              value={'sol'}
            >
              SOL
            </SelectItem>
          </Select>
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Creation Fee"
            placeholder="FREE"
          />
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Fee Options"
            placeholder="5% SOL raised only"
          />
          <div>
            <Input
              classNames={{ input: "placeholder:text-[#8E8E93]" }}
              variant="bordered"
              label="Solsale.fi's storyteller (5% SOL raised only)"
              placeholder="9RFFhhe4XPV8UcBFJkgrDwGGtN3jmktBtw4RBia1bBVn"
            />
            <p className="mt-1 text-sm">
            {`How to become a Solsale.fi's storyteller? `}
              <Link
                href=""
                isExternal
                className="text-sm underline"
              >
                Register here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
