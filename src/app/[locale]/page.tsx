"use client";
import Banner from "@/components/Banner";
import HomeFilter from "@/components/home/HomeFilter";
import HomeList from "@/components/home/HomeList";
import React from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto mt-10">
        <HomeFilter />
        <HomeList />
      </div>
    </div>
  );
}
