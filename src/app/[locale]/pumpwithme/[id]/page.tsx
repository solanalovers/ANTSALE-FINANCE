"use client";
import PumpLeftContent from "@/components/pumpwithme/detail/PumpLeftContent";
import PumpRightContent from "@/components/pumpwithme/detail/PumpRightContent";
import { pumpData } from "@/constant/pumpData";
import { PumpItemInterface } from "@/interface/pumpwithme.interface";
import React, { useEffect, useState } from "react";

export default function DetailPump({ params }: { params: { id: string } }) {
  const [data, setData] = useState<PumpItemInterface | null>(null);
  useEffect(() => {
    const id = Number(params.id);
    const _data: PumpItemInterface = pumpData[id];
    setData(_data);
  }, [params.id]);
  return (
    <div className="container mx-auto mt-10 grid grid-cols-3 gap-x-6">
      {data && (
        <>
          <div className="col-span-2">
            <PumpLeftContent data={data} />
          </div>
          <div className="col-span-1">
            <PumpRightContent />
          </div>
        </>
      )}
    </div>
  );
}
