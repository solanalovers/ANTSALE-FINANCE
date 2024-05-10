"use client";
import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

export default function DefaultLayout({ children }: any) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
    console.log('aaa')
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
