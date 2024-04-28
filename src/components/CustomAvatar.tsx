import { networkImage } from "@/constant/network-image";
import { Avatar } from "@nextui-org/react";
import React from "react";

interface AvatarProps {
  tokenAvatar: string;
  network?: "solana";
}

export default function CustomAvatar({
  tokenAvatar,
  network = "solana",
}: AvatarProps) {
  return (
    <div className="relative">
      <Avatar
        src={tokenAvatar}
        className="w-[60px] h-[60px] text-large"
      />
      <div className="absolute w-[27px] h-[27px] flex items-center justify-center bottom-[-1px] left-[35px]">
        <img
          src={networkImage[network]}
          className="w-7 h-7 object-cover object-center rounded-full z-[2]"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 rounded-full  bg-white z-[1]" />
      </div>
    </div>
  );
}
