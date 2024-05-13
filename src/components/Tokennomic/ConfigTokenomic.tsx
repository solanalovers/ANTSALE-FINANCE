import React from "react";
import CustomDivider from "../CustomDivider";
import { Radio, RadioGroup } from "@nextui-org/react";

export default function ConfigTokenomic() {
  return (
    <div>
      <CustomDivider />
      <p className="text-base leading-[26px] font-medium text-[#1C1C1E]">Config Token Metrics</p>
      <RadioGroup className="my-4">
        <div className="flex gap-x-4 items-center">
          <Radio value="percent" size="sm">
            <p className={"text-sm leading-5"}>Using Percent</p>
          </Radio>
          <Radio value="percent" size="sm">
            <p className={"text-sm leading-5"}>Using Numbers</p>
          </Radio>
        </div>
      </RadioGroup>
      
    </div>
  );
}
