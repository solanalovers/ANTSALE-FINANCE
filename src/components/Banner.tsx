import React from "react";

export default function Banner() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-x-16">
        <img src="/image/banner.png" width={'486px'} height={'578px'}/>
        <div className="bg-blue-50"></div>
      </div>
    </div>
  );
}
