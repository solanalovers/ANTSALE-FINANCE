import BorderContent from "@/components/detail/BorderContent";
import { Button, Image, Input, Progress } from "@nextui-org/react";
import React from "react";
import PumpChip from "../PumpChip";
import PumpProjectInfo from "./PumpProjectInfo";
import PumpRightProjectInfo from "./PumpRightProjectInfo";
import PumpRightDistribute from "./PumpRightDistribute";

export default function PumpRightContent() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-warning-50 border border-warning py-[10px]">
        <p className="text-sm leading-5 text-center">
          Make sure the website is{" "}
          <span className="font-semibold">solsale.fi</span>
        </p>
      </div>
      <BorderContent>
        <div className="flex flex-col gap-y-6">
          <div className="grid grid-cols-2 gap-x-3">
            <Button
              color="success"
              size="lg"
              className="text-white"
            >
              BUY
            </Button>
            <Button
              color="danger"
              size="lg"
            >
              SELL
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <PumpChip content="Switch to RPS" />
            <PumpChip content="Set max slippage" />
          </div>
          <Input
            variant="bordered"
            label="SOL you pay"
            placeholder="0"
            endContent={
              <Image
                src="/image/multi-chain/sol.png"
                className="w-5 h-5 rounded-full"
                style={{
                  boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.1)",
                }}
              />
            }
          />
          <div className="flex items-center gap-x-2">
            <PumpChip content="Reset" />
            <PumpChip content="1 SOL" />
            <PumpChip content="5 SOL" />
            <PumpChip content="10 SOL" />
          </div>
          <Button
            color="primary"
            size="lg"
          >
            PLACE TRADE
          </Button>
        </div>
      </BorderContent>
      <PumpRightProjectInfo />
      <PumpRightDistribute />
    </div>
  );
}
