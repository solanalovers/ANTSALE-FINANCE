import { HeartIcon } from "@/components/Icon";
import { Image } from "@nextui-org/react";
import React from "react";

export default function PumpComment() {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Image
          src="/image/token-image-1.png"
          className="w-[22px] h-[22px] rounded-full object-center object-cover"
        />
        <p className="text-sm leading-[22px] text-[#1C1C1E] bg-[#F7CB45] px-1 rounded-[4px]">
          rpsXHG
        </p>
        <p className="text-[#1C1C1E] text-sm leading-[22px]">
          5/13/2024, 10:14:54 PM
        </p>
        <div className="hover:opacity-50 cursor-pointer">
          <HeartIcon />
        </div>
        <p className="text-[#1C1C1E] text-sm leading-[22px]">0</p>
        <p className="text-[#1C1C1E] text-sm leading-[22px]">
          #2181180 [reply]
        </p>
      </div>
      <p className="mt-2 text-base leading-6 text-[#1C1C1E]">DEX PREPAID!!!</p>
    </div>
  );
}
