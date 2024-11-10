import React, { useState } from 'react';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import { FormInput } from './Form';
import { AuthButton } from './AuthButton';

export function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          <UserPlus className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
        <p className="text-gray-500">Join us on your journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          icon={User}
          required
        />

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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Choose a strong password"
          icon={Lock}
          required
        />

        <div className="text-sm text-gray-500">
          By signing up, you agree to our{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-800">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-800">
            Privacy Policy
          </a>
        </div>

        <AuthButton isLoading={isLoading}>Create Account</AuthButton>
      </form>
    </>
  );
}