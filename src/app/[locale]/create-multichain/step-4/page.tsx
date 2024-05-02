"use client";
import CustomDivider from "@/components/CustomDivider";
import CustomEditor from "@/components/CustomEditor";
import { CreatePresaleContext } from "@/provider/CreatePresaleProvider";
import { Input, Link, Select, SelectItem, Textarea } from "@nextui-org/react";
import React, { useContext } from "react";

export default function CreateMultiChainStep4() {
  return (
    <div>
      <CustomDivider />
      <Input
        variant="bordered"
        label="Website"
        classNames={{ input: "placeholder:text-[#8E8E93]" }}
        placeholder="http://example.com"
      />
      <div className="my-6">
        {/* <Textarea
          variant="bordered"
          label="Description"
          classNames={{ input: "placeholder:text-[#8E8E93]" }}
          placeholder="Description"
        /> */}
        <CustomEditor />
      </div>
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
    </div>
  );
}
