import { Project } from '@/interface/project-interface';
import { ProjectContext } from '@/provider/context';
import { Link } from '@nextui-org/react';
import { Keypair } from '@solana/web3.js';
import { Copy, Warning2 } from 'iconsax-react';
import React, { Context, useContext } from 'react';

export default function PoolInfo({
  context,
}: {
  context: Context<ProjectContext>;
}) {
  const { form } = useContext(context);

  const poolsAddress = Keypair.generate().publicKey;

  const tokenForPresale = 230000000;
  const tokenForLiquidity = 149000000;

  return (
    <div className='mt-6'>
      <p className='mb-5 font-medium text-lg'>Pool Info</p>
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Address</p>
        <div>
          <div className='flex gap-x-2 items-center'>
            <Link
              isExternal
              href=''
              className='text-primary text-base leading-6 underline'
            >
              {poolsAddress.toString()}
            </Link>
            <Copy
              className='hover:opacity-80 cursor-pointer'
              variant='Bold'
              size={20}
              onClick={() =>
                navigator.clipboard.writeText(poolsAddress.toString())
              }
            />
          </div>
          <div className='flex justify-end items-center gap-x-2'>
            <Warning2 variant='Bold' size={20} color='#F5A524' />
            <p className='text-sm leading-[22px] text-warning'>
              Do not send SOL to the pool address!
            </p>
          </div>
        </div>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Tokens For Presale</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {tokenForPresale} {form.tokenInfo?.symbol}
        </p>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Tokens For Liquidity</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {tokenForLiquidity} {form.tokenInfo?.symbol}
        </p>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Soft Cap</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {form.softCap} {form.currency}
        </p>
      </div>
      {/* <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">Hard Cap</p>
        <p className="text-base leading-6 text-[#1C1C1E]">-</p>
      </div> */}
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Start Time</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {form.startTime?.toDate('UTC').toString()}
        </p>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>End Time</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {form.endTime?.toDate('UTC').toString()}
        </p>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Listing On</p>
        <Link
          href=''
          isExternal
          className='text-base leading-6 text-primary underline'
        >
          {form.router}
        </Link>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Liquidity Percent</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {form.liquidityPercent}%
        </p>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Liquidity Lockup Time</p>
        <p className='text-base leading-6 text-green-500'>
          Burned after liquidity is added
        </p>
      </div>
    </div>
  );
}
