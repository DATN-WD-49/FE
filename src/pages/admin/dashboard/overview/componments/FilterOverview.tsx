import { useEffect, useState } from "react";
import { DatePicker, Select } from "antd";
import type { IOverviewStats } from "../../../../../common/types/stats";
import { useTable } from "../../../../../common/hooks/useTable";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const FilterOverview = () => {
  const { query, onFilter } = useTable<IOverviewStats>();
  const [selectQuickFilter, setSelectQuickFilter] = useState("");
  const handleChangeRangePicker: RangePickerProps["onChange"] = (
    _,
    dateStrings,
  ) => {
    onFilter({
      createdAtFrom: [dateStrings[0]],
      createdAtTo: [dateStrings[1]],
      quickFilter: null,
    });
  };
  useEffect(() => {
    if (query.quickFilter)
      onFilter({
        createdAtFrom: null,
        createdAtTo: null,
      });
    setSelectQuickFilter(query.quickFilter ?? "thisMonth");
  }, [query.quickFilter]);
  return (
    <div className="flex flex-1 items-center gap-6">
      <div>
        <p className="mb-1">Khoảng thời gian</p>
        <RangePicker
          value={[
            query.startTimeFrom ? dayjs(query.startTimeFrom) : null,
            query.startTimeTo ? dayjs(query.startTimeTo) : null,
          ]}
          onChange={handleChangeRangePicker}
          placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
        />
      </div>
      <div>
        <p className="mb-1">Hoạt động</p>
        <Select
          style={{
            width: 150,
          }}
          allowClear
          value={selectQuickFilter}
          onChange={(e) => {
            onFilter({ quickFilter: e === "thisMonth" ? null : [e] });
            setSelectQuickFilter(e);
          }}
          placeholder="Chọn nhanh"
          options={[
            {
              value: "",
              label: "Tất cả",
            },
            {
              value: "monthAgo",
              label: "Một tháng trước",
            },
            {
              value: "today",
              label: "Hôm nay",
            },
            {
              value: "yesterday",
              label: "Ngày hôm qua",
            },
            {
              value: "weekAgo",
              label: "Một tuần trước",
            },
            {
              value: "yearAgo",
              label: "Một năm trước",
            },
            {
              value: "thisYear",
              label: "Trong năm",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FilterOverview;
