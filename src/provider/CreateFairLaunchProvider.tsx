"use client";
import React, { createContext, useState } from "react";

export const CreateFairLaunchContext = createContext<any>({});

export default function CreateFairLaunchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createFairLaunchForm, setCreateFairLaunchForm] = useState({
    liquidityType: "lock",
  });

  return (
    <CreateFairLaunchContext.Provider
      value={{ createFairLaunchForm, setCreateFairLaunchForm }}
    >
      {children}
    </CreateFairLaunchContext.Provider>
  );
}
