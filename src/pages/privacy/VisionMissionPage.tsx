const VisionMissionPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-green-700">
        Tầm nhìn & Sứ mệnh
      </h1>

      {/* Intro */}
      <p className="mb-10 text-sm sm:text-base leading-relaxed">
        GoTicket Poly được xây dựng với định hướng trở thành nền tảng đặt vé xe
        trực tuyến uy tín, kết nối hiệu quả giữa hành khách và các nhà xe trên
        toàn quốc. Chúng tôi luôn đặt trải nghiệm người dùng và chất lượng dịch
        vụ làm trọng tâm trong mọi hoạt động.
      </p>

      <div className="space-y-14">
        {/* TẦM NHÌN */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-green-600">
              Tầm nhìn
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-3">
              GoTicket Poly hướng đến việc trở thành nền tảng đặt vé xe khách
              hàng đầu, nơi mọi hành trình của khách hàng đều được bắt đầu một
              cách dễ dàng, minh bạch và an toàn.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Chúng tôi mong muốn góp phần thúc đẩy quá trình chuyển đổi số
              trong lĩnh vực vận tải hành khách, giúp các nhà xe tối ưu vận hành
              và nâng cao chất lượng phục vụ.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
            alt="Tầm nhìn phát triển hệ thống xe khách"
            className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow"
          />
        </section>

        {/* SỨ MỆNH */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Sứ mệnh kết nối nhà xe và hành khách"
            className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow order-1 md:order-none"
          />

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-green-600">
              Sứ mệnh
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>
                Cung cấp nền tảng đặt vé xe nhanh chóng, tiện lợi và dễ sử dụng
                cho mọi đối tượng khách hàng.
              </li>
              <li>
                Kết nối và hỗ trợ các nhà xe trong việc quản lý vé, lịch trình
                và vận hành hiệu quả.
              </li>
              <li>
                Đảm bảo tính minh bạch, an toàn trong thanh toán và bảo mật
                thông tin người dùng.
              </li>
              <li>
                Không ngừng cải tiến công nghệ để nâng cao trải nghiệm di chuyển
                cho hành khách.
              </li>
            </ul>
          </div>
        </section>

        {/* GIÁ TRỊ CỐT LÕI */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-green-600">
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <div className="p-4 rounded-xl border shadow-sm">
              <strong>Khách hàng là trung tâm</strong>
              <p className="mt-1">
                Mọi quyết định đều hướng đến việc mang lại trải nghiệm tốt nhất
                cho hành khách.
              </p>
            </div>
            <div className="p-4 rounded-xl border shadow-sm">
              <strong>Uy tín & minh bạch</strong>
              <p className="mt-1">
                Cam kết rõ ràng trong thông tin tuyến xe, giá vé và chính sách.
              </p>
            </div>
            <div className="p-4 rounded-xl border shadow-sm">
              <strong>Đổi mới công nghệ</strong>
              <p className="mt-1">
                Liên tục cập nhật và ứng dụng công nghệ mới vào sản phẩm.
              </p>
            </div>
            <div className="p-4 rounded-xl border shadow-sm">
              <strong>Hợp tác bền vững</strong>
              <p className="mt-1">
                Đồng hành lâu dài cùng các nhà xe và đối tác.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionMissionPage;
