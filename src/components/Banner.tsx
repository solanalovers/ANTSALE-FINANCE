import { bannerFAQ } from "@/constant/banner";
import { Archivo } from "next/font/google";
import React from "react";

const archivo = Archivo({ subsets: ["latin"] });

export default function Banner() {
  return (
    <div className="bg-white relative py-4">
      <div className="container mx-auto">
        <div className="flex gap-x-16 ">
          <img
            src="/image/banner.png"
            width={"486px"}
            height={"578px"}
          />
          <div className="flex-1 py-6 z-10">
            <p
              className={`text-[50px] leading-[60px] text-default-700 font-medium ${archivo.className}`}
            >
              How to Create a
            </p>
            <p
              className={`font-bold text-[50px] leading-[60px] text-green-500 ${archivo.className}`}
            >
              Successful Presale Project
            </p>
            <ol className="list-decimal mt-8 ml-6">
              {bannerFAQ.map((value: string, idx: number) => (
                <li key={idx} className="mt-5 text-lg leading-6">{value}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b to-[#A5D4FF] via-[rgba(147,203,255,52.2%)] from-transparent opacity-10" />
    </div>
  );
}
