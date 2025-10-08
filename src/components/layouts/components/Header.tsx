import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-[1280px] mx-6  xl:mx-auto flex justify-between items-center">
        <div className="my-4">
          <img
            className="w-48"
            src="https://gotickets.events/wp-content/uploads/2022/12/logo-gotickets.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="bg-[#0c7d41] font-medium py-3 px-6 uppercase rounded-full text-white"
          >
            Đặt vé ngay
          </a>
          <Link
            className="bg-[#0c7d41] font-medium py-3 px-6 uppercase rounded-full text-white"
            to={"/login"}
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
