import React, { ChangeEventHandler } from "react";
import { UploadIcon } from "../Icon";
import { Image } from "@nextui-org/react";

interface UploadImageProps {
  value: File;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function UploadImage({ onChange, value }: UploadImageProps) {
  return (
    <>
      {!value ? (
        <div className="border-[2px] border-default-200 rounded-lg relative flex items-center justify-center hover:opacity-50">
          <div className="flex flex-col items-center justify-center gap-1">
            <UploadIcon />
            <p className="text-base leading-6 text-[#8E8E93]">Upload image</p>
            <input
              className="absolute left-0 right-0 top-0 bottom-0 opacity-0 z-10 cursor-pointer"
              type="file"
              accept="image/*"
              onChange={onChange}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Image
            src={window.URL.createObjectURL(value)}
            className="object-center object-cover rounded-lg h-[300px] w-[300px]"
          />
        </div>
      )}
    </>
  );
}
