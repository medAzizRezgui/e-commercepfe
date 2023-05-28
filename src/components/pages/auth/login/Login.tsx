import { useRouter } from 'next/router';
import React, { useState } from 'react';

import axiosProduction from '../../../../pages/api/axios';
import { Toast } from '../../../shared/toast';

interface ErrorResponse {
  msg: string;
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState<ErrorResponse[]>([]);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSuccess = (response) => {
    setSuccess(true);
    window.localStorage.setItem('user', JSON.stringify(response.data.user));
    router.push('/account');
  };

  const login = async () => {
    setError(false);
    setSuccess(false);
    setErrorMsgs([]);

    try {
      const response = await axiosProduction.post('/auth', {
        email,
        password,
      });

      handleSuccess(response);
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (err.response && err.response.status === 400) {
        setError(true);
        setErrorMsgs([{ msg: 'Please enter a valid email & Password' }]);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="mx-20 w-full">
      <Toast
        success={success}
        errorMsgs={errorMsgs}
        error={error}
        text="Login Successful!"
      />
      <h1 className="pb-14 text-display-xs">Login</h1>
      <span className="relative block h-[2px] w-full bg-gray-500">
        <span className="absolute left-0 h-[2px] w-[20%] bg-yellow-500 " />
      </span>
      <p className="py-32 text-text-sm text-gray-400">
        Welcome back! Sign in to your account.
      </p>

      <div className="pb-14">
        <p className="py-8 font-semibold text-dark-500">Email address *</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className="w-full rounded-full border-[1px] border-gray-500 px-24 py-8  outline-0"
        />
      </div>
      <div>
        <p className="py-8 font-semibold text-dark-500">Password *</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          className="w-full rounded-full border-[1px] border-gray-500 px-24 py-8  outline-0"
        />
      </div>
      <button
        type="button"
        onClick={login}
        className="my-20 block rounded-full bg-gray-500 px-24 py-8 font-semibold"
      >
        Login
      </button>
    </div>
  );
};
