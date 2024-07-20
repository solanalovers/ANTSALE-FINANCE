"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/provider/AppProvider";
import { solClusterList, tonClusterList } from "@/constant/network";
import { ArrowDownIcon } from "../Icon";

const handleClusterList = (platform: string) => {
  console.log(platform)
  if (platform === "sol") {
    return solClusterList;
  } else {
    return tonClusterList;
  }
};

export default function ClusterSelect() {
  const { cluster = "0", setCluster, platform } = useContext(AppContext);
  const [clusterList, setClusterList] = useState<any>(() => {
    return handleClusterList(platform);
  });

  useEffect(() => {
    setClusterList(handleClusterList(platform));
  }, [platform]);

  console.log(clusterList)

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant={undefined}
          className="bg-['none'] p-0"
        >
          <div className="flex items-center gap-x-2">
            <Image
              src={clusterList[cluster].logo}
              className="w-6 h-6 rounded-none object-center object-cover"
            />
            <p className="text-[#11181C] text-base leading-6">
              {clusterList[cluster].label}
            </p>
            <ArrowDownIcon
              color="#292D32"
              size="16"
            />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        selectionMode="single"
        onAction={(idx: any) => setCluster(idx)}
      >
        {clusterList.map(
          (
            item: { label: string; logo: string; name: string },
            idx: number
          ) => (
            <DropdownItem
              key={idx}
              // onClick={() => {
              //   setCluster(idx);
              // }}
            >
              <div className="flex items-center gap-x-2">
                <Image
                  src={item?.logo}
                  className="w-6 h-6 object-cover object-center"
                />
                <p className="text-[#11181C] text-base leading-6">
                  {item?.label}
                </p>
              </div>
            </DropdownItem>
          )
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
