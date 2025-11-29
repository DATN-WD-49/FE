import { GiftFilled } from "@ant-design/icons";
import { Button, Checkbox, Radio } from "antd";
import CountTime from "./components/CountTime";

const CheckoutPage = () => {
  return (
    <select className="bg-[#f0f2f5] min-h-screen">
      <div className="max-w-7xl xl:mx-auto mx-6 pt-8">
        {/* HEADING */}
        <div className="flex items-end justify-between">
          <h3 className="text-xl text-gray-800 font-semibold">
            Xác nhận mua vé
          </h3>
          <div className="flex items-end">
            <p className="text-gray-800/50">Thời gian giao dịch còn lại</p>
            <CountTime />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg px-4 py-6">
            <p className="text-base font-medium">Thông tin khác hàng</p>
            <div className="mt-6 flex flex-col gap-5 text-gray-800/60">
              <div className="flex items-center">
                <p className="w-42">Số điện thoại</p>
                <p>0383144530</p>
              </div>
              <div className="flex items-center">
                <p className="w-42">Họ và tên</p>
                <p>Phạm Tuấn Ngọc</p>
              </div>
              <div className="flex items-center">
                <p className="w-42">Email</p>
                <p>ngocptph31037@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="text-base mt-6 font-medium">
            <p>Phương thức thanh toán</p>
            <div className="relative cursor-pointer max-w-[325px] flex items-center gap-4  bg-white rounded-lg border mt-6 border-red-500 py-6 px-4">
              <Radio checked />
              <div className="flex flex-col gap-2">
                <p className="font-medium">Thanh Toán online</p>
                <p className="text-gray-700/60 text-xs">
                  <GiftFilled className="text-yellow-500! mr-2" />
                  Thanh toán online có nhiều ưu đãi hấp dẫn, tiết kiệm
                </p>
              </div>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shadow-md">
                ✓
              </div>
            </div>
            <div className="mt-6">
              <p>Xin cảm ơn!</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg px-4 py-6">
            <p className="text-base font-medium">Thông tin vé</p>
            <div className="mt-6 flex flex-col gap-5 text-gray-800/60">
              <div className="flex items-center">
                <p className="w-42">Tuyến</p>
                <p className="text-gray-800">
                  BX Nước Ngầm - BX Yên Nghĩa (Cao tốc Hà Nội - Nghệ An)
                </p>
              </div>
              <div className="flex items-center">
                <p className="w-42">Giờ xuất bến</p>
                <p className="text-gray-800">08:00 ngày 29/11/2025</p>
              </div>
              <div className="flex items-center">
                <p className="w-42">Điểm đến</p>
                <p className="text-gray-800">ĐL NGHI SƠN (NH TƯỜNG VY) - TH</p>
              </div>
              <div className="flex items-center">
                <p className="w-42">Ghế</p>
                <p className="text-gray-800">V6</p>
              </div>
              <div className="my-8 border border-dashed border-gray-300/50"></div>
              <div className="flex items-center justify-between">
                <p>Tổng tiền vé</p>
                <p className="text-gray-800">300.000 VND</p>
              </div>
              <div className="flex p-4 bg-red-200/30 items-center justify-between">
                <p>Tổng tiền thanh toán</p>
                <p className="text-red-500 font-semibold text-base">
                  300.000 VND
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Checkbox>Tôi đồng ý với quy định của Go Ticket</Checkbox>
            <div className="flex items-center gap-4">
              <Button>Hủy</Button>
              <Button type="primary" style={{ background: `#0C7D41` }}>
                Thanh Toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </select>
  );
};

export default CheckoutPage;
