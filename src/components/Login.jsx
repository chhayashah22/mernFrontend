import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api";
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // State for button loading  

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    console.log("Form Data:", formData);

    try {
      const response = await api.post("/api/login/user-login", formData);
      console.log(response);
      const { token, name: Username } = response.data;

      if (token && Username) {
        // Store in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("name", Username);
      }

      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid Credentials", { position: "top-right" });
      } else {
        toast.error("Something went wrong. Please try again later!", {
          position: "top-right",
        });
      }
    } finally {
      setLoading(false); // Stop loading after success/failure
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg bg-white rounded-lg overflow-hidden m-4">
          {/* Image Section */}
          <div className="flex flex-col md:block md:w-1/2">
            <img
              src="https://clipart-library.com/2023/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7887.jpg"
              alt="NGO"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Login
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-black-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-400 hover:bg-orange-600 text-white"
                }`}
                disabled={loading}
              >
                {loading ? "Processing..." : "Login"}
              </button>

              <p className="text-center text-black-600 mt-4">
                Don't have an account?{" "}
                <Link to="/register" className="text-orange-600 hover:underline">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
