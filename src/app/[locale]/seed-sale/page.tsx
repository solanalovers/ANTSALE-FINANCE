"use client";
import AntBot from "@/components/AntBot";
import ANTFAds from "@/components/LandingPage/ANTFAds";
import React from "react";

export default function SeedSale() {
  return (
    <div className="container mx-auto">
      <div className="py-[60px]">
        <p className="text-[46px] leading-[56px] text-center font-bold text-[#001731]">$ANTF - Your Hidden Gem</p>
        <p className="text-center text-[20px] leading-[28px] font-medium text-[#8E8E93]">
          AntSale Finance - The Web3 crowdfunding platform that securely,
          fairly, and effortlessly connects investors with high-potential
          projects.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-6">
        <ANTFAds />
        <AntBot/>
      </div>
    </div>
  );
}
