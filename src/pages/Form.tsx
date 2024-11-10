import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: LucideIcon;
  required?: boolean;
  rightElement?: React.ReactNode;
}

export function FormInput({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = false,
  rightElement
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 block">{label}</label>
      <div className="relative">
        <Icon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          placeholder={placeholder}
          required={required}
        />
        {rightElement}
      </div>
    </div>
  );
}