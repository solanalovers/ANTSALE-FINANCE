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

const defaultFairLaunchConfig: Project = {
  ...defaultProjectConfig,
  projectType: ProjectType.FairLaunch,
  presaleRate: 20,
};

export const CreateFairLaunchContext = createContext<ProjectContext>({
  form: defaultFairLaunchConfig,
  setForm: () => {},
  next: false,
  setNext: () => {},
});

export default function CreateFairLaunchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [form, setForm] = useState<Project>(defaultFairLaunchConfig);

  const [next, setNext] = useState(false);

  return (
    <CreateFairLaunchContext.Provider value={{ form, setForm, next, setNext }}>
      {children}
    </CreateFairLaunchContext.Provider>
  );
}
