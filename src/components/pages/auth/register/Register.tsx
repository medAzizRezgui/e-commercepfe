import { useRouter } from 'next/router';
import React, { useState } from 'react';

import axiosProduction from '../../../../pages/api/axios';
import { Toast } from '../../../shared/toast';

export const Register = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);
  const router = useRouter();
  const register = async () => {
    await axiosProduction
      .post('/auth/register', {
        email: newEmail,
        fullName,
        password: newPassword,
      })
      .then(() => setSuccess(true))
      .then(() => router.push('/account'))
      .catch((err) => {
        setError(true);
        setErrorMsgs(err.response.data.errors);
      });
  };

  return (
    <div className="relative mx-20 w-full">
      {/* Toast */}
      <Toast
        success={success}
        errorMsgs={errorMsgs}
        error={error}
        text="Account Created !"
      />
      <h1 className="pb-14 text-display-xs">Register</h1>
      <span className="relative block h-[2px] w-full bg-gray-500">
        <span className="absolute left-0 h-[2px] w-[20%] bg-yellow-500 " />
      </span>
      <p className="py-32 text-text-sm text-gray-400">
        Create new account today to reap the benefits of a personalized shopping
        experience.
      </p>
      <div className="pb-14">
        <p className="py-8 font-semibold text-dark-500">Full Name *</p>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.currentTarget.value)}
          type="text"
          className="w-full rounded-full border-[1px] border-gray-500 px-24 py-8  outline-0"
        />
      </div>
      <div className="pb-14">
        <p className="py-8 font-semibold text-dark-500">Email address *</p>
        <input
          value={newEmail}
          onChange={(e) => setNewEmail(e.currentTarget.value)}
          type="email"
          className="w-full rounded-full border-[1px] border-gray-500 px-24 py-8  outline-0"
        />
      </div>
      <div>
        <p className="py-8 font-semibold text-dark-500">Password *</p>
        <input
          value={newPassword}
          onChange={(e) => setNewPassword(e.currentTarget.value)}
          type="password"
          className="w-full rounded-full border-[1px] border-gray-500 px-24 py-8  outline-0"
        />
      </div>
      <p className="pt-14 text-text-sm">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </p>
      <button
        type="button"
        onClick={() => register()}
        className="my-20 block rounded-full bg-gray-500 px-24 py-8 font-semibold"
      >
        Register
      </button>
    </div>
  );
};
