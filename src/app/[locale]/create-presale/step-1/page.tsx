'use client';
import CustomDivider from '@/components/CustomDivider';
import ToastItem from '@/components/toast/ToastItem';
import { getTokenData } from '@/function/token';
import { CreatePresaleContext } from '@/provider/CreatePresaleProvider';
import {
  DatePicker,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { debounce } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { now } from '@internationalized/date';
import { changeForm } from '@/function/form';
import { useWallet } from '@solana/wallet-adapter-react';
import { AppContext } from '@/provider/AppProvider';
import { ListingOption, RefundType } from '@/interface/project-interface';
import { FORMERR } from 'dns';

export default function CreatePresaleStep1() {
  const { form, setForm, setNext, checkValidStep1 } =
    useContext(CreatePresaleContext);
  const handleChangeForm = changeForm(setForm);
  const { publicKey } = useWallet();

  const { cluster } = useContext(AppContext);

  useEffect(() => {
    if (checkValidStep1(form)) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [form]);

  const fetchData = async () => {
    const isMainnet = cluster === 1;

    if (!publicKey) {
      return {};
    }

    return await new Promise((resolve) => {
      const debouncedFetch = debounce(() => {
        resolve(
          getTokenData(publicKey?.toString(), form.tokenAddress!, isMainnet)
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
    if (form?.tokenAddress) {
      fetchDataAndLog();
    }
  }, [createPresaleForm?.tokenAddress]);

  const calculateAutoListing = () => {
    if (
      createPresaleForm?.hardCap &&
      createPresaleForm?.presaleRate &&
      createPresaleForm?.listingRate &&
      createPresaleForm?.liquidityPercent
    ) {
      const hardCap = parseFloat(createPresaleForm?.hardCap.replace(/,/g, ""));
      const presaleRate = parseFloat(
        createPresaleForm?.presaleRate.replace(/,/g, "")
      );
      const listingRate = parseFloat(
        createPresaleForm?.listingRate.replace(/,/g, "")
      );
      const liquidityPercent = createPresaleForm?.liquidityPercent;

      const total =
        hardCap * presaleRate +
        (hardCap * 0.95 * listingRate * liquidityPercent) / 100;

      return `${total} ${createPresaleForm?.tokenInfo?.name}`;
    } else {
      return "?";
    }
  };

  return (
    <div>
      <CustomDivider />
      <div>
        <div>
          <Input
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            variant='bordered'
            label='Token Address'
            placeholder='HG1s2n414ke6yrDi3ZHnbDTHuP2ANMiwuR4DnJRZ6Kqu'
            onChange={(e) => handleChangeForm({ tokenAddress: e.target.value })}
            onBlur={() => {
              if (!createPresaleForm?.tokenAddress) {
                handleChangeForm({ tokenAddress: "" });
              }
            }}
          />
          <div className='mt-2 flex flex-col gap-y-1'>
            <p className='text-xs leading-5 font-semibold text-[#8E8E93]'>
              Creation fee: FREE
            </p>
            {form?.tokenInfo && (
              <>
                <p className='text-xs leading-5 text-[#8E8E93]'>
                  Name: {form?.tokenInfo?.name}
                </p>
                <p className='text-xs leading-5 text-[#8E8E93]'>
                  Symbol: {form?.tokenInfo?.symbol}
                </p>
                <p className='text-xs leading-5 text-[#8E8E93]'>
                  Total Supply: {form?.tokenInfo?.supply}
                </p>
                <p className='text-xs leading-5 text-[#8E8E93]'>
                  Decimals: {form?.tokenInfo?.decimals}
                </p>
                <p className='text-xs leading-5 text-[#8E8E93]'>
                  Your balance: {form?.tokenInfo?.balance}
                </p>
              </>
            )}
          </div>
        </div>
        <div className='my-6 flex flex-col gap-y-6'>
          <RadioGroup
            label='Currency'
            className={'text-sm leading-5'}
            value={form?.currency}
            onChange={(e) => {
              handleChangeForm({ currency: e.target.value });
            }}
          >
            <Radio value='SOL'>
              <p className={'text-sm leading-5'}>
                {form?.currency} (User will pay with {form?.currency} for your
                token)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label='Fee options'
            className={'text-sm leading-5'}
            value={String(form?.feeOption)}
            onChange={(e) => {
              handleChangeForm({ feeOption: Number(e.target.value) });
            }}
          >
            <Radio value={form.feeOption.toString()}>
              <p className={'text-sm leading-5'}>
                {form.feeOption}% {form?.currency} raised only (no hidden fees)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label='Listing Options'
            defaultValue='auto'
            className={'text-sm leading-5'}
            onChange={(e) =>
              handleChangeForm({ listingOption: e.target.value })
            }
            value={form?.listingOption}
          >
            <Radio value={ListingOption.AutoListing}>
              <p className={'text-sm leading-5'}>Auto Listing</p>
            </Radio>
            <Radio value={ListingOption.ManualListing}>
              <p className={'text-sm leading-5'}>Manual Listing</p>
            </Radio>
          </RadioGroup>
        </div>
        <div className='rounded-lg overflow-hidden'>
          <ToastItem
            content={
              form?.listingOption === ListingOption.AutoListing
                ? 'For auto listing, after you finalize the pool your token will be auto listed on DEX'
                : "For manual listing, AntSale won't charge tokens for liquidity.</br>You may withdraw SOL after the pool ends then do DEX listing yourself."
            }
            status='caution'
          />
        </div>
        <CustomDivider />
        <div className='grid grid-cols-2 gap-6'>
          <Select
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                form?.saleType && 'text-black'
              }`,
            }}
            variant='bordered'
            label='Sale Type'
            placeholder='Public'
            onChange={(e) => {
              if (e.target.value) {
                handleChangeForm({ saleType: e.target.value });
              }
            }}
            value={form?.saleType}
          >
            <SelectItem key={'Public'} value={'Public'}>
              Public
            </SelectItem>
          </Select>
          <div />
          <div>
            <Input
              classNames={{ input: 'placeholder:text-[#8E8E93]' }}
              variant='bordered'
              label='PRESALE rate'
              type='number'
              placeholder='0'
              isInvalid={
                form.presaleRate !== undefined && form.presaleRate <= 0
              }
              errorMessage='Presale rate must be bigger than 0'
              onChange={(e) => {
                if (e.target.value) {
                  handleChangeForm({ presaleRate: Number(e.target.value) });
                }
              }}
              value={String(form?.presaleRate)}
            />
            <p className='text-[#1C1C1E] text-xs mt-1'>
              1 {form.currency} ={' '}
              {form?.presaleRate ? form.presaleRate : '1000'} COIN4 <br />
              If I spend 1 SOL on how many tokens will i receive?
            </p>
          </div>
          <div>
            {form?.listingOption === ListingOption.AutoListing && (
              <>
                <Input
                  classNames={{ input: 'placeholder:text-[#8E8E93]' }}
                  variant='bordered'
                  label='LISTING rate'
                  type='number'
                  placeholder='0'
                  isInvalid={
                    form.listingRate !== undefined && form.listingRate <= 0
                  }
                  errorMessage='Listing rate must be bigger than 0'
                  onChange={(e) => {
                    if (e.target.value) {
                      handleChangeForm({ listingRate: Number(e.target.value) });
                    }
                  }}
                  value={String(form?.listingRate)}
                />
                <p className='text-[#1C1C1E] text-xs mt-1'>
                  1 {form.currency} ={' '}
                  {form?.listingRate ? form.listingRate : '800'} COIN4
                  <br />
                  If I spend 1 SOL on how many tokens will i receive? Usually
                  this amount is lower than presale rate to allow for a higher
                  listing price on
                </p>
              </>
            )}
          </div>

          <div>
            <Input
              classNames={{ input: 'placeholder:text-[#8E8E93]' }}
              variant='bordered'
              label='Softcap'
              placeholder='0'
              type='number'
              isInvalid={
                form.softCap !== undefined &&
                (form.hardCap === undefined
                  ? form.softCap <= 0
                  : form.softCap < form.hardCap * 0.2)
              }
              errorMessage={
                form.hardCap === undefined
                  ? 'Soft must be bigger than 0'
                  : 'Soft must be greater than or equals 20% of Hardcap'
              }
              onChange={(e) => {
                if (e.target.value) {
                  handleChangeForm({ softCap: Number(e.target.value) });
                }
              }}
              value={String(form?.softCap)}
            />
            {/* <p className='text-[#1C1C1E] text-xs mt-1'>
              Softcap must be greater than or equals 20% of Hardcap
            </p> */}
          </div>
          <Input
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            variant='bordered'
            label='Hardcap'
            placeholder='0'
            type='number'
            isInvalid={form.hardCap !== undefined && form.hardCap <= 0}
            errorMessage='Hard must be bigger than 0'
            endContent={<p className='text-sm text-default-500'>SOL</p>}
            onChange={(e) => {
              if (e.target.value) {
                handleChangeForm({ hardCap: Number(e.target.value) });
              }
            }}
            value={String(form?.hardCap)}
          />
          <Input
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            variant='bordered'
            label='Minimum buy'
            type='number'
            placeholder='0'
            isInvalid={form.minBuy !== undefined && form.minBuy <= 0}
            errorMessage='Minimum buy must be bigger than 0'
            endContent={<p className='text-sm text-default-500'>SOL</p>}
            onChange={(e) => {
              if (e.target.value) {
                handleChangeForm({ minBuy: Number(e.target.value) });
              }
            }}
            value={String(form?.minBuy)}
          />
          <Input
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            variant='bordered'
            label='Maximum buy'
            type='number'
            placeholder='0'
            isInvalid={form.maxBuy !== undefined && form.maxBuy <= 0}
            errorMessage='Max buy must be bigger than 0'
            endContent={<p className='text-sm text-default-500'>SOL</p>}
            onChange={(e) => {
              if (e.target.value) {
                handleChangeForm({ maxBuy: Number(e.target.value) });
              }
            }}
            value={String(form?.maxBuy)}
          />
          {form?.listingOption === ListingOption.AutoListing && (
            <>
              <Select
                classNames={{
                  value: `placeholder:text-[#8E8E93] ${
                    form?.router && 'text-black'
                  }`,
                }}
                variant='bordered'
                label='Router'
                placeholder='RaydiumAmmV4'
                onChange={(e) => {
                  if (e.target.value) {
                    handleChangeForm({ router: e.target.value });
                  }
                }}
                value={form?.router}
              >
                <SelectItem key={1} value={'raydium'}>
                  RaydiumAmmV4
                </SelectItem>
              </Select>
              <div>
                <Input
                  classNames={{ input: 'placeholder:text-[#8E8E93]' }}
                  variant='bordered'
                  label='Liquidity Percent (%)'
                  placeholder='51'
                  isInvalid={
                    form.liquidityPercent !== undefined &&
                    (form.liquidityPercent > 100 || form.liquidityPercent < 20)
                  }
                  errorMessage='Liquidity percent must be between 20-100%'
                  onChange={(e) => {
                    if (e.target.value) {
                      handleChangeForm({
                        liquidityPercent: Number(e.target.value),
                      });
                    }
                  }}
                  value={form?.liquidityPercent?.toString()}
                />
                <p className='text-[#1C1C1E] text-xs mt-1'>
                  Enter the percentage of raised funds that should be allocated
                  to Liquidity on (Min 20%, Max 100%)
                </p>
              </div>
            </>
          )}
          <DatePicker
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            label='Start Time (UTC)'
            variant='bordered'
            showMonthAndYearPickers
            defaultValue={now('Etc/Universal')}
            onChange={(e) => {
              if (e) {
                handleChangeForm({ startTime: e });
              }
            }}
            value={form?.startTime}
          />
          <DatePicker
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            label='End Time (UTC)'
            variant='bordered'
            showMonthAndYearPickers
            defaultValue={now('Etc/Universal')}
            onChange={(e) => {
              if (e) {
                handleChangeForm({ endTime: e });
              }
            }}
            value={form?.endTime}
          />
          {form?.listingOption === ListingOption.AutoListing && (
            <>
              <Select
                classNames={{
                  value: `placeholder:text-[#8E8E93] ${
                    form?.liquidityType && 'text-black'
                  }`,
                }}
                variant='bordered'
                label='Liquidity Type'
                placeholder='Auto Locking'
                onChange={(e) => {
                  if (e.target.value) {
                    handleChangeForm({ liquidityType: e.target.value });
                  }
                }}
                value={form?.liquidityType}
              >
                <SelectItem key={'lock'} value={'lock'}>
                  Auto Locking
                </SelectItem>
                <SelectItem key={'burn'} value={'burn'}>
                  Auto Burning
                </SelectItem>
              </Select>
              <div>
                <Input
                  classNames={{ input: 'placeholder:text-[#8E8E93]' }}
                  variant='bordered'
                  label='Liquidity Lockup Time'
                  placeholder='0'
                  endContent={
                    <p className='text-sm text-default-500'>Minutes</p>
                  }
                  onChange={(e) => {
                    if (e.target.value) {
                      handleChangeForm({
                        liquidityLockupTime: Number(e.target.value),
                      });
                    }
                  }}
                  value={form?.liquidityLockupTime?.toString()}
                />
                <p className='text-[#1C1C1E] text-xs mt-1'>
                  Liquidity lock up time must be greater than 30 days
                </p>
              </div>
            </>
          )}
          <div>
            <Select
              classNames={{
                value: `placeholder:text-[#8E8E93] ${
                  form?.refundType && 'text-black'
                }`,
              }}
              variant='bordered'
              label='Unsold Tokens Refund Type'
              placeholder='Refund'
              onChange={(e) => {
                if (e.target.value) {
                  handleChangeForm({ refundType: e.target.value });
                }
              }}
              selectedKeys={form?.refundType ? [form?.refundType] : undefined}
              selectionMode='single'
            >
              <SelectItem key={RefundType.Refund} value={RefundType.Refund}>
                Refund
              </SelectItem>
              <SelectItem key={RefundType.Burn} value={RefundType.Burn}>
                Burn
              </SelectItem>
            </Select>
            {form?.listingOption === ListingOption.AutoListing && (
              <p className='text-[#1C1C1E] text-xs mt-1'>
                Auto Burning can only see selected if the Listing Options is
                Auto Listing
              </p>
            )}
          </div>
        </div>
        {form.hardCap &&
          form.listingRate &&
          form.liquidityPercent &&
          form.presaleRate &&
          form.tokenInfo && (
            <div className='rounded-lg overflow-hidden mt-6'>
              <ToastItem
                status='info'
                content={`Need <span class='font-bold'>${(
                  form.hardCap * form.presaleRate +
                  form.hardCap * 0.95 * form.listingRate * form.liquidityPercent
                ).toLocaleString()} ${
                  form.tokenInfo?.symbol
                }</span> to create launchpad`}
              />
            </div>
          )}
      </div>
    </div>
  );
}
