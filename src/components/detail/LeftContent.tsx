import React from "react";
import BorderContent from "./BorderContent";
import { Chip, Link } from "@nextui-org/react";
import TokenInfo from "./TokenInfo";
import PoolInfo from "./PoolInfo";

export default function LeftContent() {
  return (
    <BorderContent>
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <img
            src="/image/token-image.png"
            className="w-12 h-12 rounded-full object-cover object-center"
          />
          <div>
            <p className="text-base font-semibold">SMB GEN2</p>
            <p className="my-[5px] text-sm">Spread: 16.67%</p>
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
            </div>
          </div>
        </div>
        <Chip
          variant="dot"
          color="primary"
          className="border-primary bg-primary-50"
        >
          Upcoming
        </Chip>
      </div>
      <p className="my-6 text-sm leading-[22px]">
        {`
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
      </p>
      <TokenInfo />
      <PoolInfo />
    </BorderContent>
  );
}
