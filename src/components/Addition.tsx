import { Image, Input } from "@nextui-org/react";
import React from "react";
import CustomAvatar from "./CustomAvatar";
import CustomEditor from "./CustomEditor";
import CustomDivider from "./CustomDivider";

export default function Addition() {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <Image
          src="/image/img-detail.png"
          radius="none"
          className="object-cover object-center h-[200px]"
          width={"100%"}
        />
        <Image
          className="mt-[-60px] z-20 ml-10 w-[120px] h-[120px]"
          src="/image/token-image-1.png"
        />
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
      <CustomDivider/>
    </div>
  );
}
