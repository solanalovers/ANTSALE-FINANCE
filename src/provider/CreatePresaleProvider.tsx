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

export const CreatePresaleContext = createContext<ProjectContext>({
  form: defaultPresaleConfig,
  setForm: () => {},
  next: false,
  setNext: () => {},
});

export default function CreatePresaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [form, setForm] = useState<Project>(defaultPresaleConfig);

  const [next, setNext] = useState(false);

  return (
    <CreatePresaleContext.Provider value={{ form, setForm, next, setNext }}>
      {children}
    </CreatePresaleContext.Provider>
  );
}
