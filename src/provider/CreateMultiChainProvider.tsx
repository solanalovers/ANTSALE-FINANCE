"use client";
import React, { createContext, useState } from "react";

export const CreateMultiChainContext = createContext<any>({});

export default function CreateMultiChainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [createMultiChainForm, setCreateMultiChainForm] = useState({priceModel: 'fixed-price'});

  return (
    <CreateMultiChainContext.Provider
      value={{ createMultiChainForm, setCreateMultiChainForm }}
    >
      {children}
    </CreateMultiChainContext.Provider>
  );
}
