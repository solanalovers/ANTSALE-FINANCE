"use client";
import CustomDivider from "@/components/CustomDivider";
import PoolInfo from "@/components/detail/PoolInfo";
import TokenInfo from "@/components/detail/TokenInfo";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import { Input, Link, Select, SelectItem, Textarea } from "@nextui-org/react";
import React, { useContext } from "react";

export default function CreateMultiChainStep3() {
  return (
    <div>
      <CustomDivider />
      <TokenInfo />
      <PoolInfo />
    </div>
  );
}
