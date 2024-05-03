import React from "react";
import CardItem from "./CardItem";
import { Pagination } from "@nextui-org/react";
import { fairlaunchCardData, multiChainCardData } from "@/constant/listData";

interface HomeListProps {
  currentList: string;
}

export default function HomeList({ currentList }: HomeListProps) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-6 my-10">
        {currentList === "fairlaunch" ? (
          <>
            {fairlaunchCardData.map((item: any, idx: number) => (
              <CardItem
                data={item}
                key={idx}
              />
            ))}
          </>
        ) : (
          <>
            {multiChainCardData.map((item: any, idx: number) => (
              <CardItem
                data={item}
                key={idx}
              />
            ))}
          </>
        )}
      </div>
      <div className="flex justify-end">
        <Pagination
          showControls
          total={10}
          initialPage={1}
          variant="light"
        />
      </div>
    </div>
  );
}
