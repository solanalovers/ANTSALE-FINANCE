import { PumpItemInterface } from "@/interface/pumpwithme.interface";
import {
  Button,
  Image,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import Description from "./PumpDescription";
import { calculateType } from "@/function/pumpwithme";

export default function PumpTableList({
  data,
}: {
  data: Array<PumpItemInterface>;
}) {
  return (
    <div className="container mx-auto">
      <Table aria-label="Pumpwithme table list">
        <TableHeader>
          <TableColumn>TOKEN</TableColumn>
          <TableColumn>CREATED BY</TableColumn>
          <TableColumn>DESCRIPTION</TableColumn>
          <TableColumn>MARKETCAP (USD)</TableColumn>
          <TableColumn>BONDING CURVE PROGRESS</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item: PumpItemInterface, idx: number) => (
            <TableRow key={idx}>
              <TableCell width={180}>
                <div className="flex gap-x-2">
                  <Image
                    src={item.image}
                    className="w-10 h-10 rounded-[14px] object-cover object-center"
                  />
                  <div>
                    <div className="flex items-center gap-x-0.5">
                      <p className="text-[#11181C] text-[14px] leading-[20px]">
                        {item.name}
                      </p>
                      <Image
                        src={calculateType(item.marketCap)}
                        className="w-3 h-3 object-center object-cover"
                      />
                    </div>
                    <p className="text-[11px] leading-4 text-[#A1A1AA]">
                      {item.symbol}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell width={220}>
                <div>
                  <div className="flex items-center gap-x-2">
                    <div className="flex gap-x-2 items-center">
                      <Image
                        src={item.author.image}
                        className="w-4 h-4 rounded-full object-cover object-center"
                      />
                      <p className="text-sm leading-5 text-[#11181C]">
                        {item.author.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <div className="w-1.5 h-1.5 bg-[#292D32] rounded-full" />
                      <p className="text-primary text-sm leading-[22px]">
                        98 replies
                      </p>
                    </div>
                  </div>
                  <p className="text-[#A1A1AA] text-[13px] leading-5">
                    {item.createdAt}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <Description
                  content={item.description}
                  line={2}
                />
              </TableCell>
              <TableCell>
                <p className="text-primary font-bold text-sm leading-[22px]">
                  ${item.marketCap.toLocaleString()}
                </p>
              </TableCell>
              <TableCell>
                <Progress
                  color="primary"
                  value={item.progress}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-x-2">
                  <Button
                    color="success"
                    className="py-1.5 px-3 min-w-0 text-white font-medium"
                  >
                    BUY
                  </Button>
                  <Button
                    color="danger"
                    className="py-1.5 px-3 min-w-0 text-white font-medium"
                  >
                    SELL
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
