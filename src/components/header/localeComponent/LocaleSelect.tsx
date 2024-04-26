"use client";
import { localeList } from "@/constant/localeItemConstant";
import { TriangleDownIcon } from "@chakra-ui/icons";
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
import { useRouter as useLocaleRouter } from "@/navigation";

export default function LocaleSelect() {
  const locale = useLocale();
  const localeRouter = useLocaleRouter();

  const getCurrentLocale = () => {
    return localeList.filter((item: { label: string; value: string }) => {
      return item.value === locale;
    })[0].label;
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant={undefined}
          className="bg-['none']"
        >
          <div className="flex items-center gap-x-2">
            <Image
              src={`/image/locale/${locale}.png`}
              className="w-5 h-[14px] rounded-none"
            />
            {getCurrentLocale()}
            <TriangleDownIcon />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {localeList.map(
          (
            item: { label: string; value: string; icon: string },
            idx: number
          ) => (
            <DropdownItem
              key={idx}
              onClick={() =>
                localeRouter.replace("/pathnames", { locale: item.value })
              }
            >
              <div className="flex items-center gap-x-2">
                <Image
                  src={item.icon}
                  width={"20px"}
                  height={"14px"}
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
