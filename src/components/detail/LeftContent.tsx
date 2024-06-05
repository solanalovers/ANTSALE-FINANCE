import React from "react";
import BorderContent from "./BorderContent";
import { Chip, Image, Link } from "@nextui-org/react";
import TokenInfo from "./TokenInfo";
import PoolInfo from "./PoolInfo";
import CustomAvatar from "../CustomAvatar";
import { CheckIcon } from "../Icon";
import { Project, ProjectType } from "@/interface/project-interface";

export default function LeftContent({ data }: { data: Project }) {
  let tokenForPresale = 0;
  let tokenForLiquidity = 0;
  if (data.projectType === ProjectType.FairLaunch) {
    tokenForPresale = Number(data.totalSellingAmount);
    tokenForLiquidity =
      Number(data.totalSellingAmount) * Number(data.liquidityPercent) * 0.0095;
  } else {
    tokenForPresale = Number(data.hardCap) * Number(data.presaleRate);
    tokenForLiquidity =
      Number(data.hardCap) *
      Number(data.listingRate) *
      Number(data.liquidityPercent) *
      0.0095;
  }
  return (
    <div className="flex flex-col gap-y-10">
      <BorderContent>
        <div>
          <Image
            src="/image/img-detail.png"
            radius="none"
            className="object-cover object-center h-[200px]"
            width={"100%"}
          />
          <div className="flex justify-between">
            <div className="mt-[-60px] z-20 ml-10">
              <CustomAvatar
                tokenAvatar="/image/token-image-1.png"
                size={120}
                networkSize={38}
              />
            </div>
            <div className="flex items-center gap-x-3">
              {data.socials?.Twitter && (
                <Link
                  href={data.socials?.Twitter}
                  isExternal
                  className="hover:opacity-80"
                >
                  <img
                    src={`/image/social/twitter.png`}
                    width={"32px"}
                    height={"32px"}
                  />
                </Link>
              )}
              {data.socials?.Telegram && (
                <Link
                  href={data.socials?.Telegram}
                  isExternal
                  className="hover:opacity-80"
                >
                  <img
                    src={`/image/social/telegram.png`}
                    width={"32px"}
                    height={"32px"}
                  />
                </Link>
              )}
              {data.socials?.Discord && (
                <Link
                  href={data.socials?.Discord}
                  isExternal
                  className="hover:opacity-80"
                >
                  <img
                    src={`/image/social/discord.png`}
                    width={"32px"}
                    height={"32px"}
                  />
                </Link>
              )}
              {data.website && (
                <Link
                  href={"data.website"}
                  isExternal
                  className="hover:opacity-80"
                >
                  <img
                    src={`/image/social/web.png`}
                    width={"32px"}
                    height={"32px"}
                  />
                </Link>
              )}
              <Chip
                color="primary"
                className="bg-primary-50 text-primary"
              >
                <div className="flex items-center gap-x-1">
                  <CheckIcon
                    fill="#006FEE"
                    size="16"
                  />
                  Filled
                </div>
              </Chip>
            </div>
          </div>
          <div className="ml-10 mt-4 mb-6">
            <p className="text-lg font-semibold leading-[22px]">
              {data.tokenInfo?.name}
            </p>
            <p className="mt-1 text-sm leading-4">Spread: 16.67%</p>
          </div>
          <p
            className="text-sm leading-[22px]"
            dangerouslySetInnerHTML={{ __html: data.description || "" }}
          ></p>
        </div>
      </BorderContent>
      <BorderContent>
        {/* <div className="flex justify-between">
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
        </p> */}
        <></>
        <TokenInfo data={data} />
        <PoolInfo data={{ ...data, tokenForPresale, tokenForLiquidity }} />
      </BorderContent>
    </div>
  );
}
