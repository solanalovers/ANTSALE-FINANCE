"use client";
import CustomDivider from "@/components/CustomDivider";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import { DatePicker, Input, Link, Select, SelectItem } from "@nextui-org/react";
import React, { useContext } from "react";
import { now } from "@internationalized/date";
import Addition from "@/components/Addition";
import { CreateMultiChainContext } from "@/provider/CreateMultiChainProvider";

export default function CreateMultiChainStep2() {
  return (
    <div>
      <CustomDivider />
      <Addition context={CreateMultiChainContext} />
    </div>
  );
}
