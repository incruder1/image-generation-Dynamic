// components/TextInput.js
import React from 'react';

const TextInput = ({ label, value, onChange, error }) => {
    return (
        <div>
            <label className='text-base font-bold'>{label}<span className='text-red-600'>*</span></label>
            <input
                className='bg-gray-200 text-gray-900 mt-1 block w-full'
                type="text"
                placeholder={label}
                value={value}
                onChange={onChange}
                required
            />
            {error && <p className='text-red-600'>{error}</p>}
        </div>
    );
};

export default TextInput;