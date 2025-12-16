import React from 'react';
import type { DropdownOption } from '../../types';

interface DropdownProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: DropdownOption[];
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  disabled = false,
  error
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all bg-white ${
          error
            ? 'border-red-500 focus:ring-red-200'
            : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Dropdown;