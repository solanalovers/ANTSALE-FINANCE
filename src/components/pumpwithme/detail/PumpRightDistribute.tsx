import CustomDivider from "@/components/CustomDivider";
import BorderContent from "@/components/detail/BorderContent";
import React from "react";

const DistributeItem = ({
  data: { name, percent },
  idx,
  isEnd,
}: {
  data: { name: string; percent: number };
  isEnd: boolean;
  idx: number;
}) => (
  <>
    <div className="flex items-center justify-between">
      <p className="font-medium text-sm">
        {idx + 1}. {name}
      </p>
      <p className="leading-6 text-sm">{percent}%</p>
    </div>
    {!isEnd && (
      <div className="border-t border-default-300 border-dashed my-3" />
    )}
  </>
);

const distributeList: Array<{ name: string; percent: number }> = [
  {
    name: "AQsSah 🏦 (bonding curve)",
    percent: 39.38,
  },
  {
    name: "5k4BBy (dev)",
    percent: 4.31,
  },
  {
    name: "5k4BBy",
    percent: 4.31,
  },
  {
    name: "5k4BBy",
    percent: 4.31,
  },
  {
    name: "5k4BBy",
    percent: 4.31,
  },
  {
    name: "5k4BBy",
    percent: 4.31,
  },
  {
    name: "5k4BBy",
    percent: 4.31,
  },
  {
    name: "5k4BBy",
    percent: 4.31,
  },
];

export default function PumpRightDistribute() {
  return (
    <BorderContent>
      <p className="mb-4 font-semibold text-2xl">Holder distribution</p>
      {distributeList.map((item, idx) => (
        <DistributeItem
          idx={idx}
          data={item}
          key={idx}
          isEnd={idx + 1 === distributeList.length}
        />
      ))}
    </BorderContent>
  );
}
