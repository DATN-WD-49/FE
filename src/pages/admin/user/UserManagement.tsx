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
  Switch,
  DatePicker,
  notification,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  UserOutlined,
  SearchOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { IUser } from "../../../common/types/User";
import dayjs from "dayjs";
import { createUser, getAllUser, updateUser } from "../../../common/services/user.service";

const { Title } = Typography;

const UserManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<IUser | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [addForm] = Form.useForm();
  const queryClient = useQueryClient();

  const { data: userResponse, isLoading } = useQuery({
    queryKey: ["USERS"],
    queryFn: () => getAllUser({}),
  });

  const users = userResponse?.data || [];

  const { mutate: handleUpdate, isPending: isUpdating } = useMutation({
    mutationFn: (values: any) => {
      if (!editingUser) return Promise.reject("No user selected");
      const updateData = {
        role: values.role,
        isLocked: values.isLocked,
        expiredBanned:
          values.isLocked && values.expiredBanned ? values.expiredBanned : null,
      };
      return updateUser(editingUser._id, updateData);
    },
    onSuccess: () => {
      message.success("Cập nhật thành công!");
      queryClient.invalidateQueries({ queryKey: ["USERS"] });
      setIsModalOpen(false);
      setEditingUser(null);
    },
    onError: () => {
      message.error("Lỗi khi cập nhật.");
    },
  });

  const { mutate: handleCreate, isPending: isCreating } = useMutation({
    mutationFn: (values: any) => {
      const payload = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        phone: values.phone,
        role: values.role,
      };
      return createUser(payload);
    },
    onSuccess: () => {
      message.success("Thêm người dùng thành công!");
      queryClient.invalidateQueries({ queryKey: ["USERS"] });
      setIsAddModalOpen(false);
      addForm.resetFields();
    },
    onError: (error: any) => {
      const errorMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Lỗi khi thêm mới. Vui lòng kiểm tra lại.";
      notification.error({
        message: "Thêm thất bại",
        description: errorMsg,
      });
    },
  });

  const onEdit = (user: IUser) => {
    setEditingUser(user);
    const userIsLocked = user.isLocked || false;
    setIsLocked(userIsLocked);
    form.setFieldsValue({
      role: user.role,
      email: user.email,
      isLocked: userIsLocked,
      expiredBanned: user.expiredBanned ? dayjs(user.expiredBanned) : null,
    });
    setIsModalOpen(true);
  };

  const onSave = () => {
    form.validateFields().then((values) => {
      handleUpdate(values);
    });
  };

  const onAddUser = () => {
    addForm.validateFields().then((values) => {
      handleCreate(values);
    });
  };

  const columns: ColumnsType<IUser> = [
    {
      title: "Người dùng",
      key: "info",
      width: 250,
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
      title: "Loại TK",
      key: "provider",
      dataIndex: "provider",
      render: (provider: string[]) => {
        const isGoogle = provider?.includes("google");
        return isGoogle ? (
          <Tag color="orange">Google</Tag>
        ) : (
          <Tag color="blue">Local</Tag>
        );
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      render: (phone) =>
        phone || <span className="text-gray-400 italic text-xs">Trống</span>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => (date ? dayjs(date).format("DD/MM/YYYY") : ""),
    },
    {
      title: "Trạng thái",
      key: "status",
      render: (_, record) => {
        if (record.isLocked) return <Tag color="error">Đã khóa</Tag>;
        return record.isVerified ? (
          <Tag color="success">Active</Tag>
        ) : (
          <Tag color="warning">Chưa xác thực</Tag>
        );
      },
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
          style={{ backgroundColor: "#0C7D41" }}
          icon={<EditOutlined />}
          onClick={() => onEdit(record)}
        />
      ),
    },
  ];

  const filteredData = users.filter((u) => {
    const matchSearch =
      u.userName?.toLowerCase().includes(searchText.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchText.toLowerCase()) ||
      u.phone?.includes(searchText);

    const matchRole = roleFilter === "ALL" || u.role === roleFilter;

    let matchStatus = true;
    if (statusFilter !== "ALL") {
      if (statusFilter === "locked") matchStatus = u.isLocked === true;
      else if (statusFilter === "active")
        matchStatus = u.isVerified === true && !u.isLocked; // <-- Đã sửa isVerifed
      else if (statusFilter === "unverified")
        matchStatus = !u.isVerified && !u.isLocked; // <-- Đã sửa isVerifed
    }

    return matchSearch && matchRole && matchStatus;
  });

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-lg shadow-sm min-h-[80vh]">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <Title level={3} style={{ margin: 0, color: "#0C7D41" }}>
            Quản lý người dùng
          </Title>
          <div className="flex items-center gap-3">
            <div className="bg-green-50 text-green-700 px-4 py-2 rounded-md font-medium">
              Tổng số: {filteredData.length} User
            </div>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{ backgroundColor: "#0C7D41" }}
              size="large"
              onClick={() => setIsAddModalOpen(true)}
            >
              Thêm mới
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Tìm kiếm..."
            size="large"
            style={{ width: 300 }}
            onChange={(e) => setSearchText(e.target.value)}
            allowClear
          />

          <Select
            defaultValue="ALL"
            size="large"
            style={{ width: 180 }}
            onChange={(val) => setRoleFilter(val)}
            options={[
              { value: "ALL", label: "Tất cả Quyền" },
              { value: "staff", label: "Staff" },
              { value: "user", label: "User" },
              { value: "admin", label: "Admin" },
            ]}
          />

          <Select
            defaultValue="ALL"
            size="large"
            style={{ width: 200 }}
            onChange={(val) => setStatusFilter(val)}
            options={[
              { value: "ALL", label: "Tất cả Trạng thái" },
              { value: "active", label: "Active" },
              { value: "unverified", label: "Chưa xác thực" },
              { value: "locked", label: "Đã khóa" },
            ]}
          />
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="_id"
          loading={isLoading}
          pagination={{ pageSize: 10 }}
        />

        {/* Modal Cập Nhật */}
        <Modal
          title="Cập nhật người dùng"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onOk={onSave}
          confirmLoading={isUpdating}
          okText="Lưu thay đổi"
          cancelText="Hủy"
        >
          <Form form={form} layout="vertical" className="mt-4">
            <Form.Item label="Email" name="email">
              <Input disabled className="bg-gray-100 text-gray-500" />
            </Form.Item>

            <Form.Item
              name="role"
              label="Chọn quyền hạn mới"
              rules={[{ required: true, message: "Vui lòng chọn quyền!" }]}
            >
              <Select size="large">
                <Select.Option value="user">User</Select.Option>
                <Select.Option value="staff">Staff</Select.Option>
              </Select>
            </Form.Item>

            <div className="border-t pt-4 mt-4">
              <Form.Item
                name="isLocked"
                valuePropName="checked"
                label="Trạng thái tài khoản"
              >
                <div className="flex justify-between items-center border p-3 rounded bg-gray-50">
                  <span>Khóa tài khoản này?</span>
                  <Switch onChange={(checked) => setIsLocked(checked)} />
                </div>
              </Form.Item>

              {isLocked && (
                <Form.Item
                  name="expiredBanned"
                  label="Thời hạn khóa (Tùy chọn)"
                  help="Để trống = Khóa vĩnh viễn"
                >
                  <DatePicker
                    className="w-full"
                    size="large"
                    showTime
                    format="DD/MM/YYYY HH:mm"
                    placeholder="Chọn ngày mở lại"
                  />
                </Form.Item>
              )}
            </div>
          </Form>
        </Modal>

        {/* Modal Thêm Mới */}
        <Modal
          title="Thêm người dùng mới"
          open={isAddModalOpen}
          onCancel={() => setIsAddModalOpen(false)}
          onOk={onAddUser}
          confirmLoading={isCreating}
          okText="Thêm mới"
          cancelText="Hủy"
        >
          <Form
            form={addForm}
            layout="vertical"
            className="mt-4"
            initialValues={{ role: "user" }}
          >
            <Form.Item
              name="userName"
              label="Tên người dùng"
              rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
            >
              <Input placeholder="Nhập tên hiển thị" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input placeholder="Nhập địa chỉ email" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu phải từ 6 ký tự!" },
              ]}
            >
              <Input.Password placeholder="Nhập mật khẩu" size="large" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
                {
                  pattern: /^[0-9]{10,11}$/,
                  message: "Số điện thoại không hợp lệ (10-11 số)!",
                },
              ]}
            >
              <Input placeholder="Nhập số điện thoại" size="large" />
            </Form.Item>

            <Form.Item
              name="role"
              label="Vai trò (Quyền hạn)"
              rules={[{ required: true, message: "Vui lòng chọn quyền!" }]}
            >
              <Select size="large">
                <Select.Option value="staff">Staff (Nhân viên)</Select.Option>
                <Select.Option value="user">User (Khách hàng)</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default UserManagement;
