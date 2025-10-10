import { useNavigate } from "react-router";

export default function ForgetpassPage() {
  const nav = useNavigate();
  const handlePrev = () => {
    nav(-1);
  };
  return (
    <div className="flex items-center justify-end w-full ">
      <div className="rounded-md p-8 bg-white w-[70%] shadow-xl">
        <h2 className="text-cente font-medium text-2xl uppercase mb-4 text-green-700">
          Quên mật khẩu
        </h2>

        <form className="flex flex-col space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              <span className="text-red-500">*</span>Xác thực tài khoản
            </label>
            <input
              type="text"
              placeholder="Nhập số điện thoại đã đăng kí "
              className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center gap-3"></div>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 cursor-pointer rounded hover:bg-green-700 transition"
          >
            Tiếp tục
          </button>
          <button
            type="button"
            onClick={handlePrev}
            className="text-green-600 cursor-pointer font-semibold hover:underline flex items-center justify-center"
          >
            Quay về
          </button>
        </form>
      </div>
    </div>
  );
}
