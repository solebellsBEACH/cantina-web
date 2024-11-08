import React from 'react'
interface LibInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


function Input({ label, placeholder, value, onChange }: LibInputProps) {
    return (
        <div className="mb-4">
            {label && <label className="block text-gray-700 font-bold mb-2">{label}</label>}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
        </div>
    );
}

export default Input;