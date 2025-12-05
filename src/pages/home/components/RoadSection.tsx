import { useQuery } from "@tanstack/react-query";
import { Spin, Tag, Empty } from "antd";
import { useNavigate, createSearchParams } from "react-router";
import { getAllSchedules } from "../../../common/services/schedule.service";
import { formatCurrency } from "../../../common/utils";
import dayjs from "dayjs";
import { EnvironmentOutlined } from "@ant-design/icons";

// --- BẠN THAY LINK ẢNH CỦA BẠN VÀO ĐÂY ---
// Lưu ý: Nếu ảnh để trong thư mục public, hãy bỏ chữ "public" ở đầu đi.
// Ví dụ: "public/anh-xe.jpg" -> "/anh-xe.jpg"
const DEFAULT_BUS_IMAGE =
  "/z7289849341293_3cd0616344ef25f715b6ce9a0a694bcb.jpg";
// Hoặc dùng link mạng nếu ảnh trên chưa hiện:
// const DEFAULT_BUS_IMAGE = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop";

const RoadSection = () => {
  const navigate = useNavigate();

  // 1. Lấy dữ liệu Lịch trình từ API
  const { data, isLoading } = useQuery({
    queryKey: ["SCHEDULE_HOME_ROAD"],
    queryFn: () => getAllSchedules(),
  });

  // 2. Hàm chuyển trang
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
              Những cung đường
            </h2>
            <p className="text-black text-lg leading-relaxed max-w-4xl mx-auto">
              Đa dạng các dòng xe giường nằm cao cấp: Vip 21 giường, 32 giường,
              34 giường và 38 giường.
              <br />
              Với gần 80 chuyến/1 ngày. Hoạt động liên tục các tuyến Bắc -
              Trung.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center h-40 items-center">
              <Spin size="large" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {data?.data?.length === 0 && (
                <div className="col-span-full flex justify-center">
                  <Empty description="Chưa có chuyến xe nào" />
                </div>
              )}

              {data?.data?.slice(0, 8).map((item: any, index: number) => (
                <div
                  key={item._id}
                  onClick={() => handleBookNow(item)}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 fade-in delay-${(index % 4) + 1}`}
                >
                  {/* --- PHẦN ẢNH XE ĐƯỢC FIX CỨNG --- */}
                  <div className="h-56 relative overflow-hidden group">
                    <img
                      src={DEFAULT_BUS_IMAGE} // Sử dụng biến ảnh fix cứng ở trên
                      alt="Bus Image"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Nếu ảnh local lỗi thì tự đổi sang ảnh mạng dự phòng
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute top-2 right-2">
                      <Tag
                        color="#0C7D41"
                        className="font-bold border-none text-white"
                      >
                        {item.carId?.type || "Giường nằm"}
                      </Tag>
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <ul className="text-gray-800 text-sm mb-2 space-y-1">
                      <li className="font-bold text-lg text-green-800 truncate px-2">
                        {item.routeId?.pickupPoint?.label}
                      </li>
                      <li className="text-gray-500">
                        <EnvironmentOutlined /> Đến
                      </li>
                      <li className="font-bold text-lg text-green-800 truncate px-2">
                        {item.routeId?.dropPoint?.label}
                      </li>
                      <li className="text-gray-500 text-xs mt-1">
                        (Xe {item.carId?.seatCount || "34"} chỗ)
                      </li>
                    </ul>

                    <div className="border-t border-dashed my-3"></div>

                    <p className="text-[#0C7D41] font-bold text-xl">
                      {formatCurrency(item.price)}
                      <span className="text-sm font-normal text-gray-500">
                        /vé
                      </span>
                    </p>

                    <button className="mt-3 w-full py-2 bg-green-50 text-green-700 font-semibold rounded hover:bg-[#0C7D41] hover:text-white transition-colors">
                      Đặt ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RoadSection;
