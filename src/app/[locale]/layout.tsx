"use client";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Loading from "@/components/Loading";
import MobileComingSoon from "@/components/MobileComingSoon";
import { inter } from "@/utils/fonts";
import { usePathname } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const loaded = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(loaded);
  }, []);
  if (!isLoaded) return <Loading />;
  return (
    <Suspense fallback={<Loading />}>
      {window.innerWidth <= 1024 && pathname.split("/").length > 2 ? (
        <MobileComingSoon />
      ) : (
        <div style={{ fontFamily: inter.style.fontFamily }}>
          <DefaultLayout>{children}</DefaultLayout>
        </div>
      )}
      <ToastContainer />
    </Suspense>
  );
}
