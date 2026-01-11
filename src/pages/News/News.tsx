import Comment from "./components/Comment";

const News = () => {
  return (
    <div>
      {/* TIÊU ĐỀ TRANG */}
      <div className="bg-[#003B22] text-center py-16 px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white mt-2 uppercase">
          TIN TỨC, VẬN TẢI HÀNH KHÁCH
        </h1>
      </div>

      {/* GIỚI THIỆU CÔNG TY */}
      <div className="max-w-4xl mx-auto p-8 mt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase">
          Giới thiệu công ty
        </h2>

        <img
          src="https://motortrip.vn/wp-content/uploads/2021/07/xe-khach-ha-noi-hue-3.jpg?auto=format&fit=crop&w=1000&q=80"
          alt="GoTicket Bus"
          className="rounded-xl shadow-md mb-6"
        />

        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          KHỞI ĐẦU TỪ MỘT NỀN MÓNG VỮNG CHẮC
        </h3>

        <p className="text-gray-700 mb-4">
          Là kim chỉ nam được Ban Giám đốc{" "}
          <span className="font-semibold text-green-700">GoTicket Poly</span>{" "}
          xây dựng và gìn giữ trong suốt quá trình hình thành và phát triển.
          Trải qua gần 17 năm hoạt động, chúng tôi không ngừng đổi mới, sáng tạo
          và từng bước khẳng định vị thế của mình trong lĩnh vực vận tải hành
          khách – mang đến những hành trình an toàn, tiện nghi và đáng tin cậy
          cho mọi khách hàng.
        </p>

        <p className="text-gray-700 mb-4">
          Với tinh thần dám nghĩ, dám làm và nỗ lực không ngừng nghỉ, GoTicket
          Poly ngày càng khẳng định vị thế là thương hiệu vận tải uy tín hàng
          đầu tại Việt Nam, nơi mỗi chuyến xe không chỉ là phương tiện di
          chuyển, mà còn là hành trình của niềm tin, chất lượng và sự tận tâm.
        </p>

        <p className="text-gray-700 mb-6">
          <span className="font-semibold text-green-700">GoTicket</span> – Khởi
          đầu vững chắc, đồng hành tin cậy, kiến tạo hành trình an toàn cho mọi
          người Việt.
        </p>
      </div>

      {/* TIN TỨC KHAI TRƯƠNG */}
      <div className="max-w-4xl mx-auto p-8 mt-10 rounded-xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
          🚍{" "}
          <span className="ml-2">
            GoTicket chính thức khai trương – Bước tiến mới trong ngành vận tải
            hành khách hiện đại
          </span>
        </h1>

        <img
          src="https://connectviet365.com/wp-content/uploads/2020/08/mua-l%C3%A2n-khai-tr%C6%B0%C6%A1ng.jpg?auto=format&fit=crop&w=1000&q=80"
          alt="Khai trương GoTicket"
          className="rounded-xl shadow-md mb-6"
        />

        <p className="mb-6 text-gray-700">
          Ngày <span className="italic">[cập nhật ngày khai trương]</span>,{" "}
          <span className="font-semibold text-black">GoTicket Poly</span> chính
          thức ra mắt và đi vào hoạt động, đánh dấu một bước tiến quan trọng
          trong lĩnh vực vận tải hành khách chất lượng cao tại Việt Nam. Với sứ
          mệnh{" "}
          <span className="italic">
            “Kết nối hành trình – Nâng tầm trải nghiệm”
          </span>
          , GoTicket Poly hướng đến xây dựng hệ sinh thái di chuyển thông minh,
          an toàn và tiện lợi cho mọi người dân.
        </p>

        <h2 className="text-xl font-semibold mb-2 flex items-center">
          ✨{" "}
          <span className="ml-2">
            Ứng dụng công nghệ đặt vé hiện đại – Trải nghiệm nhanh chóng, tiện
            lợi
          </span>
        </h2>

        <img
          src="https://cdn.tgdd.vn/Files/2022/02/05/1414046/cach-dat-ve-xe-phuong-trang-online-don-gian-nhanh-chong-nhat-202202051000462104.jpg?auto=format&fit=crop&w=1000&q=80"
          alt="Ứng dụng đặt vé GoTicket"
          className="rounded-xl shadow mb-4"
        />

        <p className="mb-4 text-gray-700">
          GoTicket Poly tiên phong ứng dụng{" "}
          <span className="font-medium">
            công nghệ đặt vé trực tuyến thông minh
          </span>
          , giúp hành khách dễ dàng tìm kiếm, so sánh và đặt vé chỉ trong vài
          thao tác đơn giản.
        </p>

        <p className="mb-4 text-gray-700">
          Hệ thống{" "}
          <span className="font-medium">
            website và ứng dụng di động GoTicket
          </span>{" "}
          được thiết kế thân thiện, tích hợp nhiều phương thức thanh toán linh
          hoạt, đồng thời cung cấp tính năng{" "}
          <span className="font-medium">theo dõi hành trình trực tiếp</span>,
          giúp khách hàng an tâm trên từng chuyến đi.
        </p>

        <p className="mb-6 text-gray-700">
          Bên cạnh đó, hệ thống{" "}
          <span className="font-medium">trí tuệ nhân tạo (AI)</span> và{" "}
          <span className="font-medium">phân tích dữ liệu thời gian thực</span>{" "}
          được áp dụng nhằm tối ưu hóa lộ trình, rút ngắn thời gian di chuyển và
          đảm bảo hiệu suất hoạt động cao nhất cho toàn bộ đội xe.
        </p>

        <h2 className="text-xl font-semibold mb-2 flex items-center">
          🛡️{" "}
          <span className="ml-2">
            Cam kết an toàn giao thông – Đặt con người làm trung tâm
          </span>
        </h2>

        <img
          src="https://phunugioi.com/wp-content/uploads/2020/10/ve-tranh-ve-de-tai-an-toan-giao-thong.jpg?auto=format&fit=crop&w=1000&q=80"
          alt="An toàn giao thông"
          className="rounded-xl shadow mb-4"
        />

        <p className="mb-4 text-gray-700">
          An toàn luôn là ưu tiên hàng đầu của GoTicket Poly. Tất cả các phương
          tiện đều được <span className="font-medium">kiểm định định kỳ</span>,{" "}
          <span className="font-medium">bảo trì chuẩn quy trình</span>, và được
          trang bị{" "}
          <span className="font-medium">
            camera hành trình, cảm biến an toàn, hệ thống định vị GPS
          </span>{" "}
          để giám sát xuyên suốt hành trình.
        </p>

        <p className="mb-6 text-gray-700">
          Đội ngũ tài xế của GoTicket Poly được{" "}
          <span className="font-medium">đào tạo bài bản</span> về kỹ năng lái xe
          an toàn, xử lý tình huống và chăm sóc khách hàng, mang đến cho hành
          khách những chuyến đi{" "}
          <span className="font-semibold text-green-700">
            an tâm, êm ái và đúng giờ
          </span>
          .
        </p>

        <h2 className="text-xl font-semibold mb-2 flex items-center">
          🌱 <span className="ml-2">Hướng đến tương lai bền vững</span>
        </h2>

        <img
          src="https://images.unsplash.com/photo-1603398938378-e54f7d3b1e70?auto=format&fit=crop&w=1000&q=80"
          alt="Vận tải xanh bền vững"
          className="rounded-xl shadow mb-6"
        />

        <p className="mb-6 text-gray-700">
          Không chỉ chú trọng đến chất lượng dịch vụ, GoTicket còn hướng tới
          phát triển{" "}
          <span className="font-medium">vận tải xanh – bền vững</span>, từng
          bước đưa vào sử dụng các dòng xe tiết kiệm nhiên liệu và thân thiện
          với môi trường.
        </p>

        <div className="border-t border-gray-200 pt-6 mt-6 text-center">
          <p className="text-lg font-semibold text-green-700 mb-3">
            GoTicket Poly – Công nghệ tiên phong, an toàn vững bước, kết nối mọi
            hành trình!
          </p>
        </div>
      </div>

      {/* GIÁ TRỊ CỐT LÕI & TẦM NHÌN */}
      <div className="max-w-4xl mx-auto p-8 mt-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4 uppercase">
          Tầm nhìn – Sứ mệnh – Giá trị cốt lõi
        </h2>

        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1000&q=80"
          alt="Tầm nhìn và giá trị cốt lõi"
          className="rounded-xl shadow mb-6"
        />

        <p className="text-gray-700 mb-4">
          Từ những ngày đầu thành lập,{" "}
          <span className="font-semibold text-green-700">GoTicket Poly</span> đã
          định hướng trở thành
          <span className="font-medium">
            {" "}
            thương hiệu vận tải hành khách hàng đầu Việt Nam
          </span>{" "}
          – nơi khách hàng không chỉ di chuyển, mà còn được tận hưởng trải
          nghiệm an toàn, tiện nghi và trọn vẹn trên mỗi hành trình.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          🎯 Tầm nhìn
        </h3>
        <p className="text-gray-700 mb-4">
          Trở thành đơn vị tiên phong trong chuyển đổi số ngành vận tải hành
          khách, ứng dụng công nghệ hiện đại để mang đến
          <span className="font-medium">
            {" "}
            giải pháp di chuyển thông minh, an toàn và thân thiện với môi trường
          </span>
          .
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          💡 Sứ mệnh
        </h3>
        <p className="text-gray-700 mb-4">
          GoTicket cam kết{" "}
          <span className="font-medium">
            “Kết nối hành trình – Nâng tầm trải nghiệm”
          </span>
          , không ngừng đổi mới công nghệ, nâng cao chất lượng dịch vụ và đặt sự
          hài lòng của khách hàng làm trung tâm của mọi hoạt động.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          ❤️ Giá trị cốt lõi
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <span className="font-semibold text-green-700">Uy tín:</span> Cam
            kết chất lượng dịch vụ và minh bạch trong mọi hoạt động.
          </li>
          <li>
            <span className="font-semibold text-green-700">An toàn:</span> Đặt
            con người làm trung tâm, đảm bảo an toàn tuyệt đối trên từng chuyến
            xe.
          </li>
          <li>
            <span className="font-semibold text-green-700">Đổi mới:</span> Không
            ngừng ứng dụng công nghệ và sáng tạo để phục vụ khách hàng tốt hơn
            mỗi ngày.
          </li>
          <li>
            <span className="font-semibold text-green-700">Tận tâm:</span> Mỗi
            nhân viên GoTicket Poly đều là người đồng hành đáng tin cậy trên mọi
            hành trình.
          </li>
          <li>
            <span className="font-semibold text-green-700">
              Phát triển bền vững:
            </span>{" "}
            Hướng đến hệ sinh thái vận tải xanh, thân thiện với môi trường.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          🚀 Định hướng phát triển
        </h3>
        <p className="text-gray-700 mb-4">
          Trong thời gian tới, GoTicket Poly sẽ mở rộng mạng lưới tuyến xe khắp
          các tỉnh thành, đa dạng hóa dịch vụ vận tải (xe giường nằm cao cấp, xe
          trung chuyển, xe hợp đồng doanh nghiệp) và phát triển hệ thống{" "}
          <span className="font-medium">GoTicket App</span> – ứng dụng di động
          thông minh giúp người dùng quản lý, đặt vé và đánh giá hành trình
          nhanh chóng.
        </p>
        <p className="text-gray-700 mb-6">
          Đồng thời, công ty tiếp tục đầu tư vào công nghệ dữ liệu lớn (Big
          Data), trí tuệ nhân tạo (AI) và Internet vạn vật (IoT) để tối ưu vận
          hành, nâng cao trải nghiệm và hướng tới{" "}
          <span className="font-semibold text-green-700">
            hệ thống vận tải hành khách hiện đại – an toàn – bền vững.
          </span>
        </p>

        <div className="pt-6 mt-6 text-center">
          <p className="text-lg font-semibold text-green-700 mb-2">
            GoTicket Poly – Hành trình kết nối niềm tin, vững bước tương lai!
          </p>
        </div>
      </div>

      {/* BÌNH LUẬN */}
      <section>
        <Comment />
      </section>
    </div>
  );
};

export default News;
