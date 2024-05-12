import { Button, Image, Input } from "@nextui-org/react";
import React from "react";
import CustomAvatar from "./CustomAvatar";
import CustomEditor from "./CustomEditor";
import CustomDivider from "./CustomDivider";
import { EditIcon } from "./Icon";

export default function Addition() {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <div className="relative">
          <Image
            src="/image/img-detail.png"
            radius="none"
            className="object-cover object-center h-[200px]"
            width={"100%"}
          />
          <Button
            color={undefined}
            className="flex items-center absolute right-3 bottom-3 z-50"
            size="sm"
          >
            <EditIcon />
            <p className="text-sm leading-5 font-medium">Edit background</p>
          </Button>
        </div>
        <div className="relative mt-[-60px] z-20 ml-10 w-[120px] h-[120px]">
          <Image
            className="w-full h-full"
            src="/image/token-image-1.png"
          />
          <Button
            color={undefined}
            className="absolute right-0 bottom-1 z-50 p-1.5 min-w-0 w-fit flex items-center"
            size="sm"
            radius="full"
            >
            <EditIcon color="#006FEE"/>
          </Button>
        </div>
      </div>
      <Input
        variant="bordered"
        label="Website"
        classNames={{ input: "placeholder:text-[#8E8E93]" }}
        placeholder="http://example.com"
      />
      <CustomEditor />
      <div className="grid grid-cols-2 gap-6">
        <Input
          variant="bordered"
          label="Telegram"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="http://t.me/abc"
        />
        <Input
          variant="bordered"
          label="Discord"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="http://discord.com/abc"
        />
        <Input
          variant="bordered"
          label="Reddit"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="http://reddit.com/abc"
        />
        <Input
          variant="bordered"
          label="Youtube Video"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="http://youtube.com/abc"
        />
        <Input
          variant="bordered"
          label="Instagram"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="http://instagram.com/abc"
        />
        <Input
          variant="bordered"
          label="Github"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="http://github.com/abc"
        />
        <Input
          variant="bordered"
          label="Twitter"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="http://twitter.com/abc"
        />
        <Input
          variant="bordered"
          label="Facebook"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="http://facebook.com/abc"
        />
      </div>
      <CustomDivider />
    </div>
  );
}
