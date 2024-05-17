import { zealot } from "@/utils/fonts";
import React from "react";
import CustomAvatar from "../CustomAvatar";
import { Image } from "@nextui-org/react";
import { calculateType } from "@/function/pumpwithme";
import { PumpItemInterface } from "@/interface/pumpwithme.interface";

export default function PumpKingOfHillCard({
  data,
}: {
  data: PumpItemInterface;
}) {
  return (
    <div
      className="p-4 rounded-lg flex flex-col gap-y-[14px]"
      style={{
        boxShadow:
          "0px 3px 1px 0px rgba(0, 0, 0, 0.1), 0px -1px 1px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <p className={`${zealot.className} text-[#FFCF15] text-center text-xl`}>
        king of the hill
      </p>
      <div className="flex gap-x-3">
        <CustomAvatar
          tokenAvatar={data.image}
          size={80}
          networkSize={30}
        />
        <div>
          <div className="flex items-center gap-x-2">
            <p className="font-semibold text-[26px] leading-[34px]">
              {data.name}
            </p>
            <Image
              src={calculateType(data.marketCap)}
              className="w-6 h-6 object-center object-cover"
            />
          </div>
          <p className="text-base leading-6 text-[#1C1C1E]">{data.symbol}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <p className="text-[#1C1C1E] text-sm leading-[22px]">Created by</p>
          <Image
            src={data.author.image}
            className="w-[22px] h-[22px] rounded-full object-cover object-center"
          />
          <p className="text-[#1C1C1E] text-sm leading-[22px]">
            {data.author.name}
          </p>
        </div>
        <p className="text-primary text-sm leading-[22px]">0 replies</p>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-[#1C1C1E] text-sm leading-[22px]">Market cap</p>
        <div className="flex items-center gap-x-1">
          <p className="text-primary font-bold text-sm leading-[22px]">
            ${data.marketCap.toLocaleString()}
          </p>
          <Image
            src="/image/pumpwithme/crown.png"
            className="w-[18px] h-[18px] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
