import { countdownToSaleEnd } from "@/function/timer";
import { DateValue } from "@nextui-org/react";
import React, { useEffect, useState } from "react";



export default function Countdown({ multichain, endTime }: { multichain?: boolean, endTime: DateValue }) {
  const [timer, setTimer] = useState("00:00:00:00");
  useEffect(() => {
    const countdown = setInterval(() => {
      const timeleft = countdownToSaleEnd(endTime);
      setTimer(timeleft);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);
  return (
    <div className="flex items-center gap-x-1">
      <p
        className={`p-2 ${
          multichain
            ? "bg-primary text-white text-[24px] leading-8 font-semibold"
            : "bg-primary-50  text-sm leading-5 "
        } rounded-[4px]`}
      >
        {timer.split(":")[0]}
      </p>
      <p className="text-sm leading-5">:</p>
      <p
        className={`p-2 ${
          multichain
            ? "bg-primary text-white text-[24px] leading-8 font-semibold"
            : "bg-primary-50  text-sm leading-5 "
        } rounded-[4px]`}
      >
        {timer.split(":")[1]}
      </p>
      <p className="text-sm leading-5">:</p>
      <p
        className={`p-2 ${
          multichain
            ? "bg-primary text-white text-[24px] leading-8 font-semibold"
            : "bg-primary-50  text-sm leading-5 "
        } rounded-[4px]`}
      >
        {timer.split(":")[2]}
      </p>
      <p className="text-sm leading-5">:</p>
      <p
        className={`p-2 ${
          multichain
            ? "bg-primary text-white text-[24px] leading-8 font-semibold"
            : "bg-primary-50  text-sm leading-5 "
        } rounded-[4px]`}
      >
        {timer.split(":")[3]}
      </p>
    </div>
  );
}
