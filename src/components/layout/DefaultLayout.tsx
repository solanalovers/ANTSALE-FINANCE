"use client";
import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import AdsItem from "../Ads/AdsItem";
import useTrans from "@/hook/useTrans";

export default function DefaultLayout({ children }: any) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);
  const tAnouncement = useTrans('anouncement')
  return (
    <div className="min-h-screen">
      <AdsItem content={
        pathname.split("/").length === 2 ?
        tAnouncement('home')
      : tAnouncement('other')
      } />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
