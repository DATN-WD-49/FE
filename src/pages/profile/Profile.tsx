const Profile = () => {
  return (
    <div className="bg-white">
      {/* Tiêu đề */}
      <h2 className="text-6xl font-bold text-center text-green-700 bg-[#F3F4F6] py-4 rounded-xl">
        Thông tin cá nhân
      </h2>

      {/* Nội dung chính */}
      <main className="flex items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
        <div className="flex w-full max-w-[1280px] bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Trái: Avatar */}
          <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-white p-10">
            <img
              src="https://res.cloudinary.com/dznlvsapr/image/upload/v1759920475/2_irvkl6.jpg"
              alt="Avatar"
              className="w-80 h-80 rounded-full object-cover shadow-md"
            />
            <h1 className="mt-8 text-5xl font-bold text-green-800">
              Lê Phục Hưng
            </h1>
          </div>

          {/* Phải: Thông tin */}
          <div className="w-1/2 flex flex-col justify-center p-16 space-y-6 text-gray-800 bg-[#FFFCD1]">
            <h2 className="text-4xl font-bold mb-6">
              Xin Chào: <span className="text-green-700">Lê Phục Hưng</span>
            </h2>

            <div className="space-y-4 text-xl leading-relaxed">
              <p>
                <strong>Họ và tên:</strong> Lê Phục Hưng
              </p>
              <p>
                <strong>Số điện thoại:</strong> 0365 252 737
              </p>
              <p>
                <strong>Email:</strong> hunglpph48998@gmail.com
              </p>
              <p>
                <strong>Địa chỉ:</strong> Phúc Thành, Yên Thành, Nghệ An.
              </p>
            </div>

            {/* Nút điều hướng */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <a
                href="lich-su-dat-ve.html"
                className="text-center bg-green-700 text-white px-6 py-4 rounded-2xl shadow-md hover:bg-green-800 transition font-semibold text-lg"
              >
                Lịch sử đặt vé
              </a>

              <a
                href="index.html"
                className="text-center bg-green-700 text-white px-6 py-4 rounded-2xl shadow-md hover:bg-green-800 transition font-semibold text-lg"
              >
                Đăng Xuất
              </a>

              <a
                href="dat-ve.html"
                className="text-center bg-green-700 text-white px-6 py-4 rounded-2xl shadow-md hover:bg-green-800 transition font-semibold text-lg"
              >
                Đặt vé
              </a>

              <a
                href="tin-tuc.html"
                className="text-center bg-green-700 text-white px-6 py-4 rounded-2xl shadow-md hover:bg-green-800 transition font-semibold text-lg"
              >
                Xem tin tức
              </a>

              <a
                href="chuyen-di.html"
                className="col-span-2 text-center bg-green-700 text-white px-6 py-4 rounded-2xl shadow-md hover:bg-green-800 transition font-semibold text-lg"
              >
                Chỉnh sửa thông tin cá nhân
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 py-10 text-lg">
          {/* Cột 1 */}
          <div className="col-span-2 flex flex-col items-center space-y-6">
            <img
              src="https://gotickets.events/wp-content/uploads/2022/12/logo-gotickets.png"
              alt="Logo"
              className="w-62 invert"
            />
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-blue-500 text-3xl">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-pink-500 text-3xl">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Cột 2 */}
          <div className="col-span-3 space-y-4">
            <h2 className="font-bold text-2xl text-yellow-400">
              CÔNG TY TNHH GOTICKET
            </h2>
            <p>
              <span className="text-yellow-400 mr-2">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              Khách sạn Thân Hoa, đường Mai Thúc Loan, Nghi Hương, TP Vinh, Nghệ
              An.
            </p>
            <p>
              <span className="text-yellow-400 mr-2">
                <i className="fa-solid fa-phone"></i>
              </span>
              0365 252 737
            </p>
            <p>
              <span className="text-yellow-400 mr-2">
                <i className="fa-solid fa-phone"></i>
              </span>
              1900 6467 - 1900 6762
            </p>
          </div>

          {/* Cột 3 */}
          <div className="col-span-3 space-y-4">
            <h2 className="font-bold text-2xl">Liên hệ với chúng tôi</h2>
            <form className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Họ và tên"
                className="px-4 py-2 rounded-md text-black bg-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-md text-black bg-white"
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="px-4 py-2 rounded-md text-black bg-white"
              />
              <textarea
                placeholder="Lời nhắn đến Văn Minh"
                className="px-4 py-2 rounded-md text-black bg-white"
              ></textarea>
              <button
                type="submit"
                className="bg-green-900 px-6 py-2 rounded-md hover:bg-green-600 transition"
              >
                Gửi
              </button>
            </form>
          </div>

          {/* Cột 4 */}
          <div className="col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md hover:scale-105 transition-transform"
              title="Bản đồ"
            ></iframe>
          </div>

          {/* Cột 5 */}
          <div className="col-span-2 space-y-4">
            <h2 className="font-bold text-2xl">Liên kết nhanh</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Hệ thống văn phòng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Điều khoản Văn Minh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
