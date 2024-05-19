'use client';
import CustomDivider from '@/components/CustomDivider';
import ToastItem from '@/components/toast/ToastItem';
import { CreatePresaleContext } from '@/provider/CreatePresaleProvider';
import {
  Checkbox,
  DatePicker,
  Input,
  Link,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from '@nextui-org/react';
import React, { useContext, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { getTokenData } from '@/function/token';
import { now } from '@internationalized/date';
import { CreateFairLaunchContext } from '@/provider/CreateFairLaunchProvider';
import { changeForm } from '@/function/form';
import { AppContext } from '@/provider/AppProvider';
import { useWallet } from '@solana/wallet-adapter-react';
import { LiquidityType, ListingOption } from '@/interface/project-interface';

export default function CreateFairLaunchStep1() {
  const { form, setForm, setNext, checkValidStep1 } = useContext(
    CreateFairLaunchContext
  );
  const { publicKey } = useWallet();

  const { cluster } = useContext(AppContext);
  const handleChangeForm = changeForm(setForm);

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

    if (form?.tokenAddress && publicKey) {
      fetchDataAndLog();
    }
  }, [form?.tokenAddress]);

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
            value={form.currency}
          >
            <Radio value='SOL'>
              <p className={'text-sm leading-5'}>
                {form.currency} (User will pay with {form.currency} for your
                token)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label='Fee options'
            className={'text-sm leading-5'}
            value={form?.feeOption.toString()}
          >
            <Radio value={form.feeOption.toString()}>
              <p className={'text-sm leading-5'}>
                {form.feeOption}% SOL raised only (no hidden fees)
              </p>
            </Radio>
          </RadioGroup>
          <RadioGroup
            label='Listing Options'
            className={'text-sm leading-5'}
            value={form?.listingOption}
          >
            <Radio value={ListingOption.AutoListing}>
              <p className={'text-sm leading-5'}>Auto Listing</p>
            </Radio>
          </RadioGroup>
        </div>
        <div className='rounded-lg overflow-hidden'>
          <ToastItem
            content='For auto listing, after you finalize the pool your token will be auto listed on DEX'
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
          <Input
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            variant='bordered'
            label='Total Selling Amount'
            placeholder='0'
            type='number'
            isInvalid={
              form.totalSellingAmount !== undefined &&
              form.totalSellingAmount < 1
            }
            errorMessage={`Total Selling Amount must be bigger than 0`}
            onChange={(e) =>
              handleChangeForm({ totalSellingAmount: Number(e.target.value) })
            }
            value={form?.totalSellingAmount?.toString()}
          />
          <div>
            <Input
              classNames={{ input: 'placeholder:text-[#8E8E93]' }}
              variant='bordered'
              label='Softcap'
              placeholder='0'
              endContent={
                <p className='text-sm text-default-500'>{form.currency}</p>
              }
              isInvalid={form.softCap !== undefined && form.softCap < 1}
              errorMessage={`Softcap minimum must be 1 ${form?.currency}`}
              type='number'
              onChange={(e) =>
                handleChangeForm({ softCap: Number(e.target.value) })
              }
              value={form?.softCap?.toString()}
            />
          </div>
        </div>
        <Checkbox
          className='text-sm leading-5 mb-3'
          radius='none'
          size='sm'
          onChange={(e) => {
            handleChangeForm({ isMaxBuy: e.target.checked });
          }}
        >
          CONFIG Max Buy (The maximum amount that per wallet can buy)
        </Checkbox>
        <Input
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          variant='bordered'
          label='Max Buy'
          placeholder='0'
          type='number'
          endContent={<p className='text-sm text-default-500'>SOL</p>}
          isDisabled={!form.isMaxBuy}
          isInvalid={form.maxBuy !== undefined && form.maxBuy <= 0}
          errorMessage={`Max buy must be bigger than 0`}
          onChange={(e) => handleChangeForm({ maxBuy: Number(e.target.value) })}
          value={form?.maxBuy?.toString()}
        />
        <div className='grid grid-cols-2 gap-6 mt-6'>
          <Select
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                form?.router && 'text-black'
              }`,
            }}
            variant='bordered'
            label='Router'
            placeholder='RaydiumAmmV4'
            onChange={(e) => handleChangeForm({ router: e.target.value })}
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
              type='number'
              isInvalid={
                form.liquidityPercent !== undefined &&
                (form.liquidityPercent > 100 || form.liquidityPercent < 20)
              }
              errorMessage='Liquidity percent must be between 20-100%'
              onChange={(e) =>
                handleChangeForm({ liquidityPercent: Number(e.target.value) })
              }
              value={form?.liquidityPercent?.toString()}
            />
          </div>
          <DatePicker
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            label='Start Time (UTC)'
            variant='bordered'
            showMonthAndYearPickers
            defaultValue={now('Etc/Universal')}
            onChange={(e) => handleChangeForm({ startTime: e })}
            value={form?.startTime}
          />
          <DatePicker
            classNames={{ input: 'placeholder:text-[#8E8E93]' }}
            label='End Time (UTC)'
            variant='bordered'
            showMonthAndYearPickers
            defaultValue={now('Etc/Universal')}
            onChange={(e) => {
              handleChangeForm({ endTime: e });
            }}
            value={form?.endTime}
          />
          <Select
            classNames={{
              value: `placeholder:text-[#8E8E93] ${
                form?.liquidityType && 'text-black'
              }`,
            }}
            variant='bordered'
            label='Liquidity Type'
            placeholder='Auto Locking'
            selectedKeys={[form?.liquidityType]}
            onChange={(e) =>
              handleChangeForm({ liquidityType: e.target.value })
            }
          >
            <SelectItem
              key={LiquidityType.AutoLocking}
              value={LiquidityType.AutoLocking}
            >
              {LiquidityType.AutoLocking}
            </SelectItem>
            <SelectItem
              key={LiquidityType.AutoBurning}
              value={LiquidityType.AutoBurning}
            >
              {LiquidityType.AutoBurning}
            </SelectItem>
          </Select>
          <div>
            <Input
              classNames={{ input: 'placeholder:text-[#8E8E93]' }}
              variant='bordered'
              label='Liquidity Lockup Time'
              placeholder='0'
              type='number'
              endContent={<p className='text-sm text-default-500'>Minutes</p>}
              onChange={(e) =>
                handleChangeForm({
                  liquidityLockupTime: Number(e.target.value),
                })
              }
              value={form?.liquidityLockupTime?.toString()}
            />
            <p className='text-[#1C1C1E] text-xs mt-1'>
              Liquidity lock up time must be greater than 30 days
            </p>
          </div>
        </div>
        {form?.tokenInfo?.name && (
          <div className="rounded-lg overflow-hidden mt-6">
            <ToastItem
              status="info"
              content={`Need <span class='font-bold'>321,600 ${form?.tokenInfo?.name}</span> to create launchpad`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
