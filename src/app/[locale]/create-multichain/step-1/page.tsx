"use client";
import CustomDivider from "@/components/CustomDivider";
import { currencyList } from "@/constant/network";
import { CreateMultiChainContext } from "@/provider/CreateMultiChainProvider";
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
        value={value}
        onChange={(e: any) =>
          setValue((prev: any) => ({
            ...prev,
            multiWallet: { [image]: e.target.value },
          }))
        }
      />
    </div>
  );
};

export default function CreateMultiChainStep1() {
  const { createMultiChainForm, setCreateMultiChainForm } = useContext(
    CreateMultiChainContext
  );
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
                  key={idx}
                  image={item.image}
                  name={item.name}
                  value={setCreateMultiChainForm?.multiWallet?.[item.image]}
                  setValue={setCreateMultiChainForm}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
