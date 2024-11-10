import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, Lock, Mail } from 'lucide-react';
import { FormInput } from './Form';
import { AuthButton } from './AuthButton';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <>
      <div className="text-center">
        <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform hover:scale-110">
          <LogIn className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-gray-500">Sign in to continue your journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          icon={Mail}
          required
        />

        <FormInput
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          icon={Lock}
          required
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          }
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Forgot password?
          </a>
        </div>

        <AuthButton isLoading={isLoading}>Sign In</AuthButton>
      </form>
    </>
  );
}