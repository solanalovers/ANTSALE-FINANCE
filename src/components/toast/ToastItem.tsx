import React from "react";
import { CautionIcon, InfoIcon } from "../Icon";

export default function ToastItem({
  content,
  status,
}: {
  content: string;
  status: string;
}) {
  const iconList: any = {
    caution: {
      icon: <CautionIcon />,
      cl: "#FEEBCB",
    },
    info: {
      icon: <InfoIcon />,
      cl: "#BEE3F8",
    },
  };
  return (
    <div
      className={`px-4 py-3 flex items-center gap-x-3`}
      style={{ backgroundColor: iconList[status].cl }}
    >
      {iconList[status].icon}
      <p className="text-base leading-6" dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  );
}
