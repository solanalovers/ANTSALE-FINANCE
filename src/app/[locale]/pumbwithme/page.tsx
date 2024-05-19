"use client";
import Drawer from "@/components/Drawer";
import PumpFilter from "@/components/pumpwithme/PumpFilter";
import PumpHeader from "@/components/pumpwithme/PumpHeader";
import PumpKingOfHillCard from "@/components/pumpwithme/PumpKingOfHillCard";
import PumpList from "@/components/pumpwithme/PumpList";
import PumpTableList from "@/components/pumpwithme/PumpTableList";
import { kingOfHill, pumpData } from "@/constant/pumpData";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Button,
  Image,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import UploadImage from "@/components/create-token/UploadImage";
import { ArrowDownIcon } from "@/components/Icon";
import { changeForm } from "@/function/form";

export default function Pumpwithme() {
  const { publicKey } = useWallet();
  const [filter, setFilter] = useState({
    type: "list",
  });
  const [isShowCreate, setIsShowCreate] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
  const [form, setForm] = useState<any>({});
  const handleChangeForm = changeForm(setForm);
  return (
    <div className="bg-[#FBFBFB] mb-[-72px] pb-[72px]">
      <PumpHeader />
      <div className="mb-10 container mx-auto grid grid-cols-4 gap-6">
        {kingOfHill.map((item, idx) => (
          <>
            <PumpKingOfHillCard
              data={item}
              key={idx}
            />
          </>
        ))}
      </div>
      <PumpFilter
        onClickCreate={() => setIsShowCreate(true)}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="mt-10">
        {filter.type === "list" ? (
          <PumpList data={pumpData} />
        ) : (
          <PumpTableList data={pumpData} />
        )}
      </div>
      <Drawer
        isOpen={isShowCreate}
        setIsOpen={setIsShowCreate}
      >
        <div className="flex flex-col gap-3">
          <div
            className={`h-10 py-2 px-[26px] ${
              !publicKey ? "bg-primary" : "bg-default-400"
            } relative hover:opacity-50 rounded-lg`}
          >
            <WalletMultiButton />
            <p className="font-medium text-base leading-6 text-white">
              CONNECT YOUR WALLET TO CREATE PumpWithMe
            </p>
          </div>
          <p className="font-semibold text-base leading-[34px]">
            Create your PumpWithMe project
          </p>
          <Input
            variant="bordered"
            label="Name"
            placeholder="0"
          />
          <Input
            variant="bordered"
            label="Ticker"
            placeholder="0"
          />
          <Textarea
            label="Description"
            placeholder="Description"
            variant="bordered"
          />
          <UploadImage
            value={form?.image}
            onChange={(e: any) =>
              setForm((prev: any) => ({ ...prev, image: e.target.files[0] }))
            }
          />
          <div
            className="p-3 flex items-center gap-1 cursor-pointer hover:opacity-70"
            onClick={() => {
              if (!isShowMore) {
                setIsShowMore(true);
              } else {
                setIsShowMore(false);
                const _form = { ...form };
                // handle delete value form
              }
            }}
          >
            <p className="text-[#0070F0] text-base leading-6">
              {!isShowMore ? "Show more options" : "Hide more options"}
            </p>
            <ArrowDownIcon
              color="#0070F0"
              size="16"
            />
          </div>
          {isShowMore && (
            <>
              <Input
                variant="bordered"
                label="Website"
                placeholder="(optional)"
              />
              <Input
                variant="bordered"
                label="Telegram"
                placeholder="(optional)"
              />
              <Input
                variant="bordered"
                label="Twitter"
                placeholder="(optional)"
              />
              <Input
                variant="bordered"
                label="Discord"
                placeholder="(optional)"
              />
              <Input
                variant="bordered"
                label="Youtube"
                placeholder="(optional)"
              />
            </>
          )}
          <div>
            <p className="font-semibold text-base leading-[34px]">
              Choose target of market cap
            </p>
            <p className="text-sm">
              Tip: Higher market cap are more likely to experience stronger
              growth after listing on a DEX.
            </p>
          </div>
          <Select
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                form?.target && "text-black"
              }`,
            }}
            variant="bordered"
            label="SOL you pay"
            placeholder="39,000 USD"
            onChange={(e) => {
              if (e.target.value) {
                handleChangeForm({ saleType: e.target.value });
              }
            }}
            value={form?.target}
          >
            <SelectItem
              key={39000}
              value={39000}
            >
              39,000 USD
            </SelectItem>
            <SelectItem
              key={69000}
              value={69000}
            >
              69,000 USD
            </SelectItem>
            <SelectItem
              key={99000}
              value={99000}
            >
              99,000 USD
            </SelectItem>
            <SelectItem
              key={999000}
              value={999000}
            >
              999,000 USD
            </SelectItem>
          </Select>
          <div>
            <p className="font-semibold text-base leading-[34px]">
              Choose how many [token symbol] you want to buy (optional)
            </p>
            <p className="text-sm">
              Tip: Its optional but buying a small amount of coins helps protect
              your coin form snipers
            </p>
            <div className="flex justify-end">
              <p className="py-0.5 px-2 bg-[#E2E8F0] text-[12px] leading-4 text-[#1A202C] font-semibold rounded-md">
                Switch to [token symbol]
              </p>
            </div>
          </div>
          <Input
            variant="bordered"
            label="SOL you pay"
            placeholder="0"
            endContent={
              <Image
                src="/image/multi-chain/sol.png"
                className="w-5 h-5 rounded-full"
                style={{
                  boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.1)",
                }}
              />
            }
          />
          <Button
            color="primary"
            size="lg"
          >
            CREATE COIN
          </Button>
          <p className="text-center text-sm">Cost to deploy: ~0.02 SOL</p>
        </div>
      </Drawer>
    </div>
  );
}
