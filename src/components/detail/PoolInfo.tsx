import { Project, ProjectType } from "@/interface/project-interface";
import { ProjectContext } from "@/provider/context";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React, { Context, useContext, useEffect, useState } from "react";

interface PoolData extends Project {
  tokenForPresale?: number;
  tokenForLiquidity?: number;
}

export default function PoolInfo({ data }: { data: PoolData }) {
  const pathname = usePathname();

  const calculateLockupTime = () => {
    const endTime = pathname.includes("details")
      ? new Date(data.endTime.toString()).getTime()
      : data.endTime.toDate("").getTime();
    const lockupTime = endTime + Number(data.liquidityLockupTime);
    return lockupTime;
  };

  return (
    <div className="mt-6">
      <p className="mb-5 font-medium text-lg">Pool Info</p>
      {/* <div className='flex justify-between'>*/}
      {/*    <p className='font-medium text-base'>Address</p>*/}
      {/*    <div>*/}
      {/*        <div className='flex gap-x-2 items-center'>*/}
      {/*            <Link*/}
      {/*                isExternal*/}
      {/*                href=''*/}
      {/*                className='text-primary text-base leading-6 underline'*/}
      {/*            >*/}
      {/*                {poolAddress.toString()}*/}
      {/*            </Link>*/}
      {/*            <Copy*/}
      {/*                className='hover:opacity-80 cursor-pointer'*/}
      {/*                variant='Bold'*/}
      {/*                size={20}*/}
      {/*                onClick={() =>*/}
      {/*                    navigator.clipboard.writeText(poolAddress.toString())*/}
      {/*                }*/}
      {/*            />*/}
      {/*        </div>*/}
      {/*        <div className='flex justify-end items-center gap-x-2'>*/}
      {/*            <Warning2 variant='Bold' size={20} color='#F5A524'/>*/}
      {/*            <p className='text-sm leading-[22px] text-warning'>*/}
      {/*                Do not send SOL to the pool address!*/}
      {/*            </p>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div> */}
      {/* <div className="my-[14px] w-full border-t border-dashed border-divider" /> */}
      <div className="flex justify-between">
        <p className="font-medium text-base">Listing type</p>
        <p className="text-base leading-6 text-[#1C1C1E]">
          {data.listingOption}
        </p>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">Tokens For Presale</p>
        <p className="text-base leading-6 text-[#1C1C1E]">
          {data.tokenForPresale?.toLocaleString()} {data.tokenInfo?.symbol}
        </p>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">Tokens For Liquidity</p>
        <p className="text-base leading-6 text-[#1C1C1E]">
          {data.tokenForLiquidity?.toLocaleString()} {data.tokenInfo?.symbol}
        </p>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">Soft Cap</p>
        <p className="text-base leading-6 text-[#1C1C1E]">
          {data.softCap?.toLocaleString()} {data.currency}
        </p>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        {data.projectType === ProjectType.Presale && (
          <>
            <p className="font-medium text-base">Hard Cap</p>
            <p className="text-base leading-6 text-[#1C1C1E]">
              {`${data.hardCap?.toLocaleString()} ${data.currency}` || "-"}
            </p>
          </>
        )}
        {data.projectType === ProjectType.FairLaunch && (
          <>
            <p className="font-medium text-base">Max Buy</p>
            <p className="text-base leading-6 text-[#1C1C1E]">
              {`${data.maxBuy?.toLocaleString()} ${data.currency}` || "-"}
            </p>
          </>
        )}
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">Start Time</p>
        <p className="text-base leading-6 text-[#1C1C1E]">
          {pathname.includes("detail") ? (
            <>{new Date(data.startTime.toString()).toUTCString()}</>
          ) : (
            <>{data.startTime.toDate("").toUTCString()}</>
          )}
        </p>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">End Time</p>
        <p className="text-base leading-6 text-[#1C1C1E]">
          {pathname.includes("detail") ? (
            <>{new Date(data.endTime.toString()).toUTCString()}</>
          ) : (
            <>{data.endTime.toDate("").toUTCString()}</>
          )}
        </p>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">Unsold Tokens</p>
        <p className="text-base leading-6 text-[#1C1C1E]">{data.refundType}</p>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">Listing On</p>
        <Link
          href=""
          isExternal
          className="text-base leading-6 text-primary underline"
        >
          {data.router}
        </Link>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between gap-4 items-center">
        <p className="font-medium text-base line-clamp-1 flex-shrink-0">
          Liquidity Percent
        </p>
        <div className="flex flex-col items-end">
          <p className="text-base leading-6 text-[#1C1C1E]">
            {data.liquidityPercent}%
          </p>
          {pathname.includes("detail") &&
            data.liquidityPercent &&
            data.liquidityPercent < 51 && (
              <p className="text-right text-red-500 text-[12.5px] leading-5">
                {`Low LP launchpad This project will add less than 51% of raised funds to Liquidity. Small presale to liquidity ration results in more volatile price action, Please assess necessary risks before investing into lower liquidity projects.`}
              </p>
            )}
        </div>
      </div>
      <div className="my-[14px] w-full border-t border-dashed border-divider" />
      <div className="flex justify-between">
        <p className="font-medium text-base">Liquidity Lockup Time</p>
        <p className="text-base leading-6 text-green-500">
          {data.liquidityLockupTime
            ? `${new Date(calculateLockupTime()).toUTCString()}`
            : "🔥 Burned after liquidity is added"}
        </p>
      </div>
    </div>
  );
}
