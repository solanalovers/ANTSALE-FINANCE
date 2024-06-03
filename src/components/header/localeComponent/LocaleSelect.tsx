"use client";
import { localeList } from "@/constant/localeItemConstant";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";

import React from "react";
import { useLocale } from "next-intl";
import { ArrowDownIcon } from "@/components/Icon";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSelect() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const getCurrentLocale = () => {
    return localeList.filter((item: { label: string; value: string }) => {
      return item.value === locale;
    })[0].label;
  };

  const getCurrentPathName = (locale: string) => {
    const currentPathName = pathname.split("/");
    currentPathName[1] = locale;
    return currentPathName.join().replaceAll(",", "/");
  };
  return (
    <Dropdown className="p-0">
      <DropdownTrigger>
        <Button
          variant={undefined}
          className="bg-['none'] p-0"
        >
          <div className="flex items-center gap-x-2">
            <Image
              src={`/image/locale/${locale}.png`}
              className="w-5 h-[14px] rounded-none"
              radius="none"
            />
            {getCurrentLocale()}
            <ArrowDownIcon
              color="#292D32"
              size="16"
            />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {localeList.map(
          (
            item: { label: string; value: string; icon: string },
            idx: number
          ) => (
            <DropdownItem key={idx}>
              <div
                className="flex items-center gap-x-2"
                onClick={() => router.replace(getCurrentPathName(item.value))}
              >
                <Image
                  src={item.icon}
                  width={"20px"}
                  height={"14px"}
                  radius="none"
                />
                <p>{item.label}</p>
              </div>
            </DropdownItem>
          )
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
