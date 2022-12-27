import React from "react";

function Preload() {
  return <div className="w-full h-screen bg-[#0000001c] fixed flex justify-center items-center z-50 backdrop-blur-sm">
    <div className="w-[100px] py-5 flex flex-col items-center justify-center">
      <div className="w-8 h-8 border border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm font-medium animate-pulse text-gray-900 mt-2">Loading...</p>
    </div>
  </div>;
}

export default Preload;
