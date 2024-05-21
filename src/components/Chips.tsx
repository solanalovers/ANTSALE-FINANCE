import { Chip } from "@nextui-org/react";
import React, { ReactNode } from "react";
import { CheckIcon } from "./Icon";
import useTrans from "@/hook/useTrans";

interface ChipProps {
  status: "upcoming" | "live" | "canceled" | "ended";
}
export default function Chips({ status }: ChipProps) {
  const t = useTrans("chip");
  const chipValueList: {
    [key in ChipProps["status"]]: {
      value: string;
      icon?: ReactNode;
      bg: string;
      cl: string;
    };
  } = {
    upcoming: {
      value: "coming",
      icon: <CheckIcon fill="#F5A524" />,
      bg: "warning-50",
      cl: "warning",
    },
    live: {
      value: "live",
      icon: <CheckIcon fill="#17C964" />,
      bg: "success-50",
      cl: "success",
    },
    canceled: {
      value: "canceled",
      icon: <CheckIcon fill="#000000" />,
      bg: "default-100",
      cl: "default-foreground",
    },
    ended: {
      value: "ended",
      icon: <CheckIcon fill="#EA3354" />,
      bg: "danger-50",
      cl: "chart-pink",
    },
  };
  return (
    <Chip
      className={`bg-${chipValueList[status].bg} text-${chipValueList[status].cl} text-sm leading-5`}
      startContent={chipValueList[status].icon}
    >
      {t(chipValueList[status].value)}
    </Chip>
  );
}
