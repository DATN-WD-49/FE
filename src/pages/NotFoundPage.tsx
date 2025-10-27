import { Button } from "antd";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      <h1 className="text-5xl font-bold text-red-800 mb-4">404 - Not Found</h1>
      <p className="text-gray-600 mb-2">Trang bạn tìm kiếm không tồn tại.</p>
      <Button
        type="primary"
        style={{ background: "#0c7d41", height: 40, borderRadius: 8 }}
        onClick={() => nav("/", { replace: true })}
        className="px-6 py-5 text-base rounded-lg shadow-md"
      >
        Quay về trang chủ
      </Button>
    </div>
  );
};

export default NotFoundPage;
