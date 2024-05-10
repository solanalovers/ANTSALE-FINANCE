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

import React, { useContext } from "react";
import { useLocale } from "next-intl";
import { useRouter as useLocaleRouter } from "@/navigation";
import { AppContext } from "@/provider/AppProvider";
import { clusterList } from "@/constant/network";

export default function ClusterSelect() {
  const { cluster, setCluster } = useContext(AppContext);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant={undefined}
          className="bg-['none']"
        >
          <div className="flex items-center gap-x-2">
            <Image
              src={clusterList[cluster].logo}
              className="w-5 h-[14px] rounded-none"
            />
            {clusterList[cluster].label}
            <TriangleDownIcon />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {clusterList.map(
          (
            item: { label: string; logo: string; name: string },
            idx: number
          ) => (
            <DropdownItem
              key={idx}
              onClick={() => setCluster(idx)}
            >
              <div className="flex items-center gap-x-2">
                <Image
                  src={item.logo}
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
