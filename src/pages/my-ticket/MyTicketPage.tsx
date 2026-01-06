import { useState } from "react";
import { Table, Tag, Button, Modal, QRCode, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DownloadOutlined, EyeOutlined, HomeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { getMyOrder } from "../../common/services/order.service";
import type { IOrder, OrderStatus } from "../../common/types/Order";

const { Title, Text } = Typography;

const MyTicketPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<IOrder | null>(null);
  const nav = useNavigate();

  // 1. Lấy dữ liệu từ API
  const { data: ordersResponse, isLoading } = useQuery({
    queryKey: ["MY_ORDERS"],
    queryFn: getMyOrder,
  });

  const orders = ordersResponse?.data || [];

  // 2. Hàm hiển thị Modal QR
  const showQrModal = (ticket: IOrder) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  // 3. Hàm tải QR xuống máy
  const downloadQRCode = () => {
    const canvas = document
      .getElementById("my-qr-code")
      ?.querySelector("canvas");
    if (canvas && selectedTicket) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = `QR-${selectedTicket._id}.png`;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  // 4. Cấu hình cột bảng (Map field từ IOrder)
  const columns: ColumnsType<IOrder> = [
    {
      title: "Mã vé",
      dataIndex: "_id",
      key: "_id",
      width: 150,
      render: (text) => (
        <Text strong copyable>
          {text}
        </Text>
      ),
    },
    {
      title: "Tuyến đường",
      key: "route",
      render: (_, record) => (
        <div className="flex flex-col">
          <span className="font-semibold">{record.pickupPoint}</span>
          <span className="text-gray-400 text-xs">đến</span>
          <span className="font-semibold">{record.dropPoint}</span>
        </div>
      ),
    },
    {
      title: "Xe - Ghế",
      key: "seat",
      render: (_, record) => (
        <div className="flex flex-col">
          <span className="text-gray-600 text-xs">
            {record.carInfo.licensePlate} ({record.carInfo.type})
          </span>
          {/* Lấy danh sách ghế từ mảng seats */}
          <span className="font-bold text-[#0C7D41]">
            Ghế: {record.seats.map((s) => s.seatLabel).join(", ")}
          </span>
        </div>
      ),
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (price) =>
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(price),
    },
    {
      title: "Giờ khởi hành",
      dataIndex: "startTime",
      key: "startTime",
      render: (date) => dayjs(date).format("HH:mm DD/MM/YYYY"),
    },
    {
      title: "Ngày mua",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => dayjs(date).format("DD/MM/YYYY"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: OrderStatus) => {
        let color = "default";
        let displayText: string = status;
        if (status === "BUYED") {
          color = "green";
          displayText = "Đã thanh toán";
        } else if (status === "USED") {
          color = "blue";
          displayText = "Đã sử dụng";
        } else if (status === "CANCELLED") {
          color = "red";
          displayText = "Đã hủy";
        }

        return <Tag color={color}>{displayText}</Tag>;
      },
    },
    {
      title: "QR Code",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Button
          type="link"
          icon={<EyeOutlined />}
          onClick={() => showQrModal(record)}
          disabled={record.status === "CANCELLED"} // Không hiện QR nếu đã hủy
        >
          Xem
        </Button>
      ),
    },
  ];

  return (
    <div className="p-8 bg-[#f0f2f5] min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <Title level={3} style={{ margin: 0, color: "#0C7D41" }}>
            Danh sách vé của tôi
          </Title>
          <Button icon={<HomeOutlined />} onClick={() => nav("/")}>
            Trang chủ
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={orders}
          loading={isLoading}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
          locale={{
            emptyText: (
              <div className="py-8 text-gray-400">Bạn chưa mua vé nào</div>
            ),
          }}
        />

        {/* Modal hiển thị QR */}
        <Modal
          title="Vé điện tử"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={[
            <Button key="back" onClick={() => setIsModalOpen(false)}>
              Đóng
            </Button>,
            <Button
              key="download"
              type="primary"
              icon={<DownloadOutlined />}
              onClick={downloadQRCode}
              style={{ background: "#0C7D41" }}
            >
              Tải ảnh về
            </Button>,
          ]}
          centered
        >
          <div
            id="my-qr-code"
            className="flex flex-col items-center justify-center py-4"
          >
            {selectedTicket && (
              <>
                <div className="border-4 border-[#0C7D41] p-2 rounded-lg">
                  {/* Ant Design QRCode component */}
                  <QRCode
                    value={selectedTicket._id} // Admin scan ID này để verify
                    size={200}
                    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    errorLevel="H"
                  />
                </div>
                <div className="mt-4 text-center">
                  <Text strong className="text-xl block text-[#0C7D41]">
                    {selectedTicket._id}
                  </Text>
                  <Text type="secondary" className="text-sm">
                    Đưa mã này cho phụ xe để soát vé
                  </Text>
                </div>
                {/* Thông tin tóm tắt dưới mã QR */}
                <div className="mt-4 w-full bg-gray-50 p-3 rounded text-sm">
                  <p>
                    <strong>Tuyến:</strong> {selectedTicket.pickupPoint} ➝{" "}
                    {selectedTicket.dropPoint}
                  </p>
                  <p>
                    <strong>Ghế:</strong>{" "}
                    {selectedTicket.seats.map((s) => s.seatLabel).join(", ")}
                  </p>
                  <p>
                    <strong>Giờ đi:</strong>{" "}
                    {dayjs(selectedTicket.startTime).format("HH:mm DD/MM/YYYY")}
                  </p>
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MyTicketPage;
