

/**
 * Reusable menu button
 */
import React from "react";

const IconButton = ({ label, icon, className="", width = 434, height = 83,  }) => (
  <button
    className={`flex items-center px-6 bg-whiteParchment text-black border-5 border-black  hover:bg-gray-100 transition font-[Pixel] gap-2 ${className}`}
    style={{
      width: `${width}px`,
      height: `${height}px`,
    }}
  >{label}
    {icon && (
      <div className="flex items-center gap-1">
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