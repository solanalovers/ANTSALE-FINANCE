"use client";
import PumpFilter from "@/components/pumpwithme/PumpFilter";
import PumpHeader from "@/components/pumpwithme/PumpHeader";
import PumpKingOfHillCard from "@/components/pumpwithme/PumpKingOfHillCard";
import PumpList from "@/components/pumpwithme/PumpList";
import PumpTableList from "@/components/pumpwithme/PumpTableList";
import { kingOfHill, pumpData } from "@/constant/pumpData";
import React, { useState } from "react";

export default function Pumpwithme() {
  const [filter, setFilter] = useState({
    type: "list",
  });
  return (
    <div className="bg-[#FBFBFB] mb-[-72px] pb-[72px]">
      <PumpHeader />
      <div className="mb-10 container mx-auto grid grid-cols-4 gap-x-6">
        {kingOfHill.map((item, idx) => (
          <PumpKingOfHillCard
            data={item}
            key={idx}
          />
        ))}
      </div>
      <PumpFilter
        filter={filter}
        setFilter={setFilter}
      />
      <div className="mt-10">
        {filter.type === "list" ? (
          <PumpList data={pumpData} />
        ) : (
          <PumpTableList data={pumpData} />
        )}
      </div>
    </div>
  );
}
