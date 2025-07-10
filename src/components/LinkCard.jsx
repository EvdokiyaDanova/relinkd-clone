import React from 'react';

const LinkCard = ({ icon, title, description, linkText, linkHref }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow border border-gray-100">
      <div className="flex items-center gap-6">
        {/* Left side - Icon and Content */}
        <div className="flex items-start gap-6 flex-1">
          {/* Icon */}
          <div className="flex-shrink-0 w-[130px] h-[130px] bg-red-50 rounded-2xl flex items-center justify-center">
            <img 
              src={icon} 
              alt="" 
              className="w-[130px] h-[130px] object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-body font-bold text-[#4b4b4b] mb-3">
              {title}
            </h3>
            <p className="text-body font-normal text-secondaryText">
              {description}
            </p>
          </div>
        </div>
        
        {/* Border */}
        <div className="w-px h-[140px] bg-borderGrey"></div>
        
        {/* Right side - Link */}
        <div className="flex items-center justify-center w-[192px] h-full">
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