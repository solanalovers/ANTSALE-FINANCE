'use client';
import {
  LiquidityType,
  ListingOption,
  Project,
  ProjectType,
  Router,
  SaleType,
} from '@/interface/project-interface';
import React, { createContext, useState } from 'react';
import { ProjectContext, defaultProjectConfig } from './context';

const defaultPresaleConfig: Project = {
  ...defaultProjectConfig,
  projectType: ProjectType.Presale,
};

export default function CreatePresaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [form, setForm] = useState<Project>(defaultPresaleConfig);

  const [next, setNext] = useState(false);

  return (
    <CreatePresaleContext.Provider
      value={{
        form,
        setForm,
        next,
        setNext,
        checkValidStep1: checkPresaleValidStep1,
        checkValidStep2: checkPresaleValidStep2,
      }}
    >
      {children}
    </CreatePresaleContext.Provider>
  );
}

export const checkPresaleValidStep1 = (form: Project): boolean => {
  if (
    form.tokenAddress &&
    form.tokenInfo &&
    form.presaleRate &&
    form.presaleRate > 0 &&
    form.listingRate &&
    form.listingRate > 0 &&
    form.softCap &&
    form.hardCap &&
    form.softCap > 0 &&
    form.softCap >= form.hardCap * 0.2 &&
    form.hardCap > 0 &&
    form.minBuy &&
    form.minBuy > 0 &&
    form.maxBuy &&
    form.maxBuy > 0 &&
    form.liquidityPercent &&
    form.liquidityPercent >= 20 &&
    form.liquidityPercent <= 100
  )
    return true;

  return false;
};

export const checkPresaleValidStep2 = (form: Project): boolean => {
  if (
    form.website !== undefined &&
    form.description !== undefined &&
    checkPresaleValidStep1(form)
  )
    return true;

  return false;
};

export const CreatePresaleContext = createContext<ProjectContext>({
  form: defaultPresaleConfig,
  setForm: () => {},
  next: false,
  setNext: () => {},
  checkValidStep1: checkPresaleValidStep1,
  checkValidStep2: checkPresaleValidStep2,
});
