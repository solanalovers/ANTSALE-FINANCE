"use client";
import Banner from "@/components/Banner";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const HomeList = dynamic(() => import('@/components/home/HomeList'), {
  ssr: false,
})
const HomeFilter = dynamic(() => import('@/components/home/HomeFilter'), {
  ssr: false,
})

export default function Home() {
  const [currentList, setCurrentlist] = useState<any>('presale')
  return (
    <div>
      {/* <Banner /> */}
      <div className="container mx-auto mt-10">
        <HomeFilter currentList={currentList} setCurrentList={setCurrentlist}/>
        <HomeList currentList={currentList}/>
      </div>
    </div>
  );
}
