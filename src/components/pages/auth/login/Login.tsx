import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiX } from 'react-icons/bi';

import { axiosPublic } from '../../../../pages/api/axios';
import { useGetUser } from '../../../../utils/hooks/useGetUser';
import { Toast } from '../../../shared/toast';

interface ErrorResponse {
  msg: string;
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState<ErrorResponse[]>([]);
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSuccess = (response) => {
    setSuccess(true);
    setSuccessMsg('Login Successful !');
    window.localStorage.setItem('user', JSON.stringify(response.data.user));
    window.localStorage.setItem('jwt', JSON.stringify(response.data.token));

    router.push('/account');
  };
  const { user } = useGetUser();

  const handleResetPassword = async () => {
    setError(false);
    setSuccess(false);
    setErrorMsgs([]);

    try {
      const response = await axiosPublic.post('/auth/forgot', {
        email: resetEmail,
      });
      if (response.status === 200) {
        setSuccess(true);
        setSuccessMsg('Email sent !');
        setOpenModal(false);
      }
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (err.response && err.response.status === 404) {
        setError(true);
        setErrorMsgs([{ msg: 'Email not found' }]);
      } else {
        console.log(err);
      }
    }
  };
  const login = async () => {
    setError(false);
    setSuccess(false);
    setErrorMsgs([]);

    try {
      const response = await axiosPublic.post('/auth', {
        email,
        password,
      });

      handleSuccess(response);
    } catch (err) {
      setError(true);
      setErrorMsgs([{ msg: 'Please enter a valid email & Password' }]);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (err.response && err.response.status === 404) {
        setError(true);
        setErrorMsgs([{ msg: 'Please enter a valid email & Password' }]);
      } else {
        console.log(err);
        setError(true);
        setErrorMsgs([{ msg: 'Please enter a valid email & Password' }]);
      }
    }
  };

  return (
    <div className="mx-20 w-full">
      <Toast
        success={success}
        errorMsgs={errorMsgs}
        error={error}
        text={successMsg}
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
        className="my-20 block cursor-pointer rounded-full bg-gray-500 px-24 py-8 font-semibold"
      >
        Login
      </button>

      <Dialog.Root open={openModal}>
        <Dialog.Trigger asChild onClick={() => setOpenModal(true)}>
          <p className="w-[150px] cursor-pointer">Forgot password</p>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            onClick={() => setOpenModal(false)}
            className="fixed inset-0 top-[-10px] z-[999] bg-dark-500 opacity-90 data-[state=open]:animate-overlayShow"
          />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[1000] max-h-[85vh] w-[20vw] max-w-[1200px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="m-0 text-[17px] font-medium text-blue-500">
              Reset Password
            </Dialog.Title>
            <div className="flex flex-col gap-[20px] py-32">
              <input
                value={resetEmail}
                onChange={(e) => setResetEmail(e.currentTarget.value)}
                className="w-full rounded-full border-[1px] border-gray-500 px-24 py-8  outline-0"
                type="email"
                placeholder="Your email"
              />

              <button
                onClick={handleResetPassword}
                type="button"
                className="rounded-full bg-yellow-500 px-24 py-8 text-center text-dark-500"
              >
                Send
              </button>
            </div>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild />
            </div>
            <Dialog.Close asChild onClick={() => setOpenModal(false)}>
              <button
                type="button"
                className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <BiX />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
