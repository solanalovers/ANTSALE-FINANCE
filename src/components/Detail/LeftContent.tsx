import React from "react";
import BorderContent from "./BorderContent";
import { Button, Input, Progress } from "@nextui-org/react";

export default function LeftContent() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-warning-50 border border-warning py-[10px]">
        <p className="text-sm leading-5 text-center">
          Make sure the website is{" "}
          <span className="font-semibold">solsale.fi</span>
        </p>
      </div>
      <BorderContent>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="leading-5 text-base font-medium">FAIRLAUNCH Ends In</p>
          <div className="flex items-center gap-x-1">
            <p className="p-2 bg-primary-50 text-sm leading-5 rounded-[4px]">
              01
            </p>
            <p className="text-sm leading-5">:</p>
            <p className="p-2 bg-primary-50 text-sm leading-5 rounded-[4px]">
              17
            </p>
            <p className="text-sm leading-5">:</p>
            <p className="p-2 bg-primary-50 text-sm leading-5 rounded-[4px]">
              01
            </p>
            <p className="text-sm leading-5">:</p>
            <p className="p-2 bg-primary-50 text-sm leading-5 rounded-[4px]">
              01
            </p>
          </div>
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
    </div>
  );
}
