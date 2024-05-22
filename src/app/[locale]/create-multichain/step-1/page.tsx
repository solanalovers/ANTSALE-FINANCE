"use client";
import CustomDivider from "@/components/CustomDivider";
import ToastItem from "@/components/toast/ToastItem";
import { getTokenData } from "@/function/token";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import {
  Button,
  Checkbox,
  DatePicker,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { debounce } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { now } from "@internationalized/date";
import { CreateMultiChainContext } from "@/provider/CreateMultiChainProvider";
import { currencyList, currencyShortName } from "@/constant/network";
import { MinusIcon, PlusIcon } from "@/components/Icon";
import { changeForm } from "@/function/form";
import { AppContext } from "@/provider/AppProvider";
import { useWallet } from "@solana/wallet-adapter-react";

const CurrencySelect = ({ image, name, symbol, value, setValue }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex gap-2 items-center">
      <Checkbox
        onChange={(e) => setIsActive(e.target.checked)}
        checked={isActive}
        className="w-full"
      />
      <div className="flex items-center gap-2  flex-1">
        <div className="flex gap-2 items-center w-[160px]">
          <Image
            src={`/image/multi-chain/${image}.png`}
            className="w-6 h-6 object-cover object-center"
          />
          <div>
            <p className="text-sm leading-5">{name}</p>
            <p className="text-sm leading-5 text-primary">{symbol}</p>
          </div>
        </div>
        <Input
          classNames={{
            input: "placeholder:text-[#8E8E93]",
            inputWrapper: `${!isActive && "bg-[#F4F4F5]"}`,
          }}
          variant="bordered"
          label="Your address to receive fund"
          placeholder="Address"
          isDisabled={!isActive}
          value={value}
          onChange={(e: any) =>
            setValue((prev: any) => ({
              ...prev,
              multiWallet: { ...prev?.multiWallet, [image]: e.target.value },
            }))
          }
        />
      </div>
    </div>
  );
};

export default function CreateMultiChainStep1() {
  const { createMultiChainForm, setCreateMultiChainForm } = useContext(
    CreateMultiChainContext
  );
  const { publicKey } = useWallet();

  const { cluster } = useContext(AppContext);

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

  const handleChangeForm = changeForm(setCreateMultiChainForm);
  const fetchData = async () => {
    const isMainnet = cluster === 1;

    if (!publicKey) {
      return {};
    }

    return await new Promise((resolve) => {
      const debouncedFetch = debounce(() => {
        resolve(
          getTokenData(publicKey?.toString(), createMultiChainForm.tokenAddress!, isMainnet)
        );
      }, 1000);

      debouncedFetch();
    });
  };
  useEffect(() => {
    const fetchDataAndLog = async () => {
      const tokenInfo = await fetchData();
      handleChangeForm({ tokenInfo });
    };
    if (createMultiChainForm?.tokenAddress) {
      fetchDataAndLog();
    }
  }, [createMultiChainForm?.tokenAddress]);

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
        <div>
          <Input
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            variant="bordered"
            label="Token Address"
            placeholder="0x912CE59144191C1204E64559 E8253a0e49E6548"
            onChange={(e) => handleChangeForm({ tokenAddress: e.target.value })}
          />
          <div className="mt-2 flex flex-col gap-y-1">
            <p className="text-xs leading-5 font-semibold text-[#8E8E93]">
              Creation fee: FREE
            </p>
            {createMultiChainForm?.tokenInfo && (
              <>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Name: {createMultiChainForm?.tokenInfoname}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Symbol: {createMultiChainForm?.tokenInfosymbol}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Total Supply: 223398198040.53727
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Decimals: {createMultiChainForm?.tokenInfodecimals}
                </p>
                <p className="text-xs leading-5 text-[#8E8E93]">
                  Your balance: 223398198040.53727
                </p>
              </>
            )}
          </div>
        </div>
        <div className="my-6 flex flex-col gap-y-6">
          <p className="text-base leading-6 text-foreground-500">Currency</p>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
              {currencyList.map((item: any, idx: number) => (
                <CurrencySelect
                  key={idx}
                  image={item.image}
                  name={item.shortName}
                  symbol={item.symbol}
                  value={setCreateMultiChainForm?.multiWallet?.[item.image]}
                  setValue={setCreateMultiChainForm}
                />
              ))}
            </div>
            <div />
          </div>
          <RadioGroup
            label="Fee options"
            defaultValue="5%"
            className={"text-sm leading-5"}
          >
            <Radio value="5%">
              <p className={"text-sm leading-5"}>
                5% SOL raised only (no hidden fees)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label="Listing Options"
            defaultValue="manual"
            className={"text-sm leading-5"}
            onChange={(e) =>
              handleChangeForm({ listingOption: e.target.value })
            }
            value={createMultiChainForm?.listingOption}
          >
            <Radio value="manual">
              <p className={"text-sm leading-5"}>Manual Listing</p>
            </Radio>
          </RadioGroup>
        </div>
        <div className="rounded-lg overflow-hidden">
          <ToastItem
            content={
              createMultiChainForm?.listingOption === "auto"
                ? "For auto listing, after you finalize the pool your token will be auto listed on DEX"
                : "For manual listing, AntSale won’t charge tokens for liquidity. You may withdraw all your funds after the pool ends then do DEX listing yourself."
            }
            status="caution"
          />
        </div>
        <CustomDivider />
        <div className="grid grid-cols-2 gap-6">
          <Select
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                createMultiChainForm?.saleType && "text-black"
              }`,
            }}
            variant="bordered"
            label="Sale Type"
            placeholder="Public"
            onChange={(e) => handleChangeForm({ saleType: e.target.value })}
            value={createMultiChainForm?.saleType}
          >
            <SelectItem
              key={"public"}
              value={"public"}
            >
              Public
            </SelectItem>
          </Select>
          <div />
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
          <div>
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
                    <p className="text-[#006FEE]">
                      Pool List (max is 20 pools)
                    </p>
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
          <DatePicker
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            label="Start Time (UTC)"
            variant="bordered"
            showMonthAndYearPickers
            defaultValue={now("Etc/Universal")}
            onChange={(e) => handleChangeForm({ startTime: e })}
            value={createMultiChainForm?.startTime}
          />
          <DatePicker
            classNames={{ input: "placeholder:text-[#8E8E93]" }}
            label="End Time (UTC)"
            variant="bordered"
            showMonthAndYearPickers
            defaultValue={now("Etc/Universal")}
            onChange={(e) => handleChangeForm({ endTime: e })}
            value={createMultiChainForm?.endTime}
          />
          <Select
            classNames={{ value: `placeholder:text-[#8E8E93] ${createMultiChainForm?.refundType && 'text-black'}` }}
            variant="bordered"
            label="Unsold Tokens Refund Type"
            placeholder="Refund"
            onChange={(e) =>
              handleChangeForm({ refundType: e.target.value })
            }
            value={createMultiChainForm?.refundType}
          >
            <SelectItem
              key={1}
              value={"refund"}
            >
              Refund
            </SelectItem>
            <SelectItem
              key={1}
              value={"burn"}
            >
              Burn
            </SelectItem>
          </Select>
        </div>
        <div className="rounded-lg overflow-hidden mt-6">
          <ToastItem
            status="info"
            content={`Need <span class='font-bold'>321,600 COIN4</span> to create launchpad`}
          />
        </div>
      </div>
    </div>
  );
}

// export default function CreateMultiChainStep1() {
//   return <></>;
// }
