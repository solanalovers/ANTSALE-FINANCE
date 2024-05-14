import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { ChartInterface } from "@/interface/chart.interface";

export default function TokenomicChart({chartData}: {chartData: Array<ChartInterface>}) {
  const chartRef = useRef<any>(null);
  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      const labels = chartData.map((item)=>item.title);
      const data = chartData.map((item)=>item.dataSource);
      const backgroundColor = chartData.map((item)=>item.color);
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels,
            datasets: [{
              data,
              backgroundColor,
              hoverOffset: 4
            }
        ]
          }
      });
      chartRef.current.chart = myChart
    }
  }, []);
  return <canvas ref={chartRef} className="w-full"></canvas>;
}
