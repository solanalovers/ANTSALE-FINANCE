import React, { Fragment } from "react";
import { ArrowRightIcon } from "./Icon";

interface StepperProps {
  step: number;
  listStep: Array<{ title: string; desc: string }>;
  active?: boolean;
  isPump?: boolean;
}

export default function Stepper({
  step,
  listStep,
  active,
  isPump,
}: StepperProps) {
  const checkLastStep = (idx: number) => idx + 1 !== listStep.length;
  const checkCurrentStep = (idx: number) => idx + 1 === step;
  return (
    <div className="flex py-2 justify-between items-center">
      {listStep.map(
        ({ title, desc }: { title: string; desc: string }, idx: number) => (
          <Fragment key={idx}>
            <div
              className={`flex items-center gap-x-3 ${active && "max-w-56"} ${isPump && 'max-w-[273px]'}`}
            >
              <p
                className={`px-[15.5px] py-1.5 ${
                  checkCurrentStep(idx) || active
                    ? "bg-primary text-white"
                    : "bg-zinc-300 text-default-400"
                } text-lg font-medium leading-7 rounded-[4px]`}
              >
                {idx + 1}
              </p>
              <div>
                <p
                  className={`font-medium ${
                    checkCurrentStep(idx) || active
                      ? "text-[#1C1C1E]"
                      : "text-[#8E8E93]"
                  } ${!isPump && 'leading-[26px]  text-base'} ${isPump && 'font-normal'}`}
                >
                  {title}
                </p>
                <p className="text-[#8E8E93] text-[10px] leading-4">{desc}</p>
              </div>
            </div>
            {checkLastStep(idx) && <ArrowRightIcon />}
          </Fragment>
        )
      )}
    </div>
    // </div>
  );
}
