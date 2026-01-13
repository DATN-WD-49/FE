import {
  CarOutlined,
  ClockCircleFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Button, message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import SeatPickSection from "./SeatPickSection";
import type { ISchedule } from "../../common/types/Schedule";
import { getSocket } from "../../socket/socket-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../../common/constans/queryKey";
import { unHoldSeat } from "../../common/services/seat.schedule.service";
import dayjs from "dayjs";
import { formatCurrency } from "../../common/utils";
import DetailPointModal from "../../pages/booking/components/DetailPointModal";
import { useCheckoutSelector } from "../../common/store/useCheckoutStore";

const ScheduleCard = ({
  schedule,
  openScheduleId,
  setOpenScheduleId,
}: {
  schedule: ISchedule;
  openScheduleId: string | null;
  setOpenScheduleId: (id: string | null) => void;
}) => {
  const navigate = useNavigate(); // 3. Khởi tạo navigate
  const resetInfomationCheckout = useCheckoutSelector(
    (state) => state.resetInformation,
  );
  const isOpenSeatMap = openScheduleId === schedule._id;
  const socket = getSocket();
  const queryClient = useQueryClient();

  const handleSeatUpdate = () => {
    queryClient.invalidateQueries({
      predicate: ({ queryKey }) => queryKey.includes(QUERY_KEY.SEAT.ROOT),
    });
  };

  const { mutate } = useMutation({
    mutationFn: async () => {
      return await unHoldSeat();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes(QUERY_KEY.SEAT),
      });
    },
  });

  const handleOpenSchedule = (scheduleId: string) => {
    // --- 4. LOGIC MỚI: KIỂM TRA ĐĂNG NHẬP ---
    // Nếu không có socket (tức là chưa đăng nhập)
    if (!socket) {
      message.warning("Bạn cần đăng nhập để chọn chỗ!"); // Hiện thông báo
      navigate("/auth/login"); // Chuyển sang trang Login
      return; // Dừng lại không làm gì tiếp theo
    }

    if (isOpenSeatMap) {
      resetInfomationCheckout();
      mutate();
      socket?.emit("leaveSchedule", scheduleId);
      setOpenScheduleId(null);
      return;
    }
    resetInfomationCheckout();
    mutate();
    socket?.emit("joinSchedule", scheduleId);
    setOpenScheduleId(scheduleId);
  };

  useEffect(() => {
    if (!socket || typeof socket.on !== "function") return;

    socket.on("seatUpdated", handleSeatUpdate);

    return () => {
      if (socket) {
        socket.emit("leaveSchedule", schedule._id);
        socket.off("seatUpdated", handleSeatUpdate);
      }
    };
  }, [queryClient, schedule._id, socket]);

  return (
    <div className="w-full">
      <div
        className={`${
          isOpenSeatMap
            ? "bg-blue-100 border-blue-300"
            : "bg-white border-gray-100"
        } w-full shadow-md rounded-md border 0 flex justify-around py-8 px-4`}
      >
        <div className="flex gap-2 flex-col items-start">
          <p className="flex items-center gap-3 ">
            <ClockCircleFilled />
            <span className="text-blue-400 font-medium">
              {dayjs(schedule?.startTime).format("HH:mm")} -{" "}
              {dayjs(schedule?.arrivalTime).format("HH:mm")}
            </span>
          </p>
          <p className="text-gray-400">
            Ngày xuất phát : {dayjs(schedule?.startTime).format("DD/MM/YYYY")}
          </p>
          <p className="text-gray-400">
            Thời gian dự kiến: {schedule?.routeId?.duration} giờ
          </p>
        </div>
        <div className="flex gap-2 flex-col items-start">
          <p className="font-semibold text-base">
            {schedule?.routeId?.pickupPoint?.label} -{" "}
            {schedule?.routeId?.dropPoint?.label}
          </p>
          <DetailPointModal
            dropPoint={schedule.routeId.dropPoint}
            pickupPoint={schedule.routeId.pickupPoint}
            name={`${schedule.routeId.pickupPoint.label} - ${schedule.routeId.dropPoint.label}`}
          >
            <button className="text-sm text-blue-400 cursor-pointer hover:bg-blue-100 px-2 rounded-md duration-300">
              <EnvironmentOutlined /> Các điểm đón trả khách
            </button>
          </DetailPointModal>
        </div>
        <div className="flex gap-2 flex-col items-start">
          <div className="flex items-center gap-2 text-xs">
            <CarOutlined />
            <span className="font-semibold text-orange-700 text-base">
              {schedule.bookedCount || 0}/{schedule.carId.maxSeatCapacity}
            </span>
            <p className="inline-block bg-white border border-black rounded px-2 py-[2px] text-xs font-bold tracking-wider shadow-[inset_0_0_3px_rgba(0,0,0,0.25)] uppercase font-mono ">
              {schedule.carId.licensePlate || " Chưa cập nhật"}
            </p>
          </div>
          <p className="text-gray-400">{schedule.carId.type}</p>
        </div>
        <div className="flex items-center">
          <p className="text-orange-700 text-lg font-semibold">
            {formatCurrency(schedule.price as number)}
          </p>
        </div>
        <div className="flex items-center">
          <Button
            onClick={() => handleOpenSchedule(schedule._id)}
            style={{
              height: 40,
              width: 130,
              background: "#0c7d41",
              color: "white",
              border: "none",
              transition: "all 300ms ease-in-out",
              borderRadius: 25,
            }}
            className="hover:opacity-80"
          >
            {isOpenSeatMap ? "Ẩn" : "Chọn chỗ"}
          </Button>
        </div>
      </div>
      {isOpenSeatMap && (
        <SeatPickSection carId={schedule.carId._id} schedule={schedule} />
      )}
    </div>
  );
};

export default ScheduleCard;
