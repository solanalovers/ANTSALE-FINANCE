import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { toTitleCase } from "@/function/text";
import { ArrowDownIcon } from "../Icon";

export default function HomeDropdown({ label, data }: any) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          color="primary"
          className="capitalize font-medium text-sm leading-5 p-[6px]"
        >
          {label}
          <ArrowDownIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={toTitleCase(label)}
        variant="bordered"
        color="primary"
        disallowEmptySelection
        selectionMode="single"
      >
        {data.map((item: any) => (
          <DropdownItem key="text">{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
