// import { DatePicker } from "antd";
// import type { IOverviewStats } from "../../../../../common/types/stats";
// import { useTable } from "../../../../../common/hooks/useTable";
// import type { RangePickerProps } from "antd/es/date-picker";
// import dayjs from "dayjs";

// const { RangePicker } = DatePicker;

// const FilterStatsOverview = () => {
//     const { query, onFilter } = useTable<IOverviewStats>();
//     const handleChangeRangePicker: RangePickerProps["onChange"] = (
//         _,
//         dateStrings,
//     ) => {
//         onFilter({
//             createdAtFrom: [dateStrings[0]],
//             createdAtTo: [dateStrings[1]],
//             quickFilter: null,
//         });
//     };
//     return (
//         <div className="flex flex-1 items-center gap-6">
//             <div>
//                 <p className="mb-1">Khoảng thời gian</p>
//                 <RangePicker
//                     value={[
//                         query.startTimeFrom ? dayjs(query.startTimeFrom) : null,
//                         query.startTimeTo ? dayjs(query.startTimeTo) : null,
//                     ]}
//                     onChange={handleChangeRangePicker}
//                     placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
//                 />
//             </div>
//         </div>
//     );
// };

// export default FilterStatsOverview;
