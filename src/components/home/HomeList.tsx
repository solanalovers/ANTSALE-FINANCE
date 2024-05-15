import React, { Fragment, useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Pagination } from "@nextui-org/react";
import { fairlaunchCardData, multiChainCardData } from "@/constant/listData";
import useEndList from "@/hook/useEndList";

interface HomeListProps {
  currentList: string;
}

export default function HomeList({ currentList }: HomeListProps) {
  const [listData, setListData] = useState<Array<any>>([]);
  const [currentViewLength, setCurrentViewLength] = useState<number>(9);
  const handleLoadMore = () => {
    setCurrentViewLength((prev: number) => prev + 9);
  };

  const { containerRef } = useEndList(handleLoadMore);
  useEffect(() => {
    setCurrentViewLength(9);
    switch (currentList) {
      case "multichain":
        return setListData(multiChainCardData);
        break;
      default:
        return setListData(fairlaunchCardData);
    }
  }, [currentList]);

  return (
    <div>
      <div
        className="grid grid-cols-3 gap-6 my-10"
        ref={containerRef}
      >
        {listData.map((item: any, idx: number) => (
          <Fragment key={idx}>
            {idx + 1 <= currentViewLength && <CardItem data={item} />}
          </Fragment>
        ))}
      </div>
      {/* <div className="flex justify-end">
        <Pagination
          showControls
          total={10}
          initialPage={1}
          variant="light"
        />
      </div> */}
    </div>
  );
}
