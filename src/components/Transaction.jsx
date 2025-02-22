import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User not authenticated.");
          setLoading(false);
          return;
        }

        const response = await axios.get("/api/get/get-transaction", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTransactions(response.data.transactions);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setError("Failed to load transactions session expired Please Login Again");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4 text-center md:text-left">Transactions</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && transactions.length === 0 && (
        <p className="text-center">No transactions found.</p>
      )}

      {!loading && !error && transactions.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm md:text-base">
                <th className="border border-gray-300 px-2 md:px-4 py-2">Transaction ID</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">Amount (₹)</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">Date & Time</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">User Email</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn._id} className="hover:bg-gray-100 text-xs md:text-base">
                  <td className="border border-gray-300 px-2 md:px-4 py-2 truncate">{txn._id}</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">₹{txn.amount}</td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {new Date(txn.date).toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2 truncate">{txn.useremail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
