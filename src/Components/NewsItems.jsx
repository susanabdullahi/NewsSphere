import React from 'react';
import image from '../assets/newsimage.png'; 

const NewsItems = ({ title, description, url, src }) => {
  return (
    <div className='flex flex-col gap-3 p-5 bg-gray-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white'>
      <img 
        src={src?src:image} 
        alt="News Thumbnail" 
        className='w-full h-[200px] rounded-lg object-cover' 
      />
      <div>
        <h5 className='text-2xl font-semibold mb-1'>{title ? title.slice(0, 50) : "Title not available"}</h5>
        <p className='text-gray-200 mb-3 text-sm'>
          {description ? description.slice(0, 90) : "The news is not available"}
        </p>
        <a 
          href={url} 
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200'
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
