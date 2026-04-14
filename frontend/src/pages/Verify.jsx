import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.post(
          'http://localhost:3000/user/verify',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          toast.success(res.data.message);
          setStatus('Email is Verified Successfully');

          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        {
          <div className="flex justify-center mb-4">
            <div className="bg-neutral-100 p-4 rounded-full">
              <svg
                className="w-10 h-10 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        }

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{status}</h2>
      </div>
    </div>
  );
};

export default Verify;
