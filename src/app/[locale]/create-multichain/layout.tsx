"use client";
import Banner from "@/components/Banner";
import Stepper from "@/components/Stepper";
import CreateSaleFooter from "@/components/create-sale/CreateSaleFooter";
import BorderContent from "@/components/detail/BorderContent";
import { listStep } from "@/constant/listStep";
import { CreateFairLaunchContext } from "@/provider/CreateFairLaunchProvider";
import CreateMultiChainProvider, {
  CreateMultiChainContext,
} from "@/provider/CreateMultiChainProvider";
import { usePathname } from "next/navigation";
import React, { ReactNode, useContext, useEffect, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const step = Number(pathname.slice(-1));
  const currentRoute = pathname.split(`/step-${step}`)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <CreateMultiChainProvider>
      {/* <Banner /> */}
      <div className="container mx-auto mt-10">
        <BorderContent>
          <Stepper
            step={step}
            listStep={listStep}
          />
          {children}
          <CreateSaleFooter
            isFirst={step === 1}
            isLast={step === listStep.length}
            step={step}
            finalText="CREATE MULTICHAIN-LAUNCH"
            currentRoute={currentRoute}
            context={CreateMultiChainContext}
          />
        </BorderContent>
      </div>
    </CreateMultiChainProvider>
  );
}
