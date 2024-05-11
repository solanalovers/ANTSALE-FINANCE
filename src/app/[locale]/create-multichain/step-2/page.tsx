"use client";
import CustomDivider from "@/components/CustomDivider";
import {
  Button,
  DatePicker,
  Input,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { now } from "@internationalized/date";
import { CreateMultiChainContext } from "@/provider/CreateMultiChainProvider";
import { currencyShortName } from "@/constant/network";
import { MinusIcon, PlusIcon } from "@/components/Icon";
import { poolList } from "@/constant/pool";

export default function CreateMultiChainStep2() {
  const { createMultiChainForm, setCreateMultiChainForm } = useContext(
    CreateMultiChainContext
  );

  const handleChangePriceModel = (e: any) => {
    if (e.target.value === "multi-price") {
      setCreateMultiChainForm((prev: any) => ({
        ...prev,
        poolList: [{ amount: null, price: null }],
      }));
    }
    setCreateMultiChainForm((prev: any) => ({
      ...prev,
      priceModel: e.target.value,
    }));
  };

  useEffect(() => {
    // CHECK PRICEMODEL TO REMOVE UN NEEED VALUE
    if (
      createMultiChainForm?.priceModel !== "multi-price" &&
      createMultiChainForm?.pool
    ) {
      delete createMultiChainForm.pool;
    }
  }, [createMultiChainForm?.priceModel]);
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
            classNames={{
              value: `${
                createMultiChainForm?.priceModel
                  ? "text-black"
                  : "text-[#8E8E93]"
              }`,
            }}
            variant="bordered"
            label="Price Model"
            placeholder="Fixed a price in USDT"
            onChange={handleChangePriceModel}
            value={createMultiChainForm?.priceModel}
            disabledKeys={
              createMultiChainForm?.multiWallet ? [] : ["purchase-currency"]
            }
          >
            <SelectItem
              key={"fixed-price"}
              value={"fixed-price"}
            >
              Fixed a price in USDT
            </SelectItem>
            <SelectItem
              key={"multi-price"}
              value={"multi-price"}
            >
              Fixed multi prices in USDT
            </SelectItem>
            <SelectItem
              key={"purchase-currency"}
              value={"purchase-currency"}
            >
              Distribute based on purchase currency
            </SelectItem>
          </Select>
          {createMultiChainForm?.priceModel === "fixed-price" && (
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
          )}
          {createMultiChainForm?.priceModel === "purchase-currency" && (
            <div className="flex flex-col gap-y-3">
              {createMultiChainForm?.multiWallet &&
                Object.entries(createMultiChainForm?.multiWallet).map(
                  ([key]: any, idx: number) => (
                    <Input
                      classNames={{ input: "placeholder:text-[#8E8E93]" }}
                      variant="bordered"
                      type="number"
                      label={`${currencyShortName[key]} pool - Amount of Token`}
                      placeholder="0"
                      key={idx}
                    />
                  )
                )}
            </div>
          )}
          {createMultiChainForm?.priceModel === "multi-price" && (
            <div>
              <div className="grid grid-cols-2 gap-6 min-h-10 max-h-[400px] overflow-y-scroll">
                {createMultiChainForm?.poolList?.map(
                  (item: { price: number; amount: number }, idx: number) => (
                    <>
                      <Input
                        classNames={{ input: "placeholder:text-[#8E8E93]" }}
                        variant="bordered"
                        type="number"
                        label={`Pool ${idx + 1} - Price per Token`}
                        placeholder="0"
                        key={idx}
                        value={item.price?.toString()}
                        onChange={(e: any) => {
                          const newPoolList = createMultiChainForm?.poolList;
                          newPoolList[idx].price = e.target.value;
                          setCreateMultiChainForm((prev: any) => ({
                            ...prev,
                            poolList: newPoolList,
                          }));
                        }}
                      />
                      <Input
                        classNames={{ input: "placeholder:text-[#8E8E93]" }}
                        variant="bordered"
                        type="number"
                        label={`Pool ${idx + 1} - Total amount for presale`}
                        placeholder="0"
                        key={idx}
                        value={item.amount?.toString()}
                        onChange={(e: any) => {
                          const newPoolList = createMultiChainForm?.poolList;
                          newPoolList[idx].amount = e.target.value;
                          setCreateMultiChainForm((prev: any) => ({
                            ...prev,
                            poolList: newPoolList,
                          }));
                        }}
                      />
                    </>
                  )
                )}
              </div>
              <div className="flex items-center justify-between mt-3">
                <Button
                  variant={undefined}
                  className="flex items-center gap-3 bg-transparent"
                  isDisabled={createMultiChainForm?.poolList?.length === 20}
                  onClick={() => {
                    if (!createMultiChainForm?.poolList?.length) {
                      setCreateMultiChainForm((prev: any) => ({
                        ...prev,
                        poolList: [{ amount: 0, price: 0 }],
                      }));
                    } else {
                      setCreateMultiChainForm((prev: any) => ({
                        ...prev,
                        poolList: [...prev.poolList, { amount: 0, price: 0 }],
                      }));
                    }
                  }}
                >
                  <PlusIcon />
                  <p className="text-[#006FEE]">Pool List (max is 20 pools)</p>
                </Button>
                <Button
                  variant={undefined}
                  className="flex items-center gap-3 bg-transparent"
                  isDisabled={createMultiChainForm?.poolList?.length === 0}
                  onClick={() => {
                    const newPoolList = [...createMultiChainForm.poolList];
                    newPoolList.pop();
                    setCreateMultiChainForm((prev: any) => ({
                      ...prev,
                      poolList: [...newPoolList],
                    }));
                  }}
                >
                  <MinusIcon />
                  <p className="text-[#F31260]">Delete</p>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
