import { Chip } from "@nextui-org/react";
import React, { useState } from "react";

const tagRecommend: Array<string> = [
  "Meme",
  "Airdrop",
  "FanToken",
  "Tokenization",
  "RWA",
];

export default function TagSelect({ tagList, handleAddTag }: any) {
  const [tagValue, setTagValue] = useState("");
  return (
    <div>
      <div className="border-[2px] border-default-200 rounded-lg px-3 py-[6px]">
        <p className="text-xs leading-3 text-default-600">Tags - Max 5 tags</p>
        <div className="flex items-center gap-2 mt-2">
          {tagList?.length > 0 &&
            tagList.map((value: string, idx: number) => (
              <Chip
                key={idx}
                onClose={() => {
                  handleAddTag(
                    tagList.filter((item: string) => item !== value)
                  );
                }}
              >
                {value}
              </Chip>
            ))}
        </div>
        <input
          value={tagValue}
          className="mt-2 outline-none"
          onChange={(e) => setTagValue(e?.target?.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTag(tagList ? [...tagList, tagValue] : [tagValue]);
              setTagValue("");
            }
          }}
        />
      </div>
      <div className="flex gap-3 items-center mt-1.5">
        <p>Suggestion: </p>
        <div className="flex gap-2 items-center">
          {tagRecommend.map((value: string, idx: number) => (
            <>
              {!tagList?.includes(value) && (
                <Chip
                  key={idx}
                  className="cursor-pointer hover:opacity-80"
                  onClick={() => {
                    handleAddTag(tagList ? [...tagList, value] : [value]);
                  }}
                >
                  {value}
                </Chip>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
