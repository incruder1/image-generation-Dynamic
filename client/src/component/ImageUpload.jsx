// components/ImageUpload.js
import React from 'react';

const ImageUpload = ({ onChange }) => {
    return (
        <div>
            <label className='text-base font-bold'>Image</label>
            <input type="file" onChange={onChange} />
        </div>
    );
};

export default ImageUpload;