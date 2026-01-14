import React from "react";

const PaymentFailed: React.FC = () => {
  // 👉 Có thể lấy từ query param / API
  const orderCode = "CSI6E6MY330";
  const reason = "Thanh toán không thành công hoặc đã bị huỷ";

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-xl max-w-2xl w-full p-12 text-center">
        {/* Icon failed */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-red-600 mb-3">
          Thanh toán thất bại
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Rất tiếc, giao dịch của bạn chưa hoàn tất
        </p>

        {/* Order info */}
        <div className="bg-gray-50 rounded-2xl p-6 text-left space-y-4 mb-8 text-lg">
          <InfoRow label="Mã đơn hàng" value={orderCode} />
          <InfoRow label="Lý do" value={reason} error />
          <InfoRow label="Trạng thái" value="Thất bại" error />
        </div>

        {/* Actions */}
        <div className="space-y-4">
          {/* <button
            onClick={() => (window.location.href = "/checkout")}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-2xl text-lg transition"
          >
            🔁 Thanh toán lại
          </button> */}

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-4 rounded-2xl text-lg transition"
          >
            ⬅️ Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;

/* Component phụ */
const InfoRow = ({
  label,
  value,
  error,
}: {
  label: string;
  value: string;
  error?: boolean;
}) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className={`font-semibold ${error ? "text-red-600" : ""}`}>
        {value}
      </span>
    </div>
  );
};
