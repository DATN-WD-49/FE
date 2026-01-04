import { useNavigate } from "react-router";
import { Result, Button, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;

const PaymentFailedPage = () => {
  const nav = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#f0f2f5] p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <Result
          status="error"
          icon={<CloseCircleOutlined style={{ color: "#ff4d4f" }} />}
          title="Thanh toán thất bại"
          subTitle={
            <div className="text-gray-500 text-base">
              <p>Giao dịch của bạn chưa được hoàn tất hoặc đã bị hủy.</p>
              <Paragraph className="mt-4 bg-red-50 p-4 rounded-md border border-red-100">
                <Text strong className="text-red-700">
                  Nguyên nhân có thể:
                </Text>
                <ul className="list-disc list-inside text-left mt-2 text-gray-700 ml-4">
                  <li>Bạn đã chủ động hủy giao dịch trên cổng thanh toán.</li>
                  <li>Tài khoản không đủ số dư hoặc thẻ bị từ chối.</li>
                  <li>Hết thời gian thanh toán (quá hạn giữ ghế).</li>
                  <li>Lỗi kết nối mạng trong quá trình giao dịch.</li>
                </ul>
              </Paragraph>
              <p className="mt-4">
                Nếu bạn vẫn muốn đặt vé này, vui lòng thử lại hoặc chọn chuyến
                khác.
              </p>
            </div>
          }
          extra={[
            <Button
              type="primary"
              key="console"
              size="large"
              danger
              onClick={() => nav("/")}
            >
              Về trang chủ
            </Button>,
            <Button key="buy" size="large" onClick={() => nav("/bookings")}>
              Đặt chuyến khác
            </Button>,
          ]}
        />
      </div>
    </div>
  );
};

export default PaymentFailedPage;
