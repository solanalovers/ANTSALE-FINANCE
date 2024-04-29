import React from "react";
import CardItem from "./CardItem";
import { Pagination } from "@nextui-org/react";

export default function HomeList() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-6 my-10">
        <CardItem />
        <CardItem />
        <CardItem />
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
