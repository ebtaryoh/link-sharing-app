"use client";
import Image from "next/image";
import { useState } from "react";
import devlogo from "../../../public/devlinks.png";
import emaillogo from "../../../public/mail.svg";
import passwordlogo from "../../../public/lock.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!email) {
      setEmailError("Can't be empty");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please check again");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) return;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Login successful");
        localStorage.setItem("token", result.token); 
      } else {
        setErrorMessage(result.error || "Login failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row gap-3 mb-10">
        <Image src={devlogo} alt="devlinks" />
        <p className="font-bold text-2xl">devlinks</p>
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold mb-6">Login</h1>
          <p className="text-[#737373]">Add your details below to get back into the app</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="relative">
              <Image
                src={emaillogo}
                alt="email logo"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#737373]"
              />
              <input
                type="email"
                id="email"
                placeholder="e.g. alex@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                  emailError ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:border-indigo-500 sm:text-sm ${
                  emailError ? "shadow-none" : "shadow-md"
                }`}
              />
            </div>
            {emailError && (
              <p className="absolute right-3 bottom-1 transform -translate-y-1/2 text-xs text-red-500">
                {emailError}
              </p>
            )}
          </div>
          {/* Password */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Image
                src={passwordlogo}
                alt="password logo"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:border-indigo-500 sm:text-sm ${
                  passwordError ? "shadow-none" : "shadow-md"
                }`}
              />
            </div>
            {passwordError && (
              <p className="absolute right-3 bottom-1 transform -translate-y-1/2 text-xs text-red-500">
                {passwordError}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
          >
            Login
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Dont have an account?{" "}
            <a
              href="/register"
              className="text-indigo-600 hover:text-indigo-700 cursor-pointer"
            >
              Create account
            </a>
          </p>
          {/* Error Messages */}
          {errorMessage && <p className="text-center text-red-500 mt-4">{errorMessage}</p>}
          {successMessage && <p className="text-center text-green-500 mt-4">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
}


// 2CinWaWosZicEu44