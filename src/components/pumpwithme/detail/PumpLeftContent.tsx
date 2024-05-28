import { PumpItemInterface } from "@/interface/pumpwithme.interface";
import { Image, Tab, Tabs } from "@nextui-org/react";
import React, { Key, useState } from "react";
import PumpChart from "./PumpChart";
import useTrans from "@/hook/useTrans";
import PumpProjectInfo from "./PumpProjectInfo";
import PumpComment from "./PumpComment";
import PumpAddComment from "./PumpAddComment";

export default function PumpLeftContent({ data }: { data: PumpItemInterface }) {
  const [currentView, setCurrentView] = useState<any>("thread");
  const t = useTrans("pump");
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-6">
          <p className="text-sm leading-[22px] ">Rock Papers Scissors</p>
          <p className="text-sm leading-[22px] ">Ticket: RPS</p>
          <p className="text-sm leading-[22px] text-green-600">
            Market cap: ${data.marketCap.toLocaleString()}
          </p>
          <p className="text-sm leading-[22px] text-green-600">
            Virtual liquidity: $8,799
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-sm leading-[22px] text-green-600">Created by</p>
          <Image
            src={data.author.image}
            className="w-[22px] h-[22px]"
          />
          <p className="text-sm leading-[22px] text-[#1C1C1E] bg-[#F7CB45] px-1 rounded-[4px]">
            {data.author.name}
          </p>
        </div>
      </div>
      <div className="mt-10 mb-6">
        <PumpChart />
      </div>
      <div>
        <Tabs
          size={"md"}
          className="font-semibold text-sm leading-5 mb-4"
          color="primary"
          selectedKey={currentView}
          onSelectionChange={setCurrentView}
          classNames={{
            tabContent: "group-data-[selected=true]:text-primary",
            cursor: "group-data-[selected=true]:bg-blue-50",
          }}
        >
          <Tab
            key="thread"
            title={t("thread")}
          />
          <Tab
            key="trades"
            title={t("trades")}
          />
        </Tabs>
        {currentView === "thread" && (
          <>
            <div className="flex flex-col gap-y-4">
              <PumpProjectInfo />
              {[...Array(10)].map((item: any, idx: number) => (
                <PumpComment key={idx} />
              ))}
            </div>
            <PumpAddComment />
          </>
        )}
      </div>
    </div>
  );
}
