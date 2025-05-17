

/**
 * Reusable menu button
 */
import React from "react";

const IconButton = ({ label, className="", width = 434, height = 83 }) => (
  <button
    className={`flex items-center px-6 bg-white text-black border-3 border-black rounded-2xl hover:bg-gray-100 transition font-[Pixelilfy-sans] font-bold ${className}`}
    style={{
      width: `${width}px`,
      height: `${height}px`,
    }}
  >
    
    {label}
  </button>
);

export default IconButton;
