import { Tabs, Tab, Input } from "@nextui-org/react";
import React, { Key } from "react";
import HomeDropdown from "./HomeDropdown";
import { SearchIcon } from "../Icon";
import useTrans from "@/hook/useTrans";
import { ProjectType } from "@/interface/project-interface";

interface HomeFilterProps {
  currentList: string;
  setCurrentList: (key: any) => void;
}

export default function HomeFilter({
  currentList,
  setCurrentList,
}: HomeFilterProps) {
  const t = useTrans("home");
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center gap-6">
      <Tabs
        size={"md"}
        color="primary"
        className="font-semibold text-sm leading-5"
        selectedKey={currentList}
        onSelectionChange={setCurrentList}
      >
        <Tab
          key={ProjectType.Presale}
          title={t("presale")}
        />
        <Tab
          key={ProjectType.FairLaunch}
          title={t("fairlaunch")}
        />
        <Tab
          isDisabled
          key={"multichain"}
          title={t("multichain")}
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
