import { useQuery } from "@tanstack/react-query";
import { useTable } from "../../../../../common/hooks/useTable";
import { QUERY_KEY } from "../../../../../common/contants/queryKey";
import dayjs from "dayjs";
import Chart from "react-apexcharts";
import { getOverviewYearStats } from "../../../../../common/services/stats.service";
import type { IOverviewYearStats } from "../../../../../common/types/stats";
import { useState } from "react";
import { Select } from "antd";

const RevenueOverviewMonth = () => {
  const { query, onFilter } = useTable<IOverviewYearStats>();
  const currentYear = dayjs().year();
  const [year, setYear] = useState<number>(currentYear);
  const handleChangeYear = (value: number) => {
    setYear(value);

    onFilter({
      year: value,
    });
  };
  const { data } = useQuery({
    queryKey: [QUERY_KEY.STATS.OVERVIEW, "MONTH", query],
    queryFn: () => getOverviewYearStats(query),
  });

  const yearData = data?.data?.result ?? [];

  const yearOptions = Array.from({ length: 5 }, (_, i) => {
    const y = currentYear - i;
    return { label: `Năm ${y}`, value: y };
  });

  const series = [
    {
      name: "Doanh thu",
      type: "line",
      data: yearData.map((data) => ({
        x: dayjs(data.month).format("[Tháng] MM - YYYY"),
        y: data.revenue,
      })),
    },
    {
      name: "Số đơn vé",
      type: "line",
      data: yearData.map((data) => ({
        x: dayjs(data.month).format("[Tháng] MM - YYYY"),
        y: data.tickets,
      })),
    },
  ];
  const options: ApexCharts.ApexOptions = {
    theme: { mode: "dark" },
    chart: {
      type: "line",
      stacked: false,
      background: "transparent",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#065945", "#ffd046"],
    stroke: {
      width: [1, 1],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 4,
      },
    },
    markers: {
      size: 5,
      strokeWidth: 2,
      strokeColors: "#0b0f14",
    },
    yaxis: [
      {
        title: { text: "Doanh thu" },
        labels: {
          style: { colors: "#9ca3af" },
          formatter: (v: number) => {
            if (v >= 1_000_000_000) {
              return `${(v / 1_000_000_000).toFixed(1)}B ₫`;
            }
            if (v >= 1_000_000) {
              return `${(v / 1_000_000).toFixed(0)}M ₫`;
            }
            if (v >= 1_000) {
              return `${(v / 1_000).toFixed(0)}K ₫`;
            }
            return `${v.toLocaleString("vi-VN")} ₫`;
          },
        },
      },
      {
        opposite: true,
        title: { text: "Đơn vé" },
        labels: {
          style: { colors: "#9ca3af" },
          formatter: (v) => `${v}`,
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: "dark",
      y: [
        {
          formatter: (v) => v.toLocaleString("vi-VN") + " ₫",
        },
        {
          formatter: (v) => `${v} vé`,
        },
      ],
    },
    xaxis: {
      labels: { style: { colors: "#9ca3af" } },
      axisBorder: { color: "#374151" },
      axisTicks: { color: "#374151" },
    },
    grid: {
      borderColor: "#1f2937",
      strokeDashArray: 3,
    },
    dataLabels: { enabled: false },
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 12,
        }}
      >
        <Select
          value={year}
          options={yearOptions}
          onChange={handleChangeYear}
          style={{ width: 120 }}
        />
      </div>
      <Chart options={options} series={series} height={350} />
    </div>
  );
};

export default RevenueOverviewMonth;
