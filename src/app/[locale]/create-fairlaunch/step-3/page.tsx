"use client";
import CustomDivider from "@/components/CustomDivider";
import PoolInfo from "@/components/detail/PoolInfo";
import TokenInfo from "@/components/detail/TokenInfo";
import { CreateFairLaunchContext } from "@/provider/CreateFairLaunchProvider";
import { Input, Link, Select, SelectItem, Textarea } from "@nextui-org/react";
import React, { useContext } from "react";

export default function CreateFairLaunchStep3() {
  const { form, checkValidStep2 } = useContext(CreateFairLaunchContext);
  const tokenForPresale = form.totalSellingAmount ? form.totalSellingAmount : 0;
  const tokenForLiquidity =
    form.totalSellingAmount && form.liquidityPercent
      ? ((form.totalSellingAmount * form.liquidityPercent) / 100) * 0.95
      : 0;

  return (
    <div>
      <CustomDivider />
      {checkValidStep2(form) && (
        <>
          <TokenInfo data={form} />
          <PoolInfo data={{ ...form, tokenForPresale, tokenForLiquidity }} />
        </>
      )}
    </div>
  );
}
