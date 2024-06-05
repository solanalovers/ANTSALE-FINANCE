"use client";
import CustomDivider from "@/components/CustomDivider";
import PoolInfo from "@/components/detail/PoolInfo";
import TokenInfo from "@/components/detail/TokenInfo";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import React, { useContext } from "react";

export default function CreatePresaleStep3() {
  const { form, checkValidStep2 } = useContext(CreatePresaleContext);
  const tokenForPresale = Number(form.hardCap) * Number(form.presaleRate);
  const tokenForLiquidity =
    Number(form.hardCap) *
    Number(form.listingRate) *
    Number(form.liquidityPercent) *
    0.0095;

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
