import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Progress,
} from "@nextui-org/react";
import React from "react";
import CustomAvatar from "../CustomAvatar";
import Chips from "../Chips";
import { FireIcon } from "../Icon";

interface CardItemProps {}

export default function CardItem({}: CardItemProps) {
  return (
    <Card className="p-4">
      <CardHeader className="flex items-center justify-between p-0">
        <CustomAvatar tokenAvatar="/image/token-image.png" />
        <div className="flex items-end flex-col">
          <Chips status="upcoming" />
          <div className="flex items-center gap-x-1 mt-2">
            <Chip
              color="secondary"
              className="rounded-lg"
            >
              Safu
            </Chip>
            <Chip
              color="primary"
              className="rounded-lg"
            >
              Audit
            </Chip>
            <Chip
              color="success"
              className={"text-white rounded-lg"}
            >
              KYC
            </Chip>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-0 mt-[30px]">
        <div className="flex flex-col gap-y-[14px]">
          <div>
            <p className="font-semibold text-[26px] leading-[34px]">SMB GEN2</p>
            <p className="text-[14px] leading-[22px] text-[#8E8E93]">
              Fair Launch
            </p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px]">Soft</p>
            <p className="font-medium text-lg leading-[26px] text-primary">
              50 SOL
            </p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px]">
              Progress<span className="ml-2 text-[#8E8E93]">(484.13%)</span>
            </p>
            <Progress
              value={50}
              color="success"
              className="my-1"
            />
            <p className="text-[12px] leading-[20px] text-[#8E8E93]">
              242.0635 SOL Raised
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] leading-[22px]">Liquidity</p>
              <p className="text-[14px] leading-[22px]">60%</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[14px] leading-[22px]">Lockup Time</p>
              <p className="text-[14px] leading-[22px] text-green-600">
                🔥 Burned after liquidity is added
              </p>
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <div>
              <p>Sale Ends In:</p>
              <p>00:11:01:23</p>
            </div>
            <Button color="primary">View</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
