// import { } from "react-router-dom";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'dotenv/config'
import Razorpay from 'razorpay';


export default function Donate() {
    

  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
        setLoading(true);

      // Get token from localStorage
const token = localStorage.getItem("token");

// Step 1: Create an order on the backend
const { data } = await axios.post("/api/payment/get-payment", 
    { amount }, 
    {
        headers: {
            Authorization: `Bearer ${token}` // Use token from localStorage
        }
    }
);
        
        console.log("Order Created:", data); // Print order data in console

        if (!data.success) {
            throw new Error("Failed to create Razorpay order");
        }

        // Step 2: Initialize Razorpay
        const options = {
            key: import.meta.env.REACT_APP_RAZORPAY_KEY, // Use your Razorpay key
            amount: data.amount,
            currency: data.currency,
            name: "Non Profit Organization",
            description: "Payment for services",
            order_id: data.orderId,
            handler: async function (response) {
                console.log("Payment Successful:", response);
                await handlePaymentVerify({
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                    amount: data.amount, // ✅ Pass amount correctly
                });
            },
            prefill: {
                name: "NGO",
                email: "NGO@gmail.com",
                contact: "9999999999",
            },
            theme: {
                color: "#3399cc",
            },
        };
        
        if (window.innerWidth < 768) {
            options.redirect = true;
        }
        
        const razor = new window.Razorpay(options);
        razor.open();
        

    } catch (error) {
        toast.error("Payment Failed Due to session Timed Out Please Login again")
        console.error("Payment Error:", error);
    
    } finally {
        setLoading(false);
    }
};

const handlePaymentVerify = async (response) => {
    console.log("Verifying Payment:", response);

    const verificationData = {
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        amount: response.amount, // ✅ Include amount
    };

    try {
        const token = localStorage.getItem("token");
        const res = await axios.post("/api/payment-verify/verify", verificationData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (res.data.success) {
           toast.success("Payment Successful!", {
              position: "top-right",
              autoClose: 2000,
            });
        } else {
              toast.error("Payment verification failed! ", { position: "top-right" });
        
        }

        console.log("Verification Response:", res.data);
    } catch (error) {
        console.error("Verification Error:", error);
        toast.error("Something went wrong during verification", { position: "top-right" });
   
    }
};

  return (
    <>
    <ToastContainer/>
    <div className="p-6">
      <h2 className="text-lg">Donate to the Campaign</h2>
      <p>Referred by: <span className="text-orange-500">Pr123</span></p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border  border-orange-200  focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button 
        onClick={handlePayment} 
        disabled={loading} 
        className="bg-orange-500 text-white p-2 m-1 rounded-md"
      >
        {loading ? "Processing..." : "Donate"}
      </button>
    </div>
    </>
  );
}
