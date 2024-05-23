"use client";
import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import AdsItem from "../Ads/AdsItem";

export default function DefaultLayout({ children }: any) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
    console.log("aaa");
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);
  return (
    <div className="min-h-screen">
      {pathname.split("/").length === 2 && <AdsItem content={`Introducing: <span class='font-semibold text-primary-500'>$ANTF Seed Sale!</span> Read more here or visit Magic Eden Launchpad for minting`} />}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
