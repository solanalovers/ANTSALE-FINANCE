import { PumpItemInterface } from "@/interface/pumpwithme.interface";
import React, { useEffect, useRef, useState } from "react";
import CustomAvatar from "../CustomAvatar";
import { Button, Image, Progress } from "@nextui-org/react";
import { calculateType } from "@/function/pumpwithme";
import Description from "./PumpDescription";

export default function PumpCardItem({ data }: { data: PumpItemInterface }) {
  return (
    <div
      className="p-4 rounded-lg flex flex-col gap-y-[14px]"
      style={{
        boxShadow:
          "0px 3px 1px 0px rgba(0, 0, 0, 0.1), 0px -1px 1px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-y-3">
        <CustomAvatar
          tokenAvatar={data.image}
          size={80}
          networkSize={30}
        />
        <div>
          <div className="flex items-center gap-x-2">
            <p className="font-semibold text-[20px] leading-[34px]">
              {data.name}
            </p>
            <Image
              src={calculateType(data.marketCap)}
              className="w-6 h-6 object-center object-cover"
            />
          </div>
          <p className="text-base leading-6 text-[#1C1C1E] text-center">
            {data.symbol}
          </p>
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
        <p className="text-primary text-sm leading-[22px]">98 replies</p>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-[#1C1C1E] text-sm leading-[22px]">Market cap</p>
        <p className="text-primary font-bold text-sm leading-[22px]">
          ${data.marketCap.toLocaleString()}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-x-2 mb-1">
          <p className="text-[#1C1C1E] text-sm leading-[22px]">
            Bonding curve progress
          </p>
          <p className="text-[#8E8E93] text-sm leading-[22px]">
            ({data.progress}%)
          </p>
        </div>
        <Progress
          color="primary"
          value={data.progress}
        />
      </div>
      <div className="h-[1px] bg-divider" />
      <Description content={data.description} />
      <div className="h-[1px] bg-divider" />
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#1C1C1E] text-sm leading-[22px]">Created time</p>
          <p className="text-[#1C1C1E] text-sm leading-[22px]">
            {data.createdAt}
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            color="success"
            className="py-1.5 px-3 min-w-0 text-white font-medium"
          >
            BUY
          </Button>
          <Button
            color="danger"
            className="py-1.5 px-3 min-w-0 text-white font-medium"
          >
            SELL
          </Button>
        </div>
      </div>
    </div>
  );
}
