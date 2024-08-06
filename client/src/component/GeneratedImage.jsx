// components/GeneratedImage.js
import React from 'react';

const GeneratedImage = ({ imageUrl, onDownload }) => {
    return (
        <div className='px-10 py-8'>
            <h2 className='text-2xl font-bold text-blue-600'>Generated OG Image:</h2>
            <img src={imageUrl} alt="Generated OG" />
            <div className='flex justify-center mt-4'>
                <button 
                    onClick={onDownload} 
                    className='py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700'>
                    Download Image
                </button>
            </div>
            <meta property="og:image" content={imageUrl} />
        </div>
    );
};

export default GeneratedImage;