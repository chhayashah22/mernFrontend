import React from "react";

export default function ProgressCircle() {

  
    return (
      <div className="flex flex-col items-center space-y-2">
        {/* Circular Progress with Bottom Hidden */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Dashed Circle */}
          <div className="absolute w-full h-full rounded-full border-4 border-dashed border-gray-400 mask-bottom"></div>
  
          {/* Goal Achieved */}
          <div className="text-center ">
            <p className="text-red-500 font-semibold">Goal Achieved</p>
            <p className="text-black text-lg font-bold">10</p>
          </div>
        </div>
  
        {/* Total Goal */}
        <div className="text-center  bg-white px-2 relative bottom-10">
          <p className="text-red-500 font-semibold">Total Goal</p>
          <p className="text-black text-lg font-bold">₹30,000</p>
        </div>
      </div>
    );
  }
  