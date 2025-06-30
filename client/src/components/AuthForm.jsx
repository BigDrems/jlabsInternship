import { useState } from "react";
import TextInput from "./TextInput";

export default function AuthForm({
  tab,
  setTab,
  form,
  handleChange,
  handleSubmit,
  error,
}) {
  return (
    <div className="w-full md:w-1/2 p-8">
      <div className="flex space-x-6 justify-center mb-8 border-b-2 border-gray-200">
        <button
          className={`pb-3 text-sm font-semibold tracking-wide uppercase transition duration-300 ease-in-out ${
            tab === "login"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => setTab("login")}
        >
          Already a member
        </button>
        <button
          className={`pb-3 text-sm font-semibold tracking-wide uppercase transition duration-300 ease-in-out ${
            tab === "register"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => setTab("register")}
        >
          I am new here
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {tab === "register" && (
          <TextInput
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <TextInput
          name="email"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        {tab === "login" && (
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 rounded"
              />
              <span>Remember me</span>
            </label>
            <a
              href="#"
              className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200 ease-in-out"
            >
              Forgot password?
            </a>
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md border border-red-200">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-md font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          {tab === "register" ? "Register" : "Login with email"}
        </button>
      </form>
    </div>
  );
}
