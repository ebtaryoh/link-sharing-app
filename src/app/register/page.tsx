"use client";
import Image from "next/image";
import { useState } from "react";
import devlogo from "../../../public/devlinks.png";
import emaillogo from "../../../public/mail.svg";
import passwordlogo from "../../../public/lock.svg";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!email) {
      setEmailError("Can't be empty");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("At least 8 characters");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    } else {
      setConfirmPasswordError("");
    }

    if (hasError) return;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-row gap-3 mb-10">
        <Image src={devlogo} alt="devlinks" />
        <p className="font-bold text-2xl">devlinks</p>
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold mb-6 text-center">Create Account</h1>
          <p className="text-[#737373]">Fill in your details below to create a new account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="relative">
              <Image
                src={emaillogo}
                alt="email logo"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
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
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Create password
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
                placeholder="At least 8 characters"
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
          <div className="mb-6 relative">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <div className="relative">
              <Image
                src={passwordlogo}
                alt="password logo"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              />
              <input
                type="password"
                id="confirm-password"
                placeholder="At least 8 characters"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`mt-1 block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                  confirmPasswordError ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:border-indigo-500 sm:text-sm ${
                  confirmPasswordError ? "shadow-none" : "shadow-md"
                }`}
              />
            </div>
            {confirmPasswordError && (
              <p className="absolute right-3 bottom-1 transform -translate-y-1/2 text-xs text-red-500">
                {confirmPasswordError}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
          >
            Create new Account
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="text-indigo-600 hover:text-indigo-700 cursor-pointer"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
