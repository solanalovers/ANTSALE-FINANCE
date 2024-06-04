import {ProjectContext} from '@/provider/context';
import {Link} from '@nextui-org/react';
import React, {Context, useContext} from 'react';
import {ProjectType} from "@/interface/project-interface";

export default function PoolInfo({
                                     context,
                                 }: {
    context: Context<ProjectContext>;
}) {
    const {form} = useContext(context);
    let tokenForPresale = 0
    let tokenForLiquidity = 0
    if (form.projectType === ProjectType.FairLaunch) {
        tokenForPresale = Number(form.totalSellingAmount);
        tokenForLiquidity = Number(form.totalSellingAmount) * Number(form.liquidityPercent) * 0.0095;
    } else {
        tokenForPresale = Number(form.hardCap) * Number(form.presaleRate)
        tokenForLiquidity = Number(form.hardCap) * Number(form.listingRate) * Number(form.liquidityPercent) * 0.0095
    }

    return (
        <div className='mt-6'>
            <p className='mb-5 font-medium text-lg'>Pool Info</p>
            <div className='my-[14px] w-full border-t border-dashed border-divider'/>
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Tokens For Presale</p>
                <p className='text-base leading-6 text-[#1C1C1E]'>
                    {tokenForPresale} {form.tokenInfo?.symbol}
                </p>
            </div>
            <div className='my-[14px] w-full border-t border-dashed border-divider'/>
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Tokens For Liquidity</p>
                <p className='text-base leading-6 text-[#1C1C1E]'>
                    {tokenForLiquidity} {form.tokenInfo?.symbol}
                </p>
            </div>
            <div className='my-[14px] w-full border-t border-dashed border-divider'/>
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
            <div className='my-[14px] w-full border-t border-dashed border-divider'/>
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Start Time</p>
                <p className='text-base leading-6 text-[#1C1C1E]'>
                    {form.startTime?.toDate('UTC').toString()}
                </p>
            </div>
            <div className='my-[14px] w-full border-t border-dashed border-divider'/>
            <div className='flex justify-between'>
                <p className='font-medium text-base'>End Time</p>
                <p className='text-base leading-6 text-[#1C1C1E]'>
                    {form.endTime?.toDate('UTC').toString()}
                </p>
            </div>
            <div className='my-[14px] w-full border-t border-dashed border-divider'/>
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
            <div className='my-[14px] w-full border-t border-dashed border-divider'/>
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Liquidity Percent</p>
                <p className='text-base leading-6 text-[#1C1C1E]'>
                    {form.liquidityPercent}%
                </p>
            </div>
            <div className='my-[14px] w-full border-t border-dashed border-divider'/>
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Liquidity Lockup Time</p>
                <p className='text-base leading-6 text-green-500'>
                    Burned after liquidity is added
                </p>
            </div>
        </div>
    );
}
