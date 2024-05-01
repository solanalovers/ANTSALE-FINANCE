"use client";
import React, { createContext, useState } from "react";

export const CreatePresaleContext = createContext<any>({});

export default function CreatePresaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createPresaleForm, setCreatePresaleForm] = useState({});

  return (
    <CreatePresaleContext.Provider
      value={{ createPresaleForm, setCreatePresaleForm }}
    >
      {children}
    </CreatePresaleContext.Provider>
  );
}
