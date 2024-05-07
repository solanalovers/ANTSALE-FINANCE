"use client";
import Banner from "@/components/Banner";
import Stepper from "@/components/Stepper";
import CreateSaleFooter from "@/components/create-sale/CreateSaleFooter";
import BorderContent from "@/components/detail/BorderContent";
import CreateFairLaunchProvider, {
  CreateFairLaunchContext,
} from "@/provider/CreateFairLaunchProvider";
import { usePathname } from "next/navigation";
import React, { ReactNode, useContext, useEffect } from "react";

const listStep = [
  {
    title: "Verify Token & Config Launchpad",
    desc: "Enter the token address and launchpad info",
  },
  {
    title: "Add Additional Info",
    desc: "Let people know who you are",
  },
  {
    title: "Finalize",
    desc: "Review your information",
  }
];

export default function Layout({ children }: { children: ReactNode }) {
  const { createFairLaunchForm } = useContext(CreateFairLaunchContext);
  const pathname = usePathname();
  const step = Number(pathname.slice(-1));
  const currentRoute = pathname.split(`/step-${step}`)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <CreateFairLaunchProvider>
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
            finalText="CREATE FAIRLAUNCH"
            currentRoute={currentRoute}
          />
        </BorderContent>
      </div>
    </CreateFairLaunchProvider>
  );
}
