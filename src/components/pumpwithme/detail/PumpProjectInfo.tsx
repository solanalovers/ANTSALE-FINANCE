import { Image, Link } from "@nextui-org/react";
import React from "react";

export default function PumpProjectInfo() {
  return (
    <div className="flex gap-x-3">
      <Image
        src="/image/token-image.png"
        className="w-[138px] h-[138px] object-cover object-center rounded-lg"
      />
      <div className="flex flex-col gap-y-2">
        <p className="text-base font-semibold">Gilltardio (ticker: GILLTARD)</p>
        <div className="flex items-center gap-x-3">
          <Link
            href={""}
            isExternal
            className="hover:opacity-80"
          >
            <img
              src={`/image/social/twitter.png`}
              width={"32px"}
              height={"32px"}
            />
          </Link>
          <Link
            href={""}
            isExternal
            className="hover:opacity-80"
          >
            <img
              src={`/image/social/telegram.png`}
              width={"32px"}
              height={"32px"}
            />
          </Link>
          <Link
            href={""}
            isExternal
            className="hover:opacity-80"
          >
            <img
              src={`/image/social/discord.png`}
              width={"32px"}
              height={"32px"}
            />
          </Link>
          <Link
            href={""}
            isExternal
            className="hover:opacity-80"
          >
            <img
              src={`/image/social/web.png`}
              width={"32px"}
              height={"32px"}
            />
          </Link>
          <Link
            href={""}
            isExternal
            className="hover:opacity-80"
          >
            <img
              src={`/image/social/ytb.png`}
              width={"32px"}
              height={"32px"}
            />
          </Link>
        </div>
        <p className="text-sm leading-6">
          GILL TARDIO CTO Original dev jeeted for pennies
          https://t.me/GilltardioCTO https://twitter.com/GillTardioCTO DO NOT
          SNIPE I WILL DUMP ON YOU WAIT
        </p>
      </div>
    </div>
  );
}
