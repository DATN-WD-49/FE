import React, { useState, useEffect } from 'react';
import { Modal, Form, Select, Switch, DatePicker, Button, Input, message } from 'antd';
import moment from 'moment';

const UpdateUserModal = ({ isVisible, onClose, currentUser, onUpdate }) => {
  const [form] = Form.useForm();
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const isUserLocked = currentUser.status === 'locked';
      setIsLocked(isUserLocked);

      form.setFieldsValue({
        email: currentUser.email,
        role: currentUser.role,
        is_locked: isUserLocked,
        expiredBanned: currentUser.lockUntil ? moment(currentUser.lockUntil) : null,
      });
    }
  }, [currentUser, form]);

  const handleSwitchChange = (checked) => {
    setIsLocked(checked);
  };

  const handleFinish = (values) => {
    const updatedData = {
      ...currentUser,
      role: values.role,
      isLocked: values.isLocked ? 'true' : 'false',
      expiredBanned: values.isLocked ? values.expiredBanned : null,
    };
    
    onUpdate(updatedData);
    message.success("Cập nhật thành công!");
    onClose();
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
          <Input disabled className="bg-gray-100" />
        </Form.Item>

        <Form.Item 
          label="Chọn quyền hạn mới" 
          name="role" 
          rules={[{ required: true, message: 'Vui lòng chọn quyền!' }]}
        >
          <Select placeholder="Chọn quyền">
            <Select.Option value="STAFF">Staff (Nhân viên)</Select.Option>
            <Select.Option value="USER">User (Người dùng)</Select.Option>
          </Select>
        </Form.Item>

        <div className="border-t my-4 pt-4">
          <h4 className="mb-2 font-semibold">Trạng thái tài khoản</h4>
          
          <Form.Item name="is_locked" valuePropName="checked">
            <div className="flex items-center justify-between">
              <span>Khóa tài khoản này?</span>
              <Switch onChange={handleSwitchChange} />
            </div>
          </Form.Item>

          {isLocked && (
            <Form.Item 
              label="Khóa đến khi nào thì mở lại?" 
              name="expiredBanned"
              rules={[{ required: true, message: 'Vui lòng chọn thời gian mở khóa!' }]}
              extra="Sau thời gian này, tài khoản sẽ tự động được mở."
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
          <Button type="primary" htmlType="submit" className="bg-blue-600">
            Lưu thay đổi
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UpdateUserModal;