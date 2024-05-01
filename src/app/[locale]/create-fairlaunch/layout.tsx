"use client";
import Banner from "@/components/Banner";
import Stepper from "@/components/Stepper";
import BorderContent from "@/components/detail/BorderContent";
import CreateFairLaunchProvider, { CreateFairLaunchContext } from "@/provider/CreateFairLaunchProvider";
import { usePathname } from "next/navigation";
import React, { ReactNode, useContext, useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { createFairLaunchForm } = useContext(CreateFairLaunchContext);
  const pathname = usePathname();
  const step = Number(pathname.slice(-1));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <CreateFairLaunchProvider>
      <Banner />
      <div className="container mx-auto mt-40">
        <BorderContent>
          <Stepper
            step={step}
            listStep={[]}
          />
          {children}
        </BorderContent>
      </div>
    </CreateFairLaunchProvider>
  );
}
