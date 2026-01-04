import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const PaymentSuccessPage = () => {
  const nav = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Logic đếm ngược
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Tự động chuyển trang sau 5 giây
    const redirect = setTimeout(() => {
      nav("/my-tickets"); // Chuyển về trang danh sách vé bạn đã làm
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [nav]);

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#f0f2f5] p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <Result
          icon={<SmileOutlined style={{ color: "#0C7D41" }} />}
          status="success"
          title="Thanh toán thành công!"
          subTitle={
            <div className="text-base text-gray-500">
              <p>Cảm ơn bạn đã sử dụng dịch vụ của Go Ticket.</p>
              <p className="mt-2">
                Hệ thống sẽ tự động chuyển đến trang vé của bạn sau{" "}
                <span className="text-red-500 font-bold text-xl">
                  {countdown}
                </span>{" "}
                giây...
              </p>
            </div>
          }
          extra={[
            <Button
              type="primary"
              key="console"
              size="large"
              onClick={() => nav("/my-tickets")}
              style={{ backgroundColor: "#0C7D41", borderColor: "#0C7D41" }}
            >
              Xem vé ngay
            </Button>,
            <Button key="buy" size="large" onClick={() => nav("/")}>
              Về trang chủ
            </Button>,
          ]}
        />
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
