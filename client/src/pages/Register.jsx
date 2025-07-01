import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { password } = form;

    // 🔒 Password validation rules
    const rules = [
      { regex: /.{8,}/, message: "Password must be at least 8 characters" },
      { regex: /[A-Z]/, message: "Include at least one uppercase letter" },
      { regex: /[a-z]/, message: "Include at least one lowercase letter" },
      { regex: /[0-9]/, message: "Include at least one number" },
      {
        regex: /[!@#$%^&*]/,
        message: "Include at least one special character (!@#$%^&*)",
      },
    ];

    for (const rule of rules) {
      if (!rule.regex.test(password)) {
        alert(rule.message);
        return;
      }
    }

    try {
      await api.post("/auth/register", form);
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="w-full mb-2 p-2 border"
        required
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        className="w-full mb-2 p-2 border"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full mb-2 p-2 border"
        required
      />

      <p className="text-xs text-gray-500 mb-2">
        Password must have at least 8 characters, 1 uppercase, 1 lowercase, 1
        number, and 1 special character.
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
