import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import AuthHero from "../components/AuthHero";
import AuthForm from "../components/AuthForm";

export default function Auth() {
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (tab === "register") {
        await api.post("/auth/register", form);
        const res = await api.post("/auth/login", {
          email: form.email,
          password: form.password,
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/home");
      } else {
        const res = await api.post("/auth/login", form);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/home");
      }
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <AuthHero />
        <AuthForm
          tab={tab}
          setTab={setTab}
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
        />
      </div>
    </div>
  );
}
