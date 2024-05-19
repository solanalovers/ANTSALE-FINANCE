import React from "react";
import Stepper from "../Stepper";
import { pumpwithmeListStep } from "@/constant/listStep";

export default function PumpHeader() {
  return (
    <div className="container mx-auto py-10">
      <p className="text-[28px] font-semibold text-center">How it works</p>
      <p className="text-[20px] text-[#1C1C1E] text-center mt-2 mb-4">
        Pump prevents rugs by making sure that all created tokens are safe.<br/> Each
        coin on pumpwithme is a <span className="text-green-600">fair-lauch</span> with no{" "}
        <span className="text-[#357AF6]">presale</span> and <span className="text-[#F09436]">no team allocation.</span>
      </p>
      <Stepper step={1} active listStep={pumpwithmeListStep} isPump/>
    </div>
  );
}
