import {
  ArrowDownIcon,
  ContributeIcon,
  GroupAddIcon,
  ProjectsIcon,
  RocketIcon,
} from "@/components/Icon";
import useTrans from "@/hook/useTrans";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function DropdownNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTrans("header");

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <Dropdown isOpen={isOpen}>
      <DropdownTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-sm leading-5 text-default-500 font-semibold">
            {t("myService")}
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
      >
        <DropdownItem>
          <Link
            href={"/contributors"}
            className={`text-base leading-6 text-[#11181C] flex items-center gap-x-3`}
          >
            <ContributeIcon />
            <p>{t('my.contribute')}</p>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link
            href={"/contributors"}
            className={`text-base leading-6 text-[#11181C] flex items-center gap-x-3`}
          >
            <ProjectsIcon />
            <p>{t('my.project')}</p>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link
            href={"/contributors"}
            className={`text-base leading-6 text-[#11181C] flex items-center gap-x-3`}
          >
            <GroupAddIcon />
            <p>{t('my.community')}</p>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link
            href={"/contributors"}
            className={`text-base leading-6 text-[#11181C] flex items-center gap-x-3`}
          >
            <RocketIcon />
            <p>{t('my.pump')}</p>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
