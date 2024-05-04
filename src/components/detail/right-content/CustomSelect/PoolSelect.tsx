import { ArrowDownIcon } from "@/components/Icon";
import { currencyList, currencyShortName } from "@/constant/network";
import { poolList } from "@/constant/pool";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Image,
  Chip,
} from "@nextui-org/react";
import React from "react";

export default function PoolSelect({ pool, setPool, info }: any) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          size="lg"
          variant={undefined}
          className="bg-['none'] w-full"
          endContent={
            <ArrowDownIcon
              color="#000000"
              size="24"
            />
          }
        >
          <Chip
            size="sm"
            className="bg-blue-100 text-primary font-semibold"
          >
            Pool {pool}
          </Chip>
          {!info && (
            <p className="text-base leading-5 font-semibold">
              1 SHIBA = {poolList[pool].value} USDT
            </p>
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disabledKeys={
          poolList.map((item, idx) => {
            return item.status === "sold out" && idx.toString();
          }) as any
        }
      >
        {poolList.map((item: any, idx: number) => (
          <DropdownItem
            onClick={() => setPool(idx + 1)}
            key={idx}
          >
            <div className="flex gap-5">
              <p>Pool {idx + 1}</p>
              {!info && <p>1 SHIBA = {item.value} USDT</p>}
              <Chip
                size="sm"
                className={`
                ${item.status === "sold out" && "bg-pink-100 text-[#EA3354]"}
                ${item.status === "on sale" && "bg-green-100 text-green-600"}
                ${
                  item.status === "coming soon" &&
                  "bg-orange-100 text-orange-600"
                }
                 ml-auto`}
              >
                {item.status.toUpperCase()}
              </Chip>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
