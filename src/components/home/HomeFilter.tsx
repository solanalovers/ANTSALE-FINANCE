import { SearchIcon } from "@chakra-ui/icons";
import { Tabs, Tab, Input } from "@nextui-org/react";
import React, { Key } from "react";
import HomeDropdown from "./HomeDropdown";

interface HomeFilterProps {
  currentList: string;
  setCurrentList: (key: Key) => void
}

export default function HomeFilter({currentList, setCurrentList}: HomeFilterProps) {
  return (
    <div className="flex items-center gap-x-6">
      <Tabs
        size={"md"}
        color="primary"
        className="font-semibold text-sm leading-5"
        selectedKey={currentList}
        onSelectionChange={setCurrentList}
      >
        <Tab
          key="fairlaunch"
          title="FAIRLAUNCH list"
        />
        <Tab
          key="multichain"
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
