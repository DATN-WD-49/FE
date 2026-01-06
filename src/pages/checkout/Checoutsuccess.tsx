import React from "react";

const PaymentSuccess: React.FC = () => {
  // 👉 Sau này bạn có thể lấy từ API / query param
  const orderCode = "CSI6E6MY330";
  const amount = 100000;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-xl max-w-2xl w-full p-12 text-center">
        {/* Icon success */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-600 mb-3">
          Thanh toán thành công
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Cảm ơn bạn đã sử dụng dịch vụ của <b>Go Ticket</b>
        </p>

        {/* Order info */}
        <div className="bg-gray-50 rounded-2xl p-6 text-left space-y-4 mb-8 text-lg">
          <InfoRow label="Mã đơn hàng" value={orderCode} />
          <InfoRow
            label="Số tiền"
            value={`${amount.toLocaleString()} VNĐ`}
            highlight
          />
          <InfoRow label="Phương thức" value="PayOS / Chuyển khoản" />
          <InfoRow label="Trạng thái" value="Đã thanh toán" success />
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <button
            onClick={() => (window.location.href = "/profile/my-ticket")}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl text-lg transition"
          >
            🎫 Xem vé của tôi
          </button>

          <button
            onClick={() => (window.location.href = "/HomePage")}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-4 rounded-2xl text-lg transition"
          >
            ⬅️ Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

/* Component phụ cho từng dòng */
const InfoRow = ({
  label,
  value,
  highlight,
  success,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  success?: boolean;
}) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span
        className={`font-semibold ${
          highlight ? "text-green-600 text-xl" : success ? "text-green-600" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
};
