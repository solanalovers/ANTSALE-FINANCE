"use client";
import ANTFAds from "@/components/LandingPage/ANTFAds";
import Hero from "@/components/LandingPage/Hero";
import JoinWithUs from "@/components/LandingPage/JoinWithUs";
import Partner from "@/components/LandingPage/Partner";
import Roadmap from "@/components/LandingPage/Roadmap";
import Why from "@/components/LandingPage/Why";
import React from "react";

export default function HomePage() {
  return (
    <div className="my-[3vw] flex flex-col gap-y-[3vw]">
      <div className="container mx-auto flex flex-col gap-y-[3vw]">
        <Hero />
        <ANTFAds />
        <Why />
        <Partner />
        <Roadmap />
      </div>
      <JoinWithUs />
    </div>
  );
}
