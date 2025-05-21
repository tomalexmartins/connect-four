

/**
 * Reusable menu button
 */
import React from "react";

const IconButton = ({ label, icon, className="", width = 434, height = 83, onClick }) => (
  <button onClick={onClick}
    className={`flex items-center px-6 bg-whiteParchment text-black border-5 border-black  cursor-pointer hover:opacity-50 transition-opacity duration-200 font-[Pixel] gap-2 ${className}`}
    style={{
      width: `${width}px`,
      height: `${height}px`,
    }}
  ><span className="whitespace-nowrap overflow-hidden text-ellipsis ">{label}</span>
    {icon && (
      <div className="flex items-center ">
        {icon.includes( "ic_user.svg" )? (
          <>
            <img src={icon} alt="icon" />
            <img src={icon} alt="icon" />
          </>
        ) : (
          <img src={icon} alt="icon" />
        )}
      </div>
    )}
  </button>
);

export default IconButton;