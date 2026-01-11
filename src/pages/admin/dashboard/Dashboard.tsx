import { Card, Col, DatePicker, Row, Space, Table } from "antd";
import { useState } from "react";
import type { ReactNode } from "react";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import {
  CarOutlined,
  EnvironmentOutlined,
  ScheduleOutlined,
  DollarOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Line, Column } from "@ant-design/plots";

const { RangePicker } = DatePicker;

function Dashboard() {
  const ticketsData = [
    { date: "01/01", total: 30 },
    { date: "02/01", total: 45 },
    { date: "03/01", total: 60 },
    { date: "04/01", total: 55 },
    { date: "05/01", total: 70 },
  ];

  const revenueData = [
    { route: "HN - HP", revenue: 25000000 },
    { route: "HN - ND", revenue: 18000000 },
    { route: "HN - TB", revenue: 12000000 },
    { route: "HN - NB", revenue: 8500000 },
  ];
  const [dateRange, setDateRange] = useState<
    [Dayjs | null, Dayjs | null] | null
  >(null);

  const filteredTicketsData = dateRange
    ? ticketsData.filter((item) => {
        const d = dayjs(item.date);
        return (
          d.isAfter(dateRange[0]!.startOf("day")) &&
          d.isBefore(dateRange[1]!.endOf("day"))
        );
      })
    : ticketsData;

  const lineConfig = {
    data: filteredTicketsData,
    xField: "date",
    yField: "total",
    smooth: true,
    color: "#1677ff",
    height: 250,
  };
  const barConfig = {
    data: revenueData,
    xField: "route",
    yField: "revenue",
    color: "#52c41a",
    height: 250,
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>📊 THỐNG KÊ HỆ THỐNG</h2>
      <Row gutter={16}>
        <Col span={4}>
          <StatCard title="Xe" value="12" icon={<CarOutlined />} />
        </Col>
        <Col span={4}>
          <StatCard title="Tuyến" value="6" icon={<EnvironmentOutlined />} />
        </Col>
        <Col span={4}>
          <StatCard title="Lịch chạy" value="48" icon={<ScheduleOutlined />} />
        </Col>
        <Col span={4}>
          <StatCard title="Vé đã bán" value="420" icon={<FileTextOutlined />} />
        </Col>
        <Col span={8}>
          <StatCard
            title="Doanh thu"
            value="68.500.000 đ"
            icon={<DollarOutlined />}
          />
        </Col>
      </Row>
      <Space style={{ margin: "24px 0" }}>
        <span>Lọc theo thời gian:</span>
        <RangePicker onChange={(values) => setDateRange(values)} />
      </Space>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={12}>
          <Card title="🎟 Vé bán theo ngày">
            <Line {...lineConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="🛣 Doanh thu theo tuyến">
            <Column {...barConfig} />
          </Card>
        </Col>
      </Row>

      <Card title="🚍 Hiệu suất xe" style={{ marginTop: 24 }}>
        <Table
          pagination={false}
          dataSource={[
            { key: 1, plate: "29A-12345", trips: 25, tickets: 220 },
            { key: 2, plate: "30B-67890", trips: 18, tickets: 160 },
            { key: 3, plate: "29C-45678", trips: 15, tickets: 120 },
          ]}
          columns={[
            { title: "Biển số", dataIndex: "plate" },
            { title: "Số chuyến", dataIndex: "trips" },
            { title: "Vé bán", dataIndex: "tickets" },
          ]}
        />
      </Card>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: ReactNode;
}) {
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 24 }}>{icon}</div>
        <div>
          <div style={{ color: "#888" }}>{title}</div>
          <div style={{ fontSize: 22, fontWeight: 600 }}>{value}</div>
        </div>
      </div>
    </Card>
  );
}

export default Dashboard;
