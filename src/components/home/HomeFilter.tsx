import { SearchIcon } from "@chakra-ui/icons";
import { Tabs, Tab, Input } from "@nextui-org/react";
import React from "react";
import HomeDropdown from "./HomeDropdown";

export default function HomeFilter() {
  return (
    <div className="flex items-center gap-x-6">
      <Tabs
        size={"md"}
        color="primary"
        className="font-semibold"
      >
        <Tab
          key="FAIRLAUNCH list"
          title="FAIRLAUNCH list"
        />
        <Tab
          key="MULTICHAIN-LAUNCH list"
          title="MULTICHAIN-LAUNCH list"
        />
      </Tabs>
      <Input
        variant="bordered"
        className="flex-1 border-[base-default-200] placeholder:(text-[layout.foreground-500]) text-sm leading-5"
        placeholder="Search"
        startContent={<SearchIcon color={"#71717A"} />}
      />
      <div className="flex items-center gap-x-3">
        <HomeDropdown
          label="Top 10 by"
          data={["item"]}
        />
        <HomeDropdown
          label="Pool Type"
          data={["item"]}
        />
        <HomeDropdown
          label="All Status"
          data={["item"]}
        />
        <HomeDropdown
          label="Sort by"
          data={["item"]}
        />
      </div>
    </div>
  );
}
