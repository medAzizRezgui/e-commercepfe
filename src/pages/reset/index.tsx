// eslint-disable-next-line import/no-extraneous-dependencies
import { decode } from 'js-base64';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Header } from '../../components/shared/Header';
import { Toast } from '../../components/shared/toast';
import { axiosPublic } from '../api/axios';

const Reset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordLenght, setPasswordLenght] = useState(true);
  const [decodedEmail, setDecodedEmail] = useState('');
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (router.query.email) {
      const email = decode(router.query.email as string);
      setDecodedEmail(email);
    }
  }, [router.query.email]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword);
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
    setPasswordLenght(event.target.value.length >= 8);
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    if (password === confirmPassword) {
      if (password.length < 8) {
        setPasswordLenght(false);
        return;
      }
    }
    try {
      const response = await axiosPublic.patch('/auth/changePassword', {
        newPassword: password,
        email: decodedEmail,
      });
      if (response.status === 200) {
        setSuccess(true);
        setError(false);
        await router.push('/auth');
      } else {
        setSuccess(false);
        setError(true);
      }
    } catch (e) {
      setError(true);
    }

    setPassword('');
    setConfirmPassword('');
    setPasswordMatch(true);
    setPasswordLenght(true);
  };
  return (
    <>
      <Head>
        <title>Reset </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="mx-auto mt-128 flex  max-w-[400px] flex-col items-center justify-center gap-[10px] px-16 py-16 ">
          <Toast
            success={success}
            error={error}
            text="Password Updated"
            errorMsgs={[{ msg: 'Something went wrong' }]}
          />
          <form className="w-full" onSubmit={handleSubmit}>
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="block py-8" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full rounded-full border-[1px] border-gray-500 px-24 py-8  outline-0"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="block py-8" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <input
                className="w-full rounded-full border-[1px] border-gray-500 px-24 py-8  outline-0"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {!passwordMatch && (
                <p style={{ color: 'red' }}>Passwords do not match!</p>
              )}
              {!passwordLenght && (
                <p style={{ color: 'red' }}>
                  Password should be 8 characters or more!
                </p>
              )}
            </div>
            <button
              type="submit"
              className="my-20 w-full rounded-full bg-yellow-500 py-8 text-center font-medium text-dark-500"
            >
              Set Password
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
export default Reset;
