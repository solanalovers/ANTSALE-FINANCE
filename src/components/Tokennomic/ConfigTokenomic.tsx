import React, { useState } from "react";
import CustomDivider from "../CustomDivider";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { MinusIcon, PlusIcon } from "../Icon";
import { ChartInterface } from "@/interface/chart.interface";

const defaultChartItem: ChartInterface = {
  title: "",
  dataSource: "",
  color: "#000",
};

const TokenomicItem = ({
  item,
  handleChange,
}: {
  item: ChartInterface;
  handleChange: (chartData: ChartInterface) => void;
}) => (
  <div className="flex items-center gap-x-4">
    <Input
      label="Title"
      placeholder="Input title"
      variant="bordered"
      value={item.title}
      onChange={(e) => {
        const newData = { ...item };
        newData.title = e.target.value;
        handleChange(newData);
      }}
    />
    <Input
      label="DataSource"
      placeholder="Input in % or number"
      variant="bordered"
      value={item.dataSource}
      onChange={(e) => {
        const newData = { ...item };
        newData.dataSource = e.target.value;
        handleChange(newData);
      }}
    />
  </div>
);

export default function ConfigTokenomic() {
  const [form, setForm] = useState({
    type: "percent",
    chart: [{ ...defaultChartItem }],
  });
  return (
    <div>
      <CustomDivider />
      <p className="text-base leading-[26px] font-medium text-[#1C1C1E]">
        Config Token Metrics
      </p>
      <RadioGroup
        className="my-4"
        value={form.type}
      >
        <div className="flex gap-x-4 items-center">
          <Radio
            value="percent"
            size="sm"
          >
            <p className={"text-sm leading-5"}>Using Percent</p>
          </Radio>
          <Radio
            value="number"
            size="sm"
          >
            <p className={"text-sm leading-5"}>Using Numbers</p>
          </Radio>
        </div>
      </RadioGroup>
      <div className="grid grid-cols-2 gap-x-6">
        <div>
          <div className="mb-6 flex flex-col gap-y-6">
            {form.chart.map((item: ChartInterface, idx: number) => (
              <TokenomicItem
                item={item}
                handleChange={(chartData: ChartInterface) => {
                  const chart = [...form.chart];
                  chart[idx] = chartData;
                  setForm((prev: any) => ({ ...prev, chart }));
                }}
                key={idx}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-x-3 cursor-pointer hover:opacity-50 ${form.chart}`}
              onClick={() => {
                const chart = [...form.chart, { ...defaultChartItem }];
                setForm((prev: any) => ({ ...prev, chart }));
              }}
            >
              <PlusIcon />
              <p className="text-base leading-6 text-primary">
                ADD Token Metric
              </p>
            </div>
            <div
              className={`flex items-center gap-x-3 cursor-pointer hover:opacity-50 ${
                form.chart.length === 1 && "pointer-events-none"
              }`}
              onClick={() => {
                const chart = [...form.chart];
                chart.pop();
                setForm((prev: any) => ({ ...prev, chart }));
              }}
            >
              <MinusIcon color={form.chart.length === 1 ? "#ccc" : "#F31260"} />
              <p
                className={`text-base leading-6 ${
                  form.chart.length === 1 ? "text-[#ccc]" : "text-red-500"
                }`}
              >
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
