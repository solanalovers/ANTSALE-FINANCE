import { Project } from '@/interface/project-interface';
import { ProjectContext } from '@/provider/context';
import { Divider, Link } from '@nextui-org/react';
import { Copy, Warning2 } from 'iconsax-react';
import React, { Context, useContext } from 'react';

export default function TokenInfo({data}:{data:Project}) {

  return (
    <div className=''>
      <p className='mb-5 font-medium text-lg'>Token</p>
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Address</p>
        <div>
          <div className='flex gap-x-2 items-center'>
            <Link
              isExternal
              href=''
              className='text-primary text-base leading-6 underline'
            >
              {data?.tokenAddress}
            </Link>
            <Copy
              className='hover:opacity-80 cursor-pointer'
              variant='Bold'
              size={20}
              onClick={() => navigator.clipboard.writeText(data?.tokenAddress!)}
            />
          </div>
          <div className='flex justify-end items-center gap-x-2'>
            <Warning2 variant='Bold' size={20} color='#F5A524' />
            <p className='text-sm leading-[22px] text-warning'>
              Do not send SOL to the token address!
            </p>
          </div>
        </div>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Name</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {data.tokenInfo?.name}
        </p>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Symbol</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {data.tokenInfo?.symbol}
        </p>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Decimals</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {data.tokenInfo?.decimals}
        </p>
      </div>
      <div className='my-[14px] w-full border-t border-dashed border-divider' />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Total Supply</p>
        <p className='text-base leading-6 text-[#1C1C1E]'>
          {data.tokenInfo?.supply?.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
