"use client";
import Banner from "@/components/Banner";
import LeftContent from "@/components/detail/LeftContent";
import RightContent from "@/components/detail/RightContent";
import React, { useEffect, useState } from "react";

export default function Detail({ params }: { params: { slug: string } }) {
  const [type] = useState(() => {
    switch (params.slug) {
      case "4":
        return "multi-price";
        break;
      case "5":
        return "purchase-currency";
        break;
      case "6":
        return "fixed-price";
        break;
      default:
        return "normal";
    }
  });
  return (
    <div>
      {/* <Banner /> */}
      <div className="container mx-auto flex gap-x-6 mt-10">
        <div className="flex-1">
          <LeftContent />
        </div>
        <div className="w-[34.2%]">
          <RightContent type={type} />
        </div>
      </div>
    </div>
  );
}
