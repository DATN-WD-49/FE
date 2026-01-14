import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
            alt="Terms and Conditions"
            className="w-full max-h-64 object-cover rounded-xl mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-800">
            Điều khoản & Điều kiện
          </h1>
        </div>

        <p className="text-gray-600 mb-6">
          Khi sử dụng website và dịch vụ của chúng tôi, bạn đồng ý tuân thủ các
          điều khoản và điều kiện dưới đây. Vui lòng đọc kỹ trước khi sử dụng.
        </p>

        {/* 1 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Chấp nhận điều khoản
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Việc bạn truy cập và sử dụng website đồng nghĩa với việc bạn chấp
            nhận toàn bộ các điều khoản được nêu trong văn bản này. Nếu bạn
            không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng dịch
            vụ.
          </p>
        </section>

        {/* 2 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Phạm vi dịch vụ
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Chúng tôi cung cấp các dịch vụ liên quan đến đặt vé, thông tin tuyến
            đường và hỗ trợ khách hàng. Nội dung dịch vụ có thể được thay đổi,
            cập nhật hoặc ngừng cung cấp mà không cần thông báo trước.
          </p>
        </section>

        {/* 3 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Quyền và trách nhiệm của người dùng
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Cung cấp thông tin chính xác khi sử dụng dịch vụ.</li>
            <li>Không sử dụng website cho các mục đích trái pháp luật.</li>
            <li>
              Không can thiệp hoặc gây ảnh hưởng đến hoạt động của hệ thống.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Quyền và trách nhiệm của chúng tôi
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Chúng tôi cam kết cung cấp dịch vụ ổn định và bảo mật thông tin
            người dùng. Tuy nhiên, chúng tôi không chịu trách nhiệm đối với các
            sự cố phát sinh ngoài tầm kiểm soát hợp lý.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Bảo mật thông tin
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Việc thu thập và sử dụng thông tin cá nhân được thực hiện theo
            <span className="font-medium"> Chính sách bảo mật </span>
            của chúng tôi. Chúng tôi cam kết không chia sẻ thông tin cho bên thứ
            ba khi chưa có sự đồng ý của bạn.
          </p>
        </section>

        {/* 6 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Thay đổi điều khoản
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Chúng tôi có quyền thay đổi, chỉnh sửa nội dung điều khoản này vào
            bất kỳ thời điểm nào. Các thay đổi sẽ có hiệu lực ngay khi được cập
            nhật trên website.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Thông tin liên hệ
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nếu bạn có bất kỳ câu hỏi nào liên quan đến điều khoản sử dụng, vui
            lòng liên hệ với chúng tôi qua email:
            <span className="font-medium"> goticketpoly@gmail.com</span>
          </p>
        </section>
      </div>
    </div>
  );
}
