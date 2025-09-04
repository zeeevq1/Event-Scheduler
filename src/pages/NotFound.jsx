import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
    