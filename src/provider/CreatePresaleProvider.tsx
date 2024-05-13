"use client";
import React, { createContext, useState } from "react";

export const CreatePresaleContext = createContext<any>({});

export default function CreatePresaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createPresaleForm, setCreatePresaleForm] = useState({
    currency: 'sol',
    feeOption: '5%',
    listingOption: "auto",
  });

  return (
    <CreatePresaleContext.Provider
      value={{ createPresaleForm, setCreatePresaleForm }}
    >
      {children}
    </CreatePresaleContext.Provider>
  );
}
