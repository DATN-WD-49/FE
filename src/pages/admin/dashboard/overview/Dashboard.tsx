import { Card, Col, Row } from "antd";
import type { ReactNode } from "react";
import {
  DollarOutlined,
  FileTextOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import FilterOverview from "./componments/FilterOverview";
import { useTable } from "../../../../common/hooks/useTable";
import type { IOverviewStats } from "../../../../common/types/stats";
import { useQuery } from "@tanstack/react-query";
import {
  getOverviewStats,
  getRevenueTopRoute,
} from "../../../../common/services/stats.service";
import { QUERY_KEY } from "../../../../common/contants/queryKey";
import RevenueOverviewMonth from "./componments/RevenueOverviewMonth";
import { Column } from "@ant-design/plots";

const DashboardOverview = () => {
  const { query } = useTable<IOverviewStats>();

  const { data: overviewData } = useQuery({
    queryKey: [QUERY_KEY.STATS.ROOT, ...Object.values(query)],
    queryFn: () => getOverviewStats(query),
  });

  const overview = overviewData?.data;

  const { data } = useQuery({
    queryKey: [QUERY_KEY.STATS.OVERVIEW, ...Object.values(query)],
    queryFn: () => getRevenueTopRoute(query),
  });

  const revenueData =
    data?.data?.result?.map((route) => ({
      route: `${route.pickupPoint} - ${route.dropPoint}`,
      revenue: route.revenue,
    })) ?? [];

  const barConfig = {
    // data: [
    //   { route: "A - B", revenue: 10000 },
    //   { route: "B - C", revenue: 20000 },
    // ],
    data: revenueData,
    xField: "route",
    yField: "revenue",
    color: "#52c41a",
    height: 250,
    xAxis: {
      label: {
        autoRotate: true,
        autoHide: true,
      },
    },
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>📊 THỐNG KÊ VÉ HỆ THỐNG</h2>

      <FilterOverview />
      <br />

      <Row gutter={16}>
        <Col span={8}>
          <StatCard
            title="Người dùng mới"
            value={overview?.newUsers.totalCurrent.toLocaleString("vi-VN") ?? 0}
            growth={overview?.newUsers.growthPercents}
            icon={<FileTextOutlined />}
          />
        </Col>

        <Col span={8}>
          <StatCard
            title="Vé đã bán"
            value={overview?.tickets?.totalCurrent.toLocaleString("vi-VN") ?? 0}
            growth={overview?.tickets?.growthPercents}
            icon={<FileTextOutlined />}
          />
        </Col>

        <Col span={8}>
          <StatCard
            title="Doanh thu"
            value={Number(overview?.revenue?.totalCurrent)}
            growth={overview?.revenue?.growthPercents}
            icon={<DollarOutlined />}
          />
        </Col>
      </Row>

      <Row gutter={20} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="🎟 Vé bán theo tháng">
            <RevenueOverviewMonth />
          </Card>
        </Col>
        <br />
        <Col span={24}>
          <Card title="🛣 Top Doanh thu theo tuyến">
            <Column {...barConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardOverview;

export function StatCard({
  title,
  value,
  icon,
  growth,
}: {
  title: string;
  value: string | number;
  icon: ReactNode;
  growth?: number;
}) {
  const isPositive = growth !== undefined && growth > 0;
  const isNegative = growth !== undefined && growth < 0;

  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 24 }}>{icon}</div>

        <div>
          <div style={{ color: "#888" }}>{title}</div>

          <div style={{ fontSize: 22, fontWeight: 600 }}>{value}</div>

          {growth !== undefined && (
            <div
              style={{
                marginTop: 4,
                fontSize: 13,
                color: isPositive ? "#52c41a" : isNegative ? "#ff4d4f" : "#999",
              }}
            >
              {isPositive && <ArrowUpOutlined />}
              {isNegative && <ArrowDownOutlined />}
              {!isPositive && !isNegative && "— "}
              {growth}%
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
