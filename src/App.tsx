import React, { useState } from 'react';
import { AuthLayout } from './pages/AuthLayout';
import { SignInForm } from './pages/SignIn';
import { SignUpForm } from './pages/SignUp';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <AuthLayout>
      {isSignIn ? <SignInForm /> : <SignUpForm />}
      
      <div className="text-center">
        <p className="text-gray-600">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}

export default App;