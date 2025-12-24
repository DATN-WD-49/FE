import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { getDetailOrder } from "../../common/services/order.service";
import { QUERY_KEY } from "../../common/contants/queryKey";
import dayjs from "dayjs";
import { formatCurrency } from "../../common/utils";
import { QRCode } from "antd";
import html2canvas from "html2canvas";

const DetailTicket = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: [QUERY_KEY.ORDER.ROOT, id],
    queryFn: () => getDetailOrder(id as string),
  });

  // ✅ HÀM TẢI ẢNH VÉ
  const handleDownloadImage = async () => {
    const ticketElement = document.getElementById("ticket-image");
    if (!ticketElement) return;

    const canvas = await html2canvas(ticketElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `ve-xe-${id}.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      {data ? (
        // ⬇️ BỌC TOÀN BỘ VÉ ĐỂ TẢI ẢNH
        <div
          id="ticket-image"
          className="mx-auto max-w-6xl rounded-2xl bg-white shadow-lg"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 px-8 py-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                🚌
              </div>
              <h1 className="text-xl font-semibold text-slate-700">
                Go <span className="text-orange-500">Ticket</span> Poly
              </h1>
            </div>
            <Link to={"/profile/my-ticket"} className="px-8 text-blue-600">
              Quay trở về
            </Link>
          </div>

          {/* THÔNG BÁO */}
          <div className="px-8 pt-6">
            <div className="flex items-center gap-3 rounded-lg bg-green-50 px-5 py-4 text-green-700">
              <span className="text-xl">✅</span>
              <span className="font-medium">
                Đặt vé thành công! Chúc quý khách chuyến đi vui vẻ!
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 gap-6 px-8 py-8 md:grid-cols-3">
            {/* LEFT */}
            <div className="md:col-span-2 space-y-6">
              {/* MÃ VÉ */}
              <div className="rounded-xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-slate-500">Mã vé</p>
                    <p className="text-lg font-semibold text-slate-800 uppercase">
                      {id}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Ngày đặt vé:{" "}
                      {dayjs(data.data.createdAt).format("DD/MM/YYYY HH:mm")}
                    </p>
                  </div>

                  {data.data.isPaid ? (
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <span>Đã thanh toán</span>
                      <span>✔</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600 font-semibold">
                      <span>Chưa thanh toán</span>
                      <span>✘</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CHUYẾN ĐI */}
              <div className="rounded-xl p-5">
                <h2 className="mb-4 text-lg font-semibold text-slate-700">
                  Thông Tin Chuyến Đi
                </h2>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <span className="font-medium">Điểm xuất phát:</span>{" "}
                    {data.data.pickupPoint}
                  </p>
                  <p>
                    <span className="font-medium">Khởi hành:</span>{" "}
                    {dayjs(data.data.startTime).format("DD/MM/YYYY HH:mm")}
                  </p>
                  <p>
                    <span className="font-medium">Loại xe:</span>{" "}
                    {data.data.carInfo.type}
                  </p>
                  <p>
                    <span className="font-medium">Biển số xe:</span>{" "}
                    {data.data.carInfo.licensePlate}
                  </p>
                </div>
              </div>

              {/* HÀNH KHÁCH */}
              <div className="rounded-xl p-5">
                <h2 className="mb-4 text-lg font-semibold text-slate-700">
                  Hành Khách
                </h2>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <span className="font-medium">Họ tên:</span>{" "}
                    {data.data.customerInfo.userName}
                  </p>
                  <p>
                    <span className="font-medium">Điện thoại:</span>{" "}
                    {data.data.customerInfo.phone}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {data.data.customerInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              {/* QR */}
              <div className="rounded-xl p-5 text-center">
                <h2 className="mb-4 text-lg font-semibold text-slate-700">
                  Mã QR Check-in
                </h2>
                <div className="mx-auto mb-3 h-48 w-48 flex items-center justify-center bg-slate-100">
                  <QRCode value={id as string} />
                </div>
                <p className="text-sm text-slate-500">
                  Mã vé: <span className="font-medium">{id}</span>
                </p>
              </div>

              {/* THANH TOÁN */}
              <div className="rounded-xl p-5">
                <h2 className="mb-4 text-lg font-semibold text-slate-700">
                  Thông Tin Thanh Toán
                </h2>
                <p className="text-slate-600">
                  <span className="font-medium">Tổng tiền:</span>{" "}
                  {formatCurrency(data.data.totalPrice)}
                </p>

                {/* NÚT TẢI VÉ */}
                <button
                  onClick={handleDownloadImage}
                  disabled={!data.data.isPaid}
                  className={`mt-4 w-full rounded-lg px-6 py-2 font-medium text-white
                    ${
                      data.data.isPaid
                        ? "bg-green-700 hover:bg-green-800"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  Tải Vé Xuống
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ❌ KHÔNG CÓ VÉ
        <div className="mx-auto max-w-6xl rounded-2xl bg-white flex items-center justify-center shadow-lg min-h-[90vh]">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-red-500 font-semibold text-xl">
              Vé này không tồn tại
            </p>
            <Link to={"/profile/my-ticket"} className="text-blue-600">
              Quay trở về
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailTicket;
