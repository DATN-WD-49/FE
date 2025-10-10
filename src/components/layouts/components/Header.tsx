import { Link } from "react-router";
import { scrollToSection } from "../../../common/utils";

const Header = ({ isAuthPage = false }: { isAuthPage?: boolean }) => {
  const handleBooking = () => scrollToSection("booking");

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
        {!isAuthPage && (
          <div className="flex items-center gap-3">
            <button
              onClick={handleBooking}
              className="bg-[#0c7d41] font-medium hover:opacity-85 duration-300 cursor-pointer py-3 px-6 uppercase rounded-full text-white"
            >
              Đặt vé ngay
            </button>
            <Link
              className="bg-[#0c7d41] font-medium hover:opacity-85 duration-300 py-3 px-6 uppercase rounded-full text-white"
              to={"/auth/login"}
            >
              Đăng nhập
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
