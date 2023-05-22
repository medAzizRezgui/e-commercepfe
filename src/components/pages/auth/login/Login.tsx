import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Toast } from '../../../shared/toast';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState();
  const router = useRouter();
  const handleSuccess = (user) => {
    setSuccess(true);
    window.localStorage.setItem('user', JSON.stringify(user.data.user));
    router.push('/account');
  };
  const login = async () => {
    const arr = [];
    await axios
      .post('http://localhost:5000/auth', {
        email,
        password,
      })
      .then((r) => handleSuccess(r))
      .catch((err) => {
        setError(true);
        console.log(err);
        arr.push({ msg: err.response.data });
        setErrorMsgs(arr);
      });
  };
  return (
    <div className="w-full mx-20">
      <Toast
        success={success}
        errorMsgs={errorMsgs}
        error={error}
        text="Login Successful !"
      />
      <h1 className="pb-14 text-display-xs">Login</h1>
      <span className="bg-gray-500 h-[2px] w-full relative block">
        <span className="bg-yellow-500 w-[20%] h-[2px] absolute left-0 " />
      </span>
      <p className="text-text-sm text-gray-400 py-32">
        Welcome back! Sign in to your account.
      </p>

      <div className="pb-14">
        <p className="font-semibold text-dark-500 py-8">Email address *</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className="w-full rounded-full border-[1px] px-24 py-8 outline-0  border-gray-500"
        />
      </div>
      <div>
        <p className="font-semibold text-dark-500 py-8">Password *</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          className="w-full rounded-full border-[1px] px-24 py-8 outline-0  border-gray-500"
        />
      </div>
      <button
        type="button"
        onClick={() => login()}
        className="px-24 py-8 rounded-full bg-gray-500 block font-semibold my-20"
      >
        Login
      </button>
    </div>
  );
};
