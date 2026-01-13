import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Switch, DatePicker, Button, Input } from 'antd';
import dayjs from 'dayjs';

const UpdateUserModal = ({ isVisible, onClose, currentUser, onUpdate }) => {
  const [form] = Form.useForm();
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const userIsLocked = currentUser.isLocked || false;
      setIsLocked(userIsLocked);

      form.setFieldsValue({
        email: currentUser.email,
        role: currentUser.role,
        isLocked: userIsLocked,
        expiredBanned: currentUser.expiredBanned ? dayjs(currentUser.expiredBanned) : null,
      });
    }
  }, [currentUser, form]);

  const handleSwitchChange = (checked) => {
    setIsLocked(checked);
  };

  const handleFinish = (values) => {
    const submitData = {
      ...values,
      role: values.role,
      isLocked: values.isLocked,
      expiredBanned: values.isLocked && values.expiredBanned ? values.expiredBanned : null,
    };
    
    onUpdate(submitData);
  };

  return (
    <Modal
      title="Cập nhật quyền người dùng"
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Người dùng" name="email">
          <Input disabled className="bg-gray-100 text-gray-500" />
        </Form.Item>

        <Form.Item 
          label="Chọn quyền hạn mới" 
          name="role" 
          rules={[{ required: true, message: 'Vui lòng chọn quyền!' }]}
        >
          <Select placeholder="Chọn quyền">
            <Select.Option value="staff">Staff (Nhân viên)</Select.Option>
            <Select.Option value="user">User (Người dùng)</Select.Option>
            <Select.Option value="admin">Admin (Quản trị)</Select.Option>
          </Select>
        </Form.Item>

        <div className="border-t my-4 pt-4">
          <h4 className="mb-2 font-semibold">Trạng thái tài khoản</h4>
          
          <Form.Item name="isLocked" valuePropName="checked">
            <div className="flex items-center justify-between border p-3 rounded bg-gray-50">
              <span>Khóa tài khoản này?</span>
              <Switch onChange={handleSwitchChange} />
            </div>
          </Form.Item>

          {isLocked && (
            <Form.Item 
              label="Khóa đến khi nào thì mở lại?" 
              name="expiredBanned"
              help="Để trống = Khóa vĩnh viễn (cho đến khi mở lại thủ công)."
            >
              <DatePicker 
                showTime 
                format="DD/MM/YYYY HH:mm" 
                className="w-full" 
                placeholder="Chọn ngày giờ mở khóa"
              />
            </Form.Item>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onClose}>Hủy</Button>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0C7D41" }}>
            Lưu thay đổi
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UpdateUserModal;