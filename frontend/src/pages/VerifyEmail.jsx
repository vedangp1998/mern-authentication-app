import React from 'react';

const VerifyEmail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-brpx-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-neutral-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M16 12H8m0 0l4-4m-4 4l4 4" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Check Your Email 📩
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          We’ve sent you a verification link. Please check your email and click
          on the link to verify your account.
        </p>

        {/* Note */}
        <p className="text-sm text-gray-500 mb-6">
          Didn’t receive the email? Check your spam folder or try again.
        </p>

        {/* Button */}
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-neutral-700 transition"
        >
          Resend Email
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
