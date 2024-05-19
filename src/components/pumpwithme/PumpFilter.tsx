import { Button, Input } from "@nextui-org/react";
import React from "react";
import { ListViewFilterIcon, SearchIcon, TableViewFilterIcon } from "../Icon";
import HomeDropdown from "../home/HomeDropdown";

export default function PumpFilter({
  filter,
  setFilter,
  onClickCreate,
}: {
  filter: { type: string };
  setFilter: (value: any) => void;
  onClickCreate: () => void;
}) {
  return (
    <div className="flex items-center gap-x-6 container mx-auto">
      <Button
        color="primary"
        onClick={onClickCreate}
      >
        CREATE PumpWithMe
      </Button>
      <Input
        variant="bordered"
        className="flex-1 border-[base-default-200] placeholder:(text-[layout.foreground-500]) text-sm leading-5"
        placeholder="Search"
        startContent={<SearchIcon color={"#71717A"} />}
      />
      <div className="flex items-center gap-x-3">
        <HomeDropdown
          label="Sort: Bump Order"
          data={["item"]}
        />
        <HomeDropdown
          label="Order: ASC"
          data={["item"]}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <div
          className="cursor-pointer hover:opacity-80"
          onClick={() => setFilter((prev: any) => ({ ...prev, type: "list" }))}
        >
          <ListViewFilterIcon
            color={filter.type === "list" ? "#006FEE" : "#8E8E93"}
          />
        </div>
        <div
          className="cursor-pointer hover:opacity-80"
          onClick={() => setFilter((prev: any) => ({ ...prev, type: "table" }))}
        >
          <TableViewFilterIcon
            color={filter.type === "table" ? "#006FEE" : "#8E8E93"}
          />
        </div>
      </div>
    </div>
  );
}
