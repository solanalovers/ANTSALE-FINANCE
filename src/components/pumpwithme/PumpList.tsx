import React from "react";
import PumpCardItem from "./PumpCardItem";
import { PumpItemInterface } from "@/interface/pumpwithme.interface";

export default function PumpList({ data }: { data: Array<PumpItemInterface> }) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:grid-cols-4">
      {data.map((item, idx) => (
        <PumpCardItem data={item} key={idx}/>
      ))}
    </div>
  );
}
