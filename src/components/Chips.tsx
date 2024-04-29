import { Chip } from "@nextui-org/react";
import React, { ReactNode } from "react";
import { CheckIcon } from "./Icon";

interface ChipProps {
  status: "upcoming" | "live" | "canceled" | "ended";
}
export default function Chips({ status }: ChipProps) {
  const chipValueList: {
    [key in ChipProps["status"]]: {
      value: string;
      icon?: ReactNode;
      bg: string;
      cl: string;
    };
  } = {
    upcoming: {
      value: "Upcoming",
      icon: <CheckIcon fill="#F5A524" />,
      bg: "warning-50",
      cl: "warning",
    },
    live: {
      value: "Sale Live",
      icon: <CheckIcon fill="#17C964" />,
      bg: "success-50",
      cl: "success",
    },
    canceled: {
      value: "Canceled",
      icon: <CheckIcon fill="#000000" />,
      bg: "default-100",
      cl: "default-foreground",
    },
    ended: {
      value: "Ended",
      icon: <CheckIcon fill="#EA3354" />,
      bg: "danger-50",
      cl: "chart-pink",
    },
  };
  return (
    <Chip
      className={`bg-${chipValueList[status].bg} text-${chipValueList[status].cl}`}
      startContent={chipValueList[status].icon}
    >
      {chipValueList[status].value}
    </Chip>
  );
}
