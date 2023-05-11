import axios from 'axios';
import React, { useState } from 'react';

import { Toast } from '../../../shared/toast';

export const Register = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);
  const register = async () => {
    await axios
      .post('http://localhost:5000/auth/register', {
        email: newEmail,
        fullName,
        password: newPassword,
      })
      .then(() => setSuccess(true))
      .catch((err) => {
        setError(true);
        setErrorMsgs(err.response.data.errors);
      });
  };

  return (
    <div className="w-full relative mx-20">
      {/* Toast */}
      <Toast
        success={success}
        errorMsgs={errorMsgs}
        error={error}
        text="Account Created !"
      />
      <h1 className="pb-14 text-display-xs">Register</h1>
      <span className="bg-gray-500 h-[2px] w-full relative block">
        <span className="bg-yellow-500 w-[20%] h-[2px] absolute left-0 " />
      </span>
      <p className="text-text-sm text-gray-400 py-32">
        Create new account today to reap the benefits of a personalized shopping
        experience.
      </p>
      <div className="pb-14">
        <p className="font-semibold text-dark-500 py-8">Full Name *</p>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.currentTarget.value)}
          type="text"
          className="w-full rounded-full border-[1px] px-24 py-8 outline-0  border-gray-500"
        />
      </div>
      <div className="pb-14">
        <p className="font-semibold text-dark-500 py-8">Email address *</p>
        <input
          value={newEmail}
          onChange={(e) => setNewEmail(e.currentTarget.value)}
          type="email"
          className="w-full rounded-full border-[1px] px-24 py-8 outline-0  border-gray-500"
        />
      </div>
      <div>
        <p className="font-semibold text-dark-500 py-8">Password *</p>
        <input
          value={newPassword}
          onChange={(e) => setNewPassword(e.currentTarget.value)}
          type="password"
          className="w-full rounded-full border-[1px] px-24 py-8 outline-0  border-gray-500"
        />
      </div>
      <p className="text-text-sm pt-14">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </p>
      <button
        type="button"
        onClick={() => register()}
        className="px-24 py-8 rounded-full bg-gray-500 block font-semibold my-20"
      >
        Register
      </button>
    </div>
  );
};
