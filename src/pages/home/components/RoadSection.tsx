import { useQuery } from "@tanstack/react-query";
import { Spin, Tag, Empty } from "antd";
import { useNavigate, createSearchParams } from "react-router";
import { getAllSchedules } from "../../../common/services/schedule.service";
import { formatCurrency } from "../../../common/utils";
import dayjs from "dayjs";
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useMemo } from "react";

const DEFAULT_BUS_IMAGE =
  "/z7289849341293_3cd0616344ef25f715b6ce9a0a694bcb.jpg";

const RoadSection = () => {
  const navigate = useNavigate();

  // 1. Lấy dữ liệu
  const { data, isLoading } = useQuery({
    queryKey: ["SCHEDULE_HOME_ROAD"],
    queryFn: () => getAllSchedules(),
  });

  // 2. LOGIC LỌC TUYẾN TRÙNG (QUAN TRỌNG)
  // Chỉ lấy 1 chuyến đại diện cho mỗi cặp Điểm đi - Điểm đến
  const uniqueRoutes = useMemo(() => {
    if (!data?.data) return [];

    const seenRoutes = new Set();
    const result = [];

    for (const item of data.data) {
      // Tạo một key duy nhất dựa trên ID điểm đi và điểm đến
      const pickupId = item.routeId?.pickupPoint?._id;
      const dropId = item.routeId?.dropPoint?._id;

      // Nếu dữ liệu bị lỗi thiếu ID thì bỏ qua
      if (!pickupId || !dropId) continue;

      const key = `${pickupId}-${dropId}`;

      // Nếu chưa gặp tuyến này bao giờ thì thêm vào danh sách hiển thị
      if (!seenRoutes.has(key)) {
        seenRoutes.add(key);
        result.push(item);
      }
      // Nếu đã gặp rồi (seenRoutes.has(key) === true) thì bỏ qua, không thêm nữa
    }

    return result;
  }, [data]);

  // 3. Hàm chuyển trang
  const handleBookNow = (schedule: any) => {
    const params = {
      pickPointId: schedule.routeId?.pickupPoint?._id,
      dropPointId: schedule.routeId?.dropPoint?._id,
      startTimeFrom: dayjs().toISOString(),
    };
    window.scrollTo(0, 0);
    navigate({
      pathname: "/bookings",
      search: `?${createSearchParams(params as any)}`,
    });
  };

  return (
    <div className="antialiased">
      <section className="bg-white py-16 bg-trong-dong">
        <div className="container mx-6 xl:mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-green-800 text-4xl md:text-5xl font-extrabold mb-4 uppercase">
              Những cung đường phổ biến
            </h2>
            <p className="text-black text-lg leading-relaxed max-w-4xl mx-auto">
              Đa dạng các dòng xe giường nằm cao cấp. Hoạt động liên tục các
              tuyến Bắc - Trung.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center h-40 items-center">
              <Spin size="large" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {uniqueRoutes.length === 0 && (
                <div className="col-span-full flex justify-center">
                  <Empty description="Hiện chưa có tuyến đường nào" />
                </div>
              )}

              {/* Thay vì map data.data, giờ ta map uniqueRoutes */}
              {uniqueRoutes.slice(0, 8).map((item: any, index: number) => {
                const pickup =
                  item.routeId?.pickupPoint?.label ||
                  item.routeId?.pickupPoint?.name ||
                  "Điểm đi";
                const dropoff =
                  item.routeId?.dropPoint?.label ||
                  item.routeId?.dropPoint?.name ||
                  "Điểm đến";
                const carType = item.carId?.type || "Giường nằm";
                const seatCount = item.carId?.seatCount || 34;

                return (
                  <div
                    key={item._id}
                    onClick={() => handleBookNow(item)}
                    className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 fade-in delay-${(index % 4) + 1}`}
                  >
                    <div className="h-56 relative overflow-hidden group">
                      <img
                        src={item.carId?.images?.[0] || DEFAULT_BUS_IMAGE}
                        alt="Bus"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069";
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <Tag
                          color="#0C7D41"
                          className="font-bold border-none text-white px-3 py-1"
                        >
                          {carType}
                        </Tag>
                      </div>

                      <div className="absolute bottom-0 left-0 bg-black/60 text-white w-full py-1 px-3 text-sm flex items-center">
                        <ClockCircleOutlined className="mr-2" />
                        <span>Tần suất: Hàng ngày</span>
                      </div>
                    </div>

                    <div className="p-4 text-center">
                      <ul className="text-gray-800 text-sm mb-4 space-y-2">
                        <li
                          className="font-bold text-xl text-green-800 truncate px-2"
                          title={pickup}
                        >
                          {pickup}
                        </li>

                        <li className="text-gray-400 flex items-center justify-center gap-2 text-xs">
                          <span className="h-[1px] w-10 bg-gray-300"></span>
                          <EnvironmentOutlined /> ĐẾN
                          <span className="h-[1px] w-10 bg-gray-300"></span>
                        </li>

                        <li
                          className="font-bold text-xl text-green-800 truncate px-2"
                          title={dropoff}
                        >
                          {dropoff}
                        </li>

                        <li className="text-gray-500 text-xs italic mt-1">
                          (Xe {seatCount} chỗ chất lượng cao)
                        </li>
                      </ul>

                      <div className="border-t border-dashed border-gray-300 my-3"></div>

                      <div className="flex justify-between items-center px-2">
                        <div className="text-left">
                          <span className="block text-xs text-gray-400">
                            Giá vé từ
                          </span>
                          <span className="text-[#0C7D41] font-bold text-lg">
                            {formatCurrency(item.price)}
                          </span>
                        </div>
                        <button className="py-2 px-4 bg-green-50 text-green-700 font-semibold rounded hover:bg-[#0C7D41] hover:text-white transition-colors text-sm">
                          Đặt ngay
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RoadSection;
