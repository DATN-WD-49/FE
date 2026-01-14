import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
          alt="Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-gray-200 max-w-2xl">
              Chúng tôi luôn sẵn sàng hỗ trợ và đồng hành cùng bạn
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=600&auto=format&fit=crop"
              alt="Address"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-gray-800 mb-1">Địa chỉ</h3>
            <p className="text-gray-600 text-sm">
              Số 13 Trịnh Văn Bô
              <br />
              Phường Phương Canh
              <br />
              Quận Nam Từ Liêm
              <br />
              Hà Nội
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=600&auto=format&fit=crop"
              alt="Phone"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-gray-800 mb-1">Điện thoại</h3>
            <p className="text-gray-600 text-sm">(+84) 365252737</p>
            <p className="text-gray-500 text-sm">
              Thứ 2 – Thứ 6 (08:00 – 21:00)
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
              alt="Email"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-600 text-sm">goticketpoly@gmail.com</p>
            <p className="text-gray-500 text-sm">Hỗ trợ 24/7</p>
          </div>
        </div>

        {/* Map section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <iframe
            title="Office Map"
            src="https://www.google.com/maps?q=13%20Trinh%20Van%20Bo%20Ha%20Noi&output=embed"
            className="w-full h-[360px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
