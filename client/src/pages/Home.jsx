import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="backdrop-blur-md bg-white/30 border border-white/10 shadow-lg p-8 rounded-xl text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold text-gray-200 mb-4">Welcome</h1>
        <h1 className="text-5xl font-extrabold text-gray-200">{user?.name}!</h1>
        <p className="text-2xl text-white mb-8 font-light mt-10">
          {user?.email}
        </p>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          className="px-8 py-4 bg-gray-700 text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 transform hover:-translate-y-1"
        >
          Logout
        </button>
        <p className="text-gray-400 mt-8 text-lg">© Jack Jonel Fiel</p>
      </div>
    </div>
  );
}
