import { useState } from "react";
import {
  Table,
  Avatar,
  Tag,
  Select,
  Input,
  message,
  Typography,
  Button,
  Modal,
  Form,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { UserOutlined, SearchOutlined, EditOutlined } from "@ant-design/icons";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllUser, updateUser } from "../../../common/services/user.service";
import type { IUser } from "../../../common/types/User";

const { Title } = Typography;

const UserManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<IUser | null>(null);
  const [form] = Form.useForm(); // Form của Antd để quản lý dữ liệu trong Modal

  const queryClient = useQueryClient();

  // 1. Lấy dữ liệu
  const { data: userResponse, isLoading } = useQuery({
    queryKey: ["USERS"],
    queryFn: () => getAllUser({}),
  });

  const users = userResponse?.data || [];

  // 2. API Cập nhật
  const { mutate: handleUpdate, isPending: isUpdating } = useMutation({
    mutationFn: (values: { role: string }) => {
      if (!editingUser) return Promise.reject("No user selected");
      // Gọi API update user
      return updateUser(editingUser._id, values as any);
    },
    onSuccess: () => {
      message.success("Cập nhật quyền thành công!");
      queryClient.invalidateQueries({ queryKey: ["USERS"] });
      setIsModalOpen(false); // Đóng Modal
      setEditingUser(null);
    },
    onError: () => {
      message.error("Lỗi khi cập nhật.");
    },
  });

  // Hàm mở Modal khi bấm nút Sửa
  const onEdit = (user: IUser) => {
    setEditingUser(user);
    form.setFieldsValue({ role: user.role }); // Đổ dữ liệu cũ vào form
    setIsModalOpen(true);
  };

  // Hàm khi bấm nút "Lưu" trong Modal
  const onSave = () => {
    form.validateFields().then((values) => {
      handleUpdate(values);
    });
  };

  const columns: ColumnsType<IUser> = [
    {
      title: "Người dùng",
      key: "info",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <Avatar
            src={record.avatar || undefined}
            icon={<UserOutlined />}
            size="large"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">
              {record.userName}
            </span>
            <span className="text-gray-500 text-xs">{record.email}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (phone) =>
        phone || <span className="text-gray-400 italic text-xs">Trống</span>,
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (_, record) =>
        record.isVerifed ? (
          <Tag color="success">Đã xác thực</Tag>
        ) : (
          <Tag color="warning">Chưa xác thực</Tag>
        ),
    },
    {
      title: "Quyền hạn",
      dataIndex: "role",
      key: "role",
      render: (role) => {
        let color = "default";
        if (role === "admin") color = "red";
        if (role === "staff") color = "blue";
        return (
          <Tag color={color} className="uppercase font-bold">
            {role}
          </Tag>
        );
      },
    },
    {
      title: "Thao tác",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Button
          type="primary"
          style={{ backgroundColor: "#0C7D41" }} // Màu xanh giống theme của bạn
          icon={<EditOutlined />}
          onClick={() => onEdit(record)}
        />
      ),
    },
  ];

  const filteredData = users.filter(
    (u) =>
      u.userName?.toLowerCase().includes(searchText.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchText.toLowerCase()) ||
      u.phone?.includes(searchText),
  );

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-lg shadow-sm min-h-[80vh]">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <Title level={3} style={{ margin: 0, color: "#0C7D41" }}>
            Quản lý người dùng
          </Title>
          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-md font-medium">
            Tổng số: {filteredData.length} User
          </div>
        </div>

        <div className="mb-6 max-w-md">
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Tìm kiếm..."
            size="large"
            onChange={(e) => setSearchText(e.target.value)}
            allowClear
          />
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="_id"
          loading={isLoading}
          pagination={{ pageSize: 10 }}
        />

        {/* MODAL CẬP NHẬT QUYỀN */}
        <Modal
          title="Cập nhật quyền người dùng"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onOk={onSave}
          confirmLoading={isUpdating}
          okText="Lưu thay đổi"
          cancelText="Hủy"
        >
          <Form form={form} layout="vertical" className="mt-4">
            <Form.Item label="Người dùng">
              <Input value={editingUser?.email} disabled />
            </Form.Item>

            <Form.Item
              name="role"
              label="Chọn quyền hạn mới"
              rules={[{ required: true, message: "Vui lòng chọn quyền!" }]}
            >
              <Select size="large">
                <Select.Option value="user">User (Khách hàng)</Select.Option>
                <Select.Option value="staff">Staff (Nhân viên)</Select.Option>
                <Select.Option value="admin">
                  Admin (Quản trị viên)
                </Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default UserManagement;
