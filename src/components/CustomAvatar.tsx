import { networkImage } from "@/constant/network";
import { Avatar, Image } from "@nextui-org/react";
import React from "react";

interface AvatarProps {
  tokenAvatar: string;
  network?: "solana";
  size?: number;
  networkSize?: number;
}

export default function CustomAvatar({
  tokenAvatar,
  network = "solana",
  size = 60,
  networkSize = 28,
}: AvatarProps) {
  return (
    <div className="relative">
      <Avatar
        src={tokenAvatar}
        className={`text-large`}
        style={{
          width: size,
          height: size,
        }}
      />
      <div className="absolute flex items-center justify-center bottom-[-1px] right-[0px]">
        <Image
          src={networkImage[network]}
          className="object-cover object-center rounded-full z-[2] border-[2px] border-white"
          style={{
            width: networkSize -4,
            height: networkSize -4,
          }}
        />
        {/* <div className="absolute left-0 right-0 top-0 bottom-0 rounded-full  bg-white z-[1]" /> */}
      </div>
    </div>
  );
}
