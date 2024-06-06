import React from "react";

export default function AdsItem({ content }: { content: string }) {
  return (
    <div className="p-4 flex items-center justify-center bg-primary-50">
      <p
        className="text-[16px] leading-[24px] text-primary-300"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </div>
  );
}
