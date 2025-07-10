import React from 'react';
import MenuPostIcon from '../assets/images/icons/menu_post_icon.svg';

const FeaturedPosts = ({ posts }) => {
  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-body text-secondaryText mb-6">
          Featured Posts:
        </h2>
        
        {/* Posts Flex */}
        <div className="flex flex-wrap justify-start items-stretch gap-4 pb-4 border-b border-borderGrey">
          {posts && posts.map((post, index) => (
            <div
              key={index}
              className="flex-1 min-w-[300px] max-w-[368px] bg-white rounded-2xl border border-borderGrey shadow-sm p-6 flex flex-col"
            >
              {/* Post Title with Icon */}
              <div className="mb-4 flex-1">
                <img 
                  src={MenuPostIcon} 
                  alt="" 
                  className="w-4 h-4 flex-shrink-0 inline"
                />
                <h3 className="text-body text-siteText font-normal ms-3 inline">
                  {post.title}
                </h3>
              </div>
              
              {/* Read Post Link */}
              <div className="mt-auto">
                <a 
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-body text-relinkd-blueMain font-normal border border-borderGrey rounded-[5px] btn-hover-lift"
                >
                  Read post
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts; 