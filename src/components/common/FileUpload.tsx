import React, { useRef, useState } from 'react';

interface FileUploadProps {
  label: string;
  name: string;
  onChange: (file: File | null) => void;
  accept?: string;
  required?: boolean;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  onChange,
  accept = 'image/*',
  required = false,
  error
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || '');
    onChange(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-3">
        <input
          ref={fileInputRef}
          type="file"
          name={name}
          onChange={handleFileChange}
          accept={accept}
          required={required}
          className="hidden"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Choose File
        </button>
        <span className="text-sm text-gray-600">
          {fileName || 'No file chosen'}
        </span>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;