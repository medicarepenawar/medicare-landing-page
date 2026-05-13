import React from 'react';
import PhoneInputWithCountry from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type PhoneValue = string | undefined;

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
    value,
    onChange,
    placeholder = 'Enter phone number',
    required = false,
    className = '',
}) => {
    const handleChange = (newValue: PhoneValue) => {
        onChange(newValue || '');
    };

    return (
        <PhoneInputWithCountry
            defaultCountry="MY"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            className={`phone-input-container ${className}`}
        />
    );
};
export { formatPhoneForAPI, parsePhoneFromAPI } from '../../utils/phoneValidation';

export default PhoneInput;
