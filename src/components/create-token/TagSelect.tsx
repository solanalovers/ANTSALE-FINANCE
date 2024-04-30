import React, { useState } from "react";

export default function TagSelect() {
  const [tagValue, setTagValue] = useState("");
  return (
    <div>
      <div className="border-[2px] border-default-200 rounded-lg px-3 py-[6px]">
        <p className="text-xs leading-3 text-default-600">Tags - Max 5 tags</p>
        <input
          value={tagValue}
          className="mt-2 outline-none"
          onChange={(e) => setTagValue(e?.target?.value)}
        />
      </div>
      <div className="flex gap-3 items-center mt-1.5">
        <p>Suggestion: </p>
        <div className="flex gap-2 items-center">
          <p className="px-2 py-0.5 bg-gray-200 text-gray-800 text-xs leading-4 rounded-md ">
            Meme
          </p>
          <p className="px-2 py-0.5 bg-gray-200 text-gray-800 text-xs leading-4 rounded-md ">
            Airdrop
          </p>
          <p className="px-2 py-0.5 bg-gray-200 text-gray-800 text-xs leading-4 rounded-md ">
            FanToken
          </p>
          <p className="px-2 py-0.5 bg-gray-200 text-gray-800 text-xs leading-4 rounded-md ">
            Tokenization
          </p>
          <p className="px-2 py-0.5 bg-gray-200 text-gray-800 text-xs leading-4 rounded-md ">
            RWA
          </p>
        </div>
      </div>
    </div>
  );
}
