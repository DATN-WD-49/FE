import React from "react";

export default function OfficeAddressPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Địa chỉ văn phòng
        </h1>
        <p className="text-gray-600 mb-8">
          Thông tin liên hệ và vị trí văn phòng của chúng tôi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Thông tin văn phòng */}
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">📍 Địa chỉ</h3>
              <p className="text-gray-600 leading-relaxed">
                Số 13 Trịnh Văn Bô
                <br />
                Phường Phương Canh
                <br />
                Quận Nam Từ Liêm
                <br />
                Hà Nội
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                📞 Điện thoại
              </h3>
              <p className="text-gray-600">(+84) 365252737</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">✉️ Email</h3>
              <p className="text-gray-600">goticketpoly@gmail.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                ⏰ Giờ làm việc
              </h3>
              <p className="text-gray-600">Thứ 2 – Chủ Nhật: 08:00 – 21:00</p>
            </div>
          </div>

          {/* Bản đồ */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <iframe
              title="Office Map"
              src="https://www.google.com/maps?q=13%20Trinh%20Van%20Bo%20Ha%20Noi&output=embed"
              className="w-full h-full min-h-[350px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
