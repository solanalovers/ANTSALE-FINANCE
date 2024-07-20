import {
  ArrowDownIcon,
  ContributeIcon,
  ProjectsIcon,
  GroupAddIcon,
  RocketIcon,
} from "@/components/Icon";
import useClickOutside from "@/hook/useClickOutside";
import useTrans from "@/hook/useTrans";
import { AppContext } from "@/provider/AppProvider";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
} from "@nextui-org/react";
import { useCookies } from "next-client-cookies";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

export default function CustomDropdown({
  data,
  title,
  isMobileOpen,
  platform,
}: {
  data: Array<{
    label: string;
    value: string;
    isHaveStepper?: boolean;
    platform?: string;
  }>;
  title: string;
  isMobileOpen?: boolean;
  platform?: string;
}) {
  const { isOpen, setIsOpen, containerRef } = useClickOutside();
  const { platform: globalPlatform, setPlatform } = useContext(AppContext);
  const cookieStore = useCookies();
  const pathname = usePathname();
  const t = useTrans("header");

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isMobileOpen) {
      setIsOpen(false);
    }
  }, [isMobileOpen]);
  return (
    <Dropdown isOpen={isOpen}>
      <DropdownTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={isOpen ? handleMouseLeave : handleMouseEnter}
      >
        <div className="flex items-center gap-1 cursor-pointer ">
          <p className="text-sm leading-5 text-default-500 font-semibold">
            {t(title)}
          </p>
          <ArrowDownIcon
            color="#71717A"
            size="16"
          />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="before:w-full before:h-5 relative before:absolute before:top-[-10px]"
        ref={containerRef}
      >
        {data.map((item, idx) => (
          <DropdownItem key={idx}>
            <Link
              href={item.isHaveStepper ? item.value + "/step-1" : item.value}
              onClick={() => {
                setPlatform(platform || item.platform);
              }}
              className={`text-sm leading-5 w-full relative text-default-500 font-semibold header-link light ${
                (pathname === item.value ||
                  pathname.startsWith(`${item.value}/step-`)) &&
                "text-primary font-bold after:absolute after:h-[2px] after:bg-primary after:w-full after:left-0 after:bottom-[-10px]"
              }`}
            >
              <p>{t(item.label)}</p>
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
