const RoadSection = () => {
  return (
    <div>
      <div className="antialiased">
        <section className="bg-trong-dong py-16">
          <div className="container mx-6 xl:mx-auto max-w-7xl ">
            {/* <!-- Tiêu đề --> */}
            <div className="text-center mb-12">
              <h2 className="text-green-800 text-4xl md:text-5xl font-extrabold mb-4">
                NHỮNG CUNG ĐƯỜNG
              </h2>
              <p className="text-black text-lg leading-relaxed">
                Đa dạng các dòng xe giường nằm cao cấp: Vip 21 giường, 32
                giường, 34 giường và 38 giường.
                <br />
                Với gần 80 chuyến/1 ngày. Hoạt động tuyến:
                <br />
                Đà Nẵng – Kỳ Anh – Hà Tĩnh – Nghệ An – Hà Nội / Quảng Bình – Hà
                Tĩnh – Nghệ An – Hà Nội.
                <br />
                Xuất bến từ: Đà Nẵng, Quảng Bình, Kỳ Anh, TP Hà Tĩnh, Cửa Lò,
                Yên Nghĩa, Nước Ngầm.
              </p>
            </div>

            {/* <!-- ✅ Hàng 1 --> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-1">
                <img
                  src="public/z7289849341293_3cd0616344ef25f715b6ce9a0a694bcb.jpg"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <ul className="text-gray-800 text-sm mb-2">
                    <li>Hà Nội</li>
                    <li>Nghệ An (Xe VIP: 21 chỗ)</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-lg">
                    460.000đ/vé
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-2">
                <img
                  src="public/z7289852173513_7be9ace5d814b85c6048edc460d857c8.jpg"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <ul className="text-gray-800 text-sm mb-2">
                    <li>Hà Nội</li>
                    <li>TP Hà Tĩnh (Xe VIP: 21 chỗ)</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-lg">
                    460.000đ/vé
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-3">
                <img
                  src="public/z7289852388583_d5ec43a94993ef735c2eb4f7cc6e0d45.jpg"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <ul className="text-gray-800 text-sm mb-2">
                    <li>Hà Nội</li>
                    <li>Nghệ An (Xe 38 chỗ)</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-lg">
                    300.000đ/vé
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-4">
                <img
                  src="public/z7289849341293_3cd0616344ef25f715b6ce9a0a694bcb.jpg"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <ul className="text-gray-800 text-sm mb-2">
                    <li>Hà Nội</li>
                    <li>TP Hà Tĩnh (Xe 38 chỗ)</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-lg">
                    300.000đ/vé
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- ✅ Hàng 2 (thêm mới) --> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-5">
                <img
                  src="public/z7289852173513_7be9ace5d814b85c6048edc460d857c8.jpg"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <ul className="text-gray-800 text-sm mb-2">
                    <li>Hà Nội</li>
                    <li>Nghệ An (Xe VIP: 21 chỗ)</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-lg">
                    460.000đ/vé
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-6">
                <img
                  src="public/z7289852201674_c88da3dc7ea099b964fdac30d9a81404.jpg"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <ul className="text-gray-800 text-sm mb-2">
                    <li>Hà Nội</li>
                    <li>TP Hà Tĩnh (Xe VIP: 21 chỗ)</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-lg">
                    460.000đ/vé
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-7">
                <img
                  src="public/z7289852388583_d5ec43a94993ef735c2eb4f7cc6e0d45.jpg"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <ul className="text-gray-800 text-sm mb-2">
                    <li>Hà Nội</li>
                    <li>Nghệ An (Xe 38 chỗ)</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-lg">
                    300.000đ/vé
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden fade-in delay-8">
                <img
                  src="public/z7289849341293_3cd0616344ef25f715b6ce9a0a694bcb.jpgg"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <ul className="text-gray-800 text-sm mb-2">
                    <li>Hà Nội</li>
                    <li>TP Hà Tĩnh (Xe 38 chỗ)</li>
                  </ul>
                  <p className="text-green-700 font-semibold text-lg">
                    300.000đ/vé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoadSection;
