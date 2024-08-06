// components/TextArea.js
import React from 'react';

const TextArea = ({ label, value, onChange, error }) => {
    return (
        <div>
            <label className='text-base font-bold'>{label}<span className='text-red-600'>*</span></label>
            <textarea
                placeholder={label}
                className='bg-gray-200 text-gray-900 mt-1 block w-full h-40'
                value={value}
                onChange={onChange}
                required
            />
            {error && <p className='text-red-600'>{error}</p>}
        </div>
    );
};

export default TextArea;