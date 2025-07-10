import React from 'react';

const LinkCard = ({ icon, title, description, linkText, linkHref }) => {
  return (
    <div className="w-full p-4 md:p-6 bg-white rounded-2xl shadow border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* Left side - Icon and Content */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-1">
          {/* Icon */}
          <div className="flex-shrink-0 w-[80px] h-[80px] md:w-[130px] md:h-[130px] bg-red-50 rounded-2xl flex items-center justify-center">
            <img 
              src={icon} 
              alt="" 
              className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0 text-left">
            <h3 className="text-body font-bold text-[#4b4b4b] mb-2 md:mb-3">
              {title}
            </h3>
            <p className="text-body font-normal text-secondaryText">
              {description}
            </p>
          </div>
        </div>
        
        {/* Border - only on desktop */}
        <div className="hidden md:block w-px h-[140px] bg-borderGrey"></div>
        
        {/* Right side - Link */}
        <div className="flex items-center justify-start md:justify-center md:w-[192px] md:h-full pt-2 md:pt-0">
          {linkText && linkHref && (
            <a 
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-body text-relinkd-blueMain font-normal transition grayscale-hover"
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkCard; 