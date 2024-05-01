import React from "react";
import { ArrowRightIcon } from "./Icon";

interface StepperProps {
  step: number;
  listStep: Array<{ title: string; desc: string }>;
}

export default function Stepper({ step, listStep }: StepperProps) {
  const checkLastStep = (idx: number) => idx + 1 !== listStep.length;
  const checkCurrentStep = (idx: number) => idx + 1 === step;
  return (
    <div className="flex py-2 gap-x-4">
      {listStep.map(
        ({ title, desc }: { title: string; desc: string }, idx: number) => (
          <div
            className="flex items-center gap-x-4"
            key={idx}
          >
            <div className="flex items-center gap-x-[10px] max-w-56">
              <p
                className={`px-[15.5px] py-1.5 ${
                  checkCurrentStep(idx) ? "bg-primary text-white" : "bg-zinc-300 text-default-400"
                } text-lg font-medium leading-7 rounded-[4px]`}
              >
                {idx + 1}
              </p>
              <div>
                <p
                  className={`font-medium ${
                    checkCurrentStep(idx) ? "text-[#1C1C1E]" : "text-[#8E8E93]"
                  } text-base leading-[26px]`}
                >
                  {title}
                </p>
                <p className="text-[#8E8E93] text-[10px] leading-4">{desc}</p>
              </div>
            </div>
            {checkLastStep(idx) && <ArrowRightIcon />}
          </div>
        )
      )}
    </div>
  );
}
