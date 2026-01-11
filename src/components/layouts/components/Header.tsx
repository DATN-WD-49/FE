import { Link } from "react-router";
import AuthHeader from "./AuthHeader";

const Header = ({ isAuthPage = false }: { isAuthPage?: boolean }) => {
  return (
    <header className="bg-white">
      <div className="max-w-[1280px] mx-6  xl:mx-auto flex justify-between items-center">
        <div className="my-4">
          <Link to={"/"}>
            <img className="w-52" src="public/logo.jpg" alt="" />
          </Link>
        </div>
        {!isAuthPage && <AuthHeader />}
      </div>
    </header>
  );
};

export default Header;
