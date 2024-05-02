"use client";
import CustomDivider from "@/components/CustomDivider";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import {
  Checkbox,
  Image,
  Input,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useContext, useState } from "react";

const currencyList = [
  {
    image: "eth",
    name: "Ethereum (ETH)",
  },
  {
    image: "bnb",
    name: "BNB Chain (BNB)",
  },
  {
    image: "sol",
    name: "Solona (SOL)",
  },
  {
    image: "base",
    name: "Base (BASE)",
  },
  {
    image: "polygon",
    name: "Polygon (MATIC)",
  },
  {
    image: "avax",
    name: "Avalanche (AVAX)",
  },
  {
    image: "ton",
    name: "Toncoin (TON)",
  },
  {
    image: "arb",
    name: "Arbitrum (ARB)",
  },
  {
    image: "trx",
    name: "TRON (TRX)",
  },
];

const CurrencySelect = ({ image, name, value, setValue }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex gap-4 items-center">
      <Checkbox
        onChange={(e) => setIsActive(e.target.checked)}
        checked={isActive}
        className="w-full"
      />
      <div className="flex gap-2 items-center w-[250px]">
        <Image
          src={`/image/multi-chain/${image}.png`}
          className="w-6 h-6 object-cover object-center"
        />
        <p className="">{name}</p>
      </div>
      <Input
        classNames={{ input: "placeholder:text-[#8E8E93]" }}
        variant="bordered"
        placeholder="Your address to receive fund"
        isDisabled={!isActive}
      />
    </div>
  );
};

export default function CreateMultiChainStep1() {
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
            value={"sol"}
          >
            <SelectItem
              key={1}
              value={"sol"}
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
            <p>Currency</p>
            <div className="flex flex-col gap-2">
              {currencyList.map((item: any, idx: number) => (
                <CurrencySelect
                  image={item.image}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
