// components/SubmitButton.js
import React from 'react';

const SubmitButton = ({ isOn, onClick }) => {
    return (
        <button 
            type="submit" 
            onClick={onClick}
            className={`w-2/3 flex justify-center py-3 px-4 border rounded-md shadow-sm text-sm font-medium text-white ${isOn ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-red-400 cursor-not-allowed'}`}
            disabled={!isOn}
        >
            {isOn ? 'Generate OG Image' : 'Kindly fill in the required fields'}
        </button>
    );
};

export default SubmitButton;