import React from 'react';

interface AuthButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export function AuthButton({ isLoading, children }: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {isLoading ? (
        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}