import React, { useEffect, useRef, useState } from "react";
import CustomDivider from "../CustomDivider";
import { Button, Checkbox, Input, Radio, RadioGroup } from "@nextui-org/react";
import { ArrowDownIcon, MinusIcon, PlusIcon } from "../Icon";
import { ChartInterface } from "@/interface/chart.interface";
import ColorPicker from "react-best-gradient-color-picker";
import useClickOutside from "@/hook/useClickOutside";
import TokenomicChart from "./TokenomicChart";

const defaultChartItem: ChartInterface = {
  title: "",
  dataSource: "",
  color: "#1708FF",
};

const TokenomicItem = ({
  item,
  handleChange,
}: {
  item: ChartInterface;
  handleChange: (chartData: ChartInterface) => void;
}) => {
  const { isOpen, setIsOpen, containerRef } = useClickOutside(false);

  return (
    <div className="flex items-center gap-x-4 relative">
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
        type="number"
        value={item.dataSource}
        onChange={(e) => {
          const newData = { ...item };
          newData.dataSource = e.target.value;
          handleChange(newData);
        }}
      />
      <div
        className="flex items-center gap-x-2 border-[2px] border-default-200 p-3 rounded-xl cursor-pointer hover:opacity-80"
        onClick={() => setIsOpen(true)}
      >
        <div
          className="border border-[2px] border-[rgba(51,51,51,0.3)] w-8 h-8 rounded-full flex-shrink-0"
          style={{ backgroundColor: item.color }}
        />
        <ArrowDownIcon
          size="24"
          color="#292D32"
        />
      </div>
      {isOpen && (
        <div
          className="absolute rounded-2xl p-4 bg-white left-full z-50"
          ref={containerRef}
        >
          <ColorPicker
            hideAdvancedSliders
            hideGradientControls
            hideColorTypeBtns
            hideControls
            hidePresets
            value={item.color}
            onChange={(cl: string) => {
              const newData = { ...item };
              newData.color = cl;
              handleChange(newData);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default function ConfigTokenomic() {
  const [form, setForm] = useState({
    type: "percent",
    isShowTokenomic: false,
    chart: [{ ...defaultChartItem }],
  });
  const [isShowChart, setIsShowChart] = useState(false);
  const [chartData, setChartData] = useState(form.chart);

  const handleCheckShowChart = () => {
    const isValid = form.chart.every((item) => item.title && item.dataSource);
    if (isValid) {
      setIsShowChart(true);
      setChartData(form.chart)
    } else {
      // Handle error or show a message indicating missing values
      alert(
        "Some chart items have missing values for title or dataSource."
      );
    }
  };
  return (
    <div>
      <CustomDivider />
      <p className="text-base leading-[26px] font-medium text-[#1C1C1E]">
        Config Token Metrics
      </p>
      <Checkbox
        className="mt-4"
        checked={form.isShowTokenomic}
        onChange={(e) => {
          setForm((prev) => ({ ...prev, isShowTokenomic: e.target.checked }));
        }}
      >
        Show the tokenomics
      </Checkbox>
      {form.isShowTokenomic && (
        <>
          <RadioGroup
            className="my-4"
            value={form.type}
          >
            <div className="flex gap-x-4 items-center">
              <Radio
                value="percent"
                size="sm"
                onClick={() => {
                  setForm((prev: any) => ({
                    ...prev,
                    type: "percent",
                  }));
                }}
              >
                <p className={"text-sm leading-5"}>Using Percent</p>
              </Radio>
              <Radio
                value="number"
                size="sm"
                onClick={() => {
                  setForm((prev: any) => ({
                    ...prev,
                    type: "number",
                  }));
                }}
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
                  <MinusIcon
                    color={form.chart.length === 1 ? "#ccc" : "#F31260"}
                  />
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
            <div>
              <Button
                color="primary"
                onClick={handleCheckShowChart}
              >
                Preview
              </Button>
              {isShowChart && (
                <div className="flex items-center justify-center">
                  <div className="w-1/2">
                    <TokenomicChart chartData={chartData}/>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
