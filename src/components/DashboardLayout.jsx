import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  const [visible,setVisible]=useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen overflow-hidden ml-0 md:ml-80">
      {/* Sidebar */}
      <Sidebar visible={visible} setVisible={setVisible} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Navbar */}
        <Navbar visible={visible} setVisible={setVisible} />

        {/* Dynamic Content */}
        <div className="flex-1 p-4 bg-gray-100 overflow-hidden  mt-12 sm:mt-16 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
} 