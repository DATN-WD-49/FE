import { useAuthStore, useAuthSelector } from "../../common/store";
import { Link, useNavigate } from "react-router";
import {
  HistoryOutlined,
  LogoutOutlined,
  CarOutlined,
  ReadOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { message } from "antd";

const Profile = () => {
  // 1. Lấy thông tin user từ Redux Store
  const user = useAuthSelector((state) => state.user);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  // 2. Xử lý Đăng xuất
  const handleLogout = () => {
    logout(); // Xóa token & user info trong store
    message.success("Đăng xuất thành công!");
    navigate("/auth/login"); // Chuyển về trang đăng nhập
  };

  // Ảnh mặc định nếu user chưa có avatar
  const defaultAvatar =
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg";

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Tiêu đề */}
      <div className="bg-[#F3F4F6] py-6 mb-8 shadow-sm">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800">
          Thông tin cá nhân
        </h2>
      </div>

      {/* Nội dung chính */}
      <main className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row w-full bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px]">
          {/* CỘT TRÁI: Avatar & Tên */}
          <div className="md:w-5/12 flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white p-10 border-r border-gray-100">
            <div className="relative group">
              <img
                src={user?.avatar || defaultAvatar}
                alt="Avatar"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h1 className="mt-8 text-3xl md:text-4xl font-bold text-green-800 text-center">
              {user?.userName || "Khách hàng"}
            </h1>
            <p className="text-gray-500 mt-2">{user?.email}</p>
            {user?.role === "admin" && (
              <span className="mt-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                Administrator
              </span>
            )}
          </div>

          {/* CỘT PHẢI: Thông tin chi tiết & Menu */}
          <div className="md:w-7/12 flex flex-col justify-center p-8 md:p-16 space-y-8 bg-[#FFFCD1]/30">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">
                Xin Chào,{" "}
                <span className="text-green-700">{user?.userName}</span> !
              </h2>

              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start">
                  <strong className="w-32 text-gray-900">Họ và tên:</strong>
                  <span>{user?.userName || "Chưa cập nhật"}</span>
                </div>
                <div className="flex items-start">
                  <strong className="w-32 text-gray-900">Số điện thoại:</strong>
                  <span>{user?.phone || "Chưa cập nhật"}</span>
                </div>
                <div className="flex items-start">
                  <strong className="w-32 text-gray-900">Email:</strong>
                  <span>{user?.email}</span>
                </div>
                {/* Bạn có thể thêm trường Địa chỉ vào DB sau này */}
                <div className="flex items-start">
                  <strong className="w-32 text-gray-900">Vai trò:</strong>
                  <span className="capitalize">{user?.role}</span>
                </div>
              </div>
            </div>

            {/* Nút điều hướng (Menu chức năng) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <Link
                to="/account/history" // Đường dẫn tới trang lịch sử (cần tạo route này)
                className="flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-4 rounded-xl shadow hover:bg-green-800 transition font-medium hover:-translate-y-1"
              >
                <HistoryOutlined /> Lịch sử đặt vé
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-4 rounded-xl shadow hover:bg-red-700 transition font-medium hover:-translate-y-1 cursor-pointer"
              >
                <LogoutOutlined /> Đăng Xuất
              </button>

              <Link
                to="/"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl shadow hover:bg-blue-700 transition font-medium hover:-translate-y-1"
              >
                <CarOutlined /> Đặt vé ngay
              </Link>

              <Link
                to="/news"
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-4 rounded-xl shadow hover:bg-teal-700 transition font-medium hover:-translate-y-1"
              >
                <ReadOutlined /> Xem tin tức
              </Link>

              <Link
                to="/account/edit" // Đường dẫn tới trang sửa profile (cần tạo route này)
                className="col-span-1 sm:col-span-2 flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-4 rounded-xl shadow hover:bg-gray-800 transition font-medium hover:-translate-y-1"
              >
                <EditOutlined /> Chỉnh sửa thông tin cá nhân
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
