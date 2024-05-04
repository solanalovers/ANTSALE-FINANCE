import { ArrowDownIcon } from "@/components/Icon";
import { currencyList, currencyShortName } from "@/constant/network";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Image,
} from "@nextui-org/react";
import React from "react";

export default function CurrencySelect({ currency, setCurrency }: any) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          size="lg"
          variant="bordered"
          className="w-full"
          endContent={
            <ArrowDownIcon
              color="#000000"
              size="24"
            />
          }
        >
          <Image
            src={`/image/multi-chain/${currency}.png`}
            className="w-6 h-6 object-cover object-center"
          />
          <div className="flex">{currencyShortName[currency]}</div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {currencyList.map((item: any, idx: number) => (
          <DropdownItem
            key={idx}
            onClick={() => setCurrency(item.image)}
          >
            <div className="flex gap-2 items-center w-[250px]">
              <Image
                src={`/image/multi-chain/${item.image}.png`}
                className="w-6 h-6 object-cover object-center"
              />
              <p>{item.name}</p>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
