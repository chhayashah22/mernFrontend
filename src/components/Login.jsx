import { Link,useNavigate } from "react-router-dom";
import React , {useState}from "react";
import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "",});
  

  // SetData 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //onsubmit 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  
  try {
    const response = await axios.post('/api/login/user-login', formData);
    console.log(response);
    const { token } = response.data;  
    const Username= response.data.name;

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
  }
  catch (error) {
    if (error.response && error.response.status === 401) {
    toast.error("Invalid Credentials ", { position: "top-right" });
    } else {
      
      toast.error("Something went wrong ,Please try Again Later! ", { position: "top-right" });
    }
  
   }
  }

  return (
    <>
    <ToastContainer/>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg bg-white rounded-lg overflow-hidden">
      <div className="flex md:block md:w-1/2">
          <img 
            src="https://clipart-library.com/2023/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7887.jpg" 
            alt="NGO" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Login</h2>
          

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black-700 font-medium">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border  border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" 
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
                className="w-full p-3 border  border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" 
              />
            </div>

            <button  type="submit"  className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-600 transition"
            >Login </button>

            <p className="text-center text-black-600 mt-4">
              Don't have an account? <Link to="/register" className="text-orange-600 hover:underline">Register</Link>
            </p>
          </form>
        </div>

         </div>
    </div>
    </>
  );
}
