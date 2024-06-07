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
import { calculateProjectStatus, countdownToSaleEnd } from "@/function/timer";
import useTrans from "@/hook/useTrans";
import { Project, ProjectType } from "@/interface/project-interface";

interface DataInterface extends Project {
  id: number;
}

interface CardItemProps {
  data: DataInterface;
}

export default function CardItem({ data }: CardItemProps) {
  const router = useRouter();
  const [timer, setTimer] = useState("00:00:00:00");
  const [status, setStatus] = useState<any>("upcoming");
  const t = useTrans("card");
  useEffect(() => {
    const countdown = setInterval(() => {
      const timeleft = countdownToSaleEnd(data.endTime);
      setTimer(timeleft);
    }, 1000);
    setStatus(calculateProjectStatus(data.startTime, data.endTime));
    return () => clearInterval(countdown);
  }, []);

  return (
    <Card className="p-4">
      <CardHeader className="flex items-center justify-between p-0">
        <CustomAvatar tokenAvatar={data.image} />
        <div className="flex items-end flex-col">
          <Chips status={status} />
          {/* <div className="flex items-center gap-x-1 mt-2">
            <Chip
              color="secondary"
              className="rounded-lg text-sm leading-5"
            >
              Safu
            </Chip>
            <Chip
              color="primary"
              className="rounded-lg text-sm leading-5"
            >
              Audit
            </Chip>
            <Chip
              color="success"
              className={"text-white rounded-lg text-sm leading-5"}
            >
              KYC
            </Chip>
          </div> */}
        </div>
      </CardHeader>
      <CardBody className="p-0 mt-[30px]">
        <div className="flex flex-col gap-y-[14px]">
          <div>
            <p className="font-semibold text-[26px] leading-[34px]">
              {data.tokenInfo?.name}
            </p>
            <p className="text-[14px] leading-[22px] text-[#8E8E93]">
              {data.projectType === ProjectType.Presale ? `Ticker: ${data.tokenInfo?.symbol}` : data.projectType}
            </p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px]">Soft</p>
            <p className="font-medium text-lg leading-[26px] text-primary">
              {data.totalSellingAmount} {data.currency}
            </p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px]">
              {t("progress")}
              <span className="ml-2 text-[#8E8E93]">
                {/* ({data?.progress?.percentage || '484.13%'}) */}
                484.13%
              </span>
            </p>
            <Progress
              value={83}
              color="success"
              className="my-1"
              aria-label="card-progress"
            />
            <p className="text-[12px] leading-[20px] text-[#8E8E93]">
              {(242.0635).toLocaleString()} {data.currency} Raised
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] leading-[22px]">Liquidity</p>
              <p className="text-[14px] leading-[22px]">
                {data.liquidityPercent}%
              </p>
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
              {status !== "ended" && <p>{t("end")}</p>}
              <p>{timer}</p>
            </div>
            <Button
              color="primary"
              onClick={() => router.push(`/detail/${data.id}`)}
            >
              {t("view")}
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
