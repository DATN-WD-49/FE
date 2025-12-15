import React from 'react'
import { useTable } from '../../../common/hooks/useTable';
import { getAllOrder } from '../../../common/services/order.service';
import { Link } from 'react-router';
import { QrcodeOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { columnTicket } from './components/ColumnTicket';
import FilterTicket from './components/FilterTicket';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../../common/contants/queryKey';

const ListTicket = () => {
    const { query, getSorterProps } = useTable();
    const { data } = useQuery({
        queryKey: [
            QUERY_KEY.ORDER.ROOT,
            ...Object.keys(query),
            ...Object.values(query),
          ],
          queryFn: () =>
          getAllOrder({
            searchFields: [
                "customerInfo.userName",
                "customerInfo.phone",
                "customerInfo.email",
              ],
              ...query,
          })
    });
  return (
    <div className="bg-white w-full min-h-[70dvh] rounded-md shadow-sm px-6 py-4">
        <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold mb-4">Quản lý vé đã đặt</h3>
        <Link to={`/admin/ticket/scan`} className="text-4xl!">
          <QrcodeOutlined />
        </Link>
        </div>
        <FilterTicket />
        <div className="mt-4">
        <Table
          bordered
          columns={columnTicket(getSorterProps)}
          dataSource={data?.data}
        />
        </div>

    </div>
  )
}

export default ListTicket