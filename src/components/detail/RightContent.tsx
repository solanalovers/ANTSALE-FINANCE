import React, { useEffect, useState } from "react";
import BaseRightContent from "./right-content/BaseRightContent";
import PurchaseCurrencyRightContent from "./right-content/PurchaseCurrencyRightContent ";
import FixedRightContent from "./right-content/FixedRightContent";
import { Project } from "@/interface/project-interface";
import { calculateProjectStatus } from "@/function/timer";

export default function RightContent({
  type,
  data,
}: {
  type: string;
  data: Project;
}) {
  const [status, setStatus] = useState("upcoming");
  useEffect(() => {
    setStatus(calculateProjectStatus(data.startTime, data.endTime));
  }, []);
  return (
    <div className="flex flex-col gap-y-10">
      <div className="bg-warning-50 border border-warning py-[10px]">
        <p className="text-sm leading-5 text-center">
          Make sure the website is{" "}
          <span className="font-semibold">antsale.finance</span>
        </p>
      </div>
      {type === "normal" && (
        <BaseRightContent
          data={data}
          status={status}
        />
      )}
      {type === "purchase-currency" && <PurchaseCurrencyRightContent />}
      {(type === "fixed-price" || type === "multi-price") && (
        <FixedRightContent type={type} />
      )}
    </div>
  );
}
