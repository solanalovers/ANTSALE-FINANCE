import React, { Fragment, useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Pagination, Spinner } from "@nextui-org/react";
import { fairlaunchCardData, multiChainCardData } from "@/constant/listData";
import useEndList from "@/hook/useEndList";
import { Project } from "@/interface/project-interface";

interface HomeListProps {
  data: Project[];
  loading: boolean;
}

export default function HomeList({ data, loading }: HomeListProps) {
  const [currentViewLength, setCurrentViewLength] = useState<number>(9);
  const handleLoadMore = () => {
    setCurrentViewLength((prev: number) => prev + 9);
  };

  const { containerRef } = useEndList(handleLoadMore);

  return (
    <div>
      {loading && (
        <div className="w-full flex items-center justify-center py-10">
          <Spinner />
        </div>
      )}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-10"
        ref={containerRef}
      >
        {data.map((item: any, idx: number) => (
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
