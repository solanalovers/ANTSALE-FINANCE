"use client";
import {
  LiquidityType,
  ListingOption,
  Project,
  ProjectType,
  Router,
  SaleType,
} from "@/interface/project-interface";
import React, { createContext, useState } from "react";
import { ProjectContext, defaultProjectConfig } from "./context";

const defaultFairLaunchConfig: Project = {
  ...defaultProjectConfig,
  projectType: ProjectType.FairLaunch,
  presaleRate: 20,
};

export default function CreateFairLaunchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [form, setForm] = useState<Project>(defaultFairLaunchConfig);

  const [next, setNext] = useState(false);

  return (
    <CreateFairLaunchContext.Provider
      value={{
        form,
        setForm,
        next,
        setNext,
        checkValidStep1: checkFairLaunchValidStep1,
        checkValidStep2: checkFairLaunchValidStep2,
      }}
    >
      {children}
    </CreateFairLaunchContext.Provider>
  );
}

export const checkFairLaunchValidStep1 = (form: Project): boolean => {
  console.log("Check valid", form);

  const isBaseValid =
    form.tokenAddress &&
    form.tokenInfo &&
    form.softCap &&
    form.softCap >= 1 &&
    form.totalSellingAmount &&
    form.totalSellingAmount > 0 &&
    form.liquidityPercent &&
    form.liquidityPercent >= 20 &&
    form.liquidityPercent <= 100;

  if (!isBaseValid) {
    return false;
  }

  if (form.isMaxBuy && form.maxBuy) {
    return form.maxBuy > 0;
  }

  if (
    form.liquidityType === LiquidityType.AutoLocking &&
    form.liquidityLockupTime
  ) {
    return form.liquidityLockupTime >= 43200;
  }

  return true;
};

export const checkFairLaunchValidStep2 = (form: Project): boolean => {
  if (form.website && form.description && checkFairLaunchValidStep1(form))
    return true;

  return false;
};

export const CreateFairLaunchContext = createContext<ProjectContext>({
  form: defaultFairLaunchConfig,
  setForm: () => {},
  next: false,
  setNext: () => {},
  checkValidStep1: checkFairLaunchValidStep1,
  checkValidStep2: checkFairLaunchValidStep2,
});
