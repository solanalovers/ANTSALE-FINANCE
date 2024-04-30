import Banner from "@/components/Banner";
import LeftContent from "@/components/detail/LeftContent";
import RightContent from "@/components/detail/RightContent";
import React from "react";

export default function Detail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Banner />
      <div className="container mx-auto flex gap-x-6 mt-10">
        <div className="flex-1">
          <RightContent />
        </div>
        <div className="w-[34.2%]">
          <LeftContent />
        </div>
      </div>
    </div>
  );
}
