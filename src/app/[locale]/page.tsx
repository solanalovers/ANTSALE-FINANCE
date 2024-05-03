"use client";
import Banner from "@/components/Banner";
import HomeFilter from "@/components/home/HomeFilter";
import HomeList from "@/components/home/HomeList";
import React, { useState } from "react";

export default function Home() {
  const [currentList, setCurrentlist] = useState<any>('fairlaunch')
  return (
    <div>
      <Banner />
      <div className="container mx-auto mt-10">
        <HomeFilter currentList={currentList} setCurrentList={setCurrentlist}/>
        <HomeList currentList={currentList}/>
      </div>
    </div>
  );
}
