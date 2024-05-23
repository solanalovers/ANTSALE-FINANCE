import React from "react";

export default function AdsItem({ content }: { content: string }) {
  return (
    <div className="py-4 flex items-center justify-center bg-primary-50">
      <p
        className="text-[0.938vw] leading-[1.354vw] text-primary-300"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </div>
  );
}
