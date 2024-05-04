import React from "react";
import BorderContent from "../BorderContent";
import Countdown from "../Countdown";
import { Button, Input, Progress } from "@nextui-org/react";

export default function BaseRightContent() {
  return (
    <>
      <BorderContent>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="leading-5 text-base font-medium">
            MULTICHAIN-LAUNCH Ends In
          </p>
          <Countdown/>
        </div>
        <div className="my-6">
          <Progress
            color="success"
            value={60}
          />
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm leading-5">{`0.85 SOL ($126.74)`}</p>
            <p className="text-sm leading-5">{`5 SOL ($741.4)`}</p>
          </div>
        </div>
        <Input
          inputMode="numeric"
          label="Amount (MAX: 0.0009 SOL)"
          defaultValue="0"
          placeholder="0"
          labelPlacement="inside"
          endContent={<p className="text-default-600">MAX</p>}
        />
        <Button
          color="primary"
          className="mt-4 w-full"
          size="lg"
        >
          BUY WITH SOL
        </Button>
      </BorderContent>
      <BorderContent>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Status</p>
          <p className="text-base leading-6 text-[#1C1C1E]">Upcoming</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Sale Type</p>
          <p className="text-base leading-6 text-[#1C1C1E]">Public</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Min Buy</p>
          <p className="text-base leading-6 text-[#1C1C1E]">0.1 SOL</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Max Buy</p>
          <p className="text-base leading-6 text-[#1C1C1E]">15 SOL</p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Current Rate</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            1 SOL = 307,691 SOLFIN
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Current Raise</p>
          <p className="text-base leading-6 text-[#1C1C1E]">
            0.8548 SOL (17.10%)
          </p>
        </div>
        <div className="my-[14px] w-full border-t border-dashed border-divider" />
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Total Contributor</p>
          <p className="text-base leading-6 text-[#1C1C1E]">6</p>
        </div>
      </BorderContent>
    </>
  );
}
