import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router";

export default function RegisterPage() {
  const [hiddenPass, setHiddenPass] = useState(true);
  const [hiddenConfirmPass, setHiddenConfirmPass] = useState(true);
  return (
    <div className="flex items-center justify-end w-full ">
      <div className="rounded-md p-8 bg-white w-[70%] shadow-xl">
        <h2 className="text-cente font-medium text-2xl uppercase mb-4 text-green-700">
          Đăng ký
        </h2>

        <form action="#" method="POST" className="flex flex-col space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <span className="text-red-500">*</span> Họ và tên
            </label>
            <input
              type="text"
              placeholder="Họ và tên"
              className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <span className="text-red-500">*</span> Địa chỉ email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <span className="text-red-500">*</span> Số điện thoại
            </label>
            <input
              type="text"
              placeholder="Số điện thoại"
              className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <span className="text-red-500">*</span> Mật khẩu
            </label>
            <div className="relative ">
              <input
                type={`${hiddenPass ? "password" : "text"}`}
                placeholder="Mật khẩu"
                className="border border-gray-300 w-full rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setHiddenPass(!hiddenPass)}
                className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer"
              >
                {hiddenPass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <span className="text-red-500">*</span> Xác nhận mật khẩu
            </label>
            <div className="relative ">
              <input
                type={`${hiddenConfirmPass ? "password" : "text"}`}
                placeholder="Xác nhận mật khẩu"
                className="border border-gray-300 w-full rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setHiddenConfirmPass(!hiddenConfirmPass)}
                className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer"
              >
                {hiddenConfirmPass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 cursor-pointer rounded hover:bg-green-700 transition"
          >
            Đăng ký
          </button>
        </form>
        <div>
          <p className="text-gray-500 my-4 text-center">Hoặc</p>
          <button className="hover:border-green-600 hover:text-green-600 flex items-center justify-center gap-3 border w-full py-2 rounded-md cursor-pointer">
            <img
              src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
              className="w-6"
              alt=""
            />
            Đăng nhập với Google
          </button>
        </div>

        <div className="text-center mt-4 text-sm">
          <p>
            <span className="font-semibold">Bạn đã có tài khoản?</span>{" "}
            <Link
              to="/auth/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Đăng nhập
            </Link>
          </p>
          <Link
            to="/auth/forgetpass"
            className="text-green-600 hover:underline mt-2 inline-block"
          >
            Quên mật khẩu?
          </Link>
        </div>
      </div>
    </div>
  );
}
