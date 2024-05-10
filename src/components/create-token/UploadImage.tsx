import React, { ChangeEventHandler } from "react";
import { UploadIcon } from "../Icon";
import { Image, Input } from "@nextui-org/react";

interface UploadImageProps {
  value: File;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function UploadImage({ onChange, value }: UploadImageProps) {
  return (
    <div className="relative">
      <Input
        label="Token Avatar"
        placeholder="Using image with ratio 1:1 (ex: 500px x 500px)"
        variant="bordered"
        isRequired
        readOnly
        value={value?.name}
        endContent={
          <UploadIcon
            size="24"
            color="#006FEE"
          />
        }
      />
      <input
        className="absolute left-0 right-0 top-0 bottom-0 opacity-0 z-10 cursor-pointer"
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
}
