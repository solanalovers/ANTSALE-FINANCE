import { PumpItemInterface } from "@/interface/pumpwithme.interface";
import { Image } from "@nextui-org/react";
import React from "react";

export default function PumpLeftContent({ data }: { data: PumpItemInterface }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-6">
          <p className="text-sm leading-[22px] ">Rock Papers Scissors</p>
          <p className="text-sm leading-[22px] ">Ticket: RPS</p>
          <p className="text-sm leading-[22px] text-green-600">
            Market cap: $4,086.201
          </p>
          <p className="text-sm leading-[22px] text-green-600">
            Virtual liquidity: $8,799
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-sm leading-[22px] text-green-600">Created by</p>
          <Image src={data.author.image} className="w-[22px] h-[22px]"/>
          <p className="text-sm leading-[22px] text-[#1C1C1E] bg-[#F7CB45] px-1 rounded-[4px]">{data.author.name}</p>
        </div>
      </div>
    </div>
  );
}
