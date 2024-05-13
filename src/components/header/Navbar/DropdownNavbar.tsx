import { ArrowDownIcon, ContributeIcon, GroupAddIcon, ProjectsIcon, RocketIcon } from "@/components/Icon";
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
            MY SERVICES
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
            <p>My Contributors</p>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link
            href={"/contributors"}
            className={`text-base leading-6 text-[#11181C] flex items-center gap-x-3`}
          >
            <ProjectsIcon />
            <p>My Projects</p>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link
            href={"/contributors"}
            className={`text-base leading-6 text-[#11181C] flex items-center gap-x-3`}
          >
            <GroupAddIcon />
            <p>Build Community</p>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link
            href={"/contributors"}
            className={`text-base leading-6 text-[#11181C] flex items-center gap-x-3`}
          >
            <RocketIcon />
            <p>PumpWithMe</p>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
