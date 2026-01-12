const HistoryPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-green-700">
        Lịch sử hình thành GoTicket Poly
      </h1>

      {/* Intro */}
      <p className="mb-8 text-sm sm:text-base leading-relaxed">
        GoTicket Poly được xây dựng với mong muốn mang đến một nền tảng đặt vé
        xe trực tuyến hiện đại, tiện lợi và an toàn. Chúng tôi kết nối hành
        khách với các nhà xe uy tín, giúp việc di chuyển trở nên dễ dàng và minh
        bạch hơn.
      </p>

      <div className="space-y-12">
        {/* Giai đoạn 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Giai đoạn khởi đầu
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              GoTicket Poly ra đời từ thực tế nhu cầu đặt vé xe khách ngày càng
              tăng. Hành khách cần một giải pháp nhanh chóng để tra cứu tuyến
              đường, lựa chọn nhà xe và đặt vé mà không cần xếp hàng tại bến xe.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
            alt="Xe khách đường dài"
            className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow"
          />
        </section>

        {/* Giai đoạn 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Bến xe và nhà xe"
            className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow order-1 md:order-none"
          />

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Giai đoạn phát triển
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Nền tảng dần mở rộng hợp tác với nhiều nhà xe, hỗ trợ thanh toán
              trực tuyến, quản lý vé điện tử và gửi thông báo lịch trình. Điều
              này giúp cả hành khách và nhà xe tiết kiệm thời gian, nâng cao
              hiệu quả vận hành.
            </p>
          </div>
        </section>

        {/* Giai đoạn 3 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Định hướng tương lai
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              GoTicket Poly hướng đến việc xây dựng hệ sinh thái kết nối nhà xe
              – hành khách – bến xe trên cùng một nền tảng, đảm bảo trải nghiệm
              đặt vé nhanh chóng, an toàn và đáng tin cậy trên mọi hành trình.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e"
            alt="Hành khách đi xe khách"
            className="w-full h-56 sm:h-64 object-cover rounded-2xl shadow"
          />
        </section>
      </div>
    </div>
  );
};

export default HistoryPage;
