import React, { useState } from "react";
import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  
  try {
    const response = await axios.post('/api/users/register', formData);
    console.log(response);
  
   toast.success("Registration Successful!", {
    position: "top-right",
    autoClose: 3000,
  });
  
  }
  catch (error) {
    if (error.response && error.response.status === 400) {
      // User already exists
      toast.error("User already exists! ", { position: "top-right" });
    } else {
      // Other errors
      toast.error("Something went wrong! ", { position: "top-right" });
    }
  
   }
  }

  

  return (
    <>
   <ToastContainer className='z-[2]'/> 
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex md:block">
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/919/708/original/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-vector.jpg"
            alt="NGO"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-2xl font-bold text-black-700 text-center mb-6">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-black-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block text-black-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-orange-200  rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block text-black-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-orange-200  rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 font-bold text-white py-2 rounded-md hover:bg-orange-500 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="text-center text-black-600 mt-4">
            Already have an account? <Link to="/login" className="text-orange-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
