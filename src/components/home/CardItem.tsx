import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Progress,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import CustomAvatar from "../CustomAvatar";
import Chips from "../Chips";
import { FireIcon } from "../Icon";
import { useRouter } from "next/navigation";
import { countdownToSaleEnd } from "@/function/timer";

interface CardItemProps {
  data: any;
}

export default function CardItem({ data }: CardItemProps) {
  const router = useRouter();
  const [timer, setTimer] = useState("00:00:00:00");
  useEffect(() => {
    const countdown = setInterval(() => {
      const timeleft = countdownToSaleEnd(data.saleEndsIn);
      setTimer(timeleft);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);
  return (
    <Card className="p-4">
      <CardHeader className="flex items-center justify-between p-0">
        <CustomAvatar tokenAvatar={data.tokenAvatar} />
        <div className="flex items-end flex-col">
          <Chips status={data.status} />
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
              {data.launchType}
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
              Progress
              <span className="ml-2 text-[#8E8E93]">
                ({data.progress.percentage})
              </span>
            </p>
            <Progress
              value={data.progress.value}
              color="success"
              className="my-1"
              aria-label="card-progress"
            />
            <p className="text-[12px] leading-[20px] text-[#8E8E93]">
              {data.progress.raised.toLocaleString()} SOL Raised
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] leading-[22px]">Liquidity</p>
              <p className="text-[14px] leading-[22px]">{data.liquidity}</p>
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
              <p>{timer}</p>
            </div>
            <Button
              color="primary"
              onClick={() => router.push(`/detail/${data.id}`)}
            >
              View
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
