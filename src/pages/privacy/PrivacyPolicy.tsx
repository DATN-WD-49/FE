const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-green-700">
        Chính sách bảo mật
      </h1>

      {/* Intro */}
      <p className="mb-6 text-sm sm:text-base leading-relaxed">
        GoTicket Poly cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng
        khi sử dụng dịch vụ trên website. Chính sách này mô tả cách chúng tôi
        thu thập, sử dụng và bảo vệ thông tin của bạn.
      </p>

      {/* 1 */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          1. Thông tin chúng tôi thu thập
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
          <li>Họ và tên</li>
          <li>Số điện thoại</li>
          <li>Địa chỉ email</li>
          <li>Thông tin giao dịch và đặt vé</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          2. Mục đích sử dụng thông tin
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
          <li>Xử lý đơn hàng và cung cấp dịch vụ</li>
          <li>Liên hệ hỗ trợ khách hàng</li>
          <li>Cải thiện chất lượng dịch vụ</li>
          <li>Gửi thông báo khi có thay đổi liên quan</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          3. Bảo mật thông tin
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý phù hợp để bảo vệ
          thông tin cá nhân của khách hàng khỏi truy cập trái phép, mất mát hoặc
          tiết lộ.
        </p>
      </section>

      {/* 4 */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          4. Chia sẻ thông tin
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          GoTicket Poly không chia sẻ thông tin cá nhân của khách hàng cho bên
          thứ ba, trừ trường hợp có yêu cầu từ cơ quan pháp luật hoặc được sự
          đồng ý của khách hàng.
        </p>
      </section>

      {/* 5 */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          5. Quyền của khách hàng
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
          <li>Yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân</li>
          <li>Yêu cầu ngừng sử dụng thông tin cho mục đích tiếp thị</li>
        </ul>
      </section>

      {/* 6 */}
      <section className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          6. Thay đổi chính sách
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Chính sách bảo mật có thể được cập nhật theo thời gian. Mọi thay đổi
          sẽ được thông báo trên website.
        </p>
      </section>

      {/* 7 */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          7. Thông tin liên hệ
        </h2>
        <p className="text-sm sm:text-base">
          Nếu bạn có bất kỳ câu hỏi nào liên quan đến chính sách bảo mật, vui
          lòng liên hệ:
        </p>
        <p className="mt-2 text-sm sm:text-base font-medium">
          📧 Email: support@goticket.vn <br />
          📞 Hotline: 1900 6467
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
