import React from "react";
import { useState } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";
import Donation from './Donation';

export default function DonateButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Donate Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center  bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 mb-2 rounded-md shadow-md transition"
      >
         Donate <FaHeart  />
      </button>

      {/* Modal (Backdrop) */}
      {isOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-20">
          {/* Modal Content */}
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>

           

            {/* Empty Modal Body (You can add a form here) */}
            <Donation/>
          </div>
        </div>
      )}
    </>
  );
}
