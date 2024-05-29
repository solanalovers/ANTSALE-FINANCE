import BorderContent from "@/components/detail/BorderContent";
import { calculateType } from "@/function/pumpwithme";
import {
  PumpItemInterface,
  PumpTradeItemInterface,
  TradeType,
} from "@/interface/pumpwithme.interface";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Progress,
  Button,
  Image,
  Link,
} from "@nextui-org/react";
import React, { useState } from "react";
import Description from "../PumpDescription";
import { RefreshIcon } from "@/components/Icon";

const data: Array<PumpTradeItemInterface> = [
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.buy,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.buy,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.sell,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.sell,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.buy,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.buy,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.sell,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.sell,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.buy,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.buy,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.sell,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
  {
    account: {
      image: "/image/token-image.png",
      name: "rpsXHG",
    },
    type: TradeType.sell,
    priceAmount: 0.05,
    amount: "360.93k",
    date: "3s ago",
    transaction: "3qBZdt",
  },
];

export default function PumpTrade() {
  const [currentLength, setCurrentLength] = useState<number>(4);

  const handleViewMore = () => {
    setCurrentLength((prev) => prev + 4);
  };
  return (
    <div className="flex flex-col gap-4">
      <Table aria-label="Pumpwithme table trades list">
        <TableHeader>
          <TableColumn>ACCOUNT</TableColumn>
          <TableColumn>TYPE</TableColumn>
          <TableColumn>SOL</TableColumn>
          <TableColumn>DGN</TableColumn>
          <TableColumn>
            <div className="flex items-center gap-2">
              DATE{" "}
              <div className="hover:opacity-50 cursor-pointer">
                <RefreshIcon />
              </div>
            </div>
          </TableColumn>
          <TableColumn>TRANSACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {[...data]
            .splice(0, currentLength)
            .map((item: PumpTradeItemInterface, idx: number) => (
              <TableRow
                key={idx}
                className="h-[43px]"
              >
                <TableCell>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={item.account.image}
                      className="w-[22px] h-[22px]"
                    />
                    <p className="text-sm leading-[22px] text-[#1C1C1E] bg-[#F7CB45] px-1 rounded-[4px]">
                      {item.account.name}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <p
                    className={`text-[12px] font-semibold leading-[22px] ${
                      item.type === TradeType.buy
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.type}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-[12px] leading-[22px]">
                    {item.priceAmount}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-[12px] leading-[22px]">{item.amount}</p>
                </TableCell>
                <TableCell>
                  <p className="text-[12px] leading-[22px]">
                    {item.date.toString()}
                  </p>
                </TableCell>
                <TableCell>
                  <Link
                    className="text-[12px] leading-[22px] underline"
                    href=""
                    isExternal
                  >
                    {item.transaction}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {currentLength <= data.length && (
        <Button
          color="primary"
          onClick={handleViewMore}
        >
          Load More
        </Button>
      )}
    </div>
  );
}
