import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { axiosPrivate } from '../../../../pages/api/axios';
import { User } from '../../../../types/User';
import { useGetUser } from '../../../../utils/hooks/useGetUser';
import { Spinner } from '../../../shared/Spinner';
import { Toast } from '../../../shared/toast';
import { Input } from '../Input';

export const UserProfile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getUser = () => {
      const res = window.localStorage.getItem('user');
      if (res) {
        setUser(JSON.parse(res));
        setFullName(JSON.parse(res).fullName);
        setEmail(JSON.parse(res).email);
        setPhoneNumber(JSON.parse(res).phoneNumber);
        setCity(
          JSON.parse(res)?.shippingAddress?.city
            ? JSON.parse(res).shippingAddress.city
            : ''
        );
        setStreet(
          JSON.parse(res)?.shippingAddress?.street
            ? JSON.parse(res).shippingAddress.street
            : ''
        );
        setPostalCode(
          JSON.parse(res)?.shippingAddress?.postalCode
            ? JSON.parse(res).shippingAddress.postalCode
            : ''
        );
        setRegion(
          JSON.parse(res)?.shippingAddress?.region
            ? JSON.parse(res).shippingAddress.region
            : ''
        );
      }
      if (!res) {
        router.push('/auth');
      }
    };
    getUser();
  }, []);

  const { jwt } = useGetUser();

  if (!user)
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <Spinner />
      </div>
    );
  const handleUpdateUser = async () => {
    setSuccess(false);
    setError(false);
    try {
      await axiosPrivate
        .patch(
          `/auth/updateUser/${user?._id}`,
          {
            email,
            phoneNumber,
            fullName,
            shippingAddress: {
              region,
              city,
              postalCode,
              street,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        )
        .then((r) => {
          setSuccess(true);
          setError(false);
          window.localStorage.setItem('user', JSON.stringify(r.data));
        });
    } catch (e) {
      console.error(e);
      setSuccess(false);
      setError(true);
    }
  };
  return (
    <div className="w-full">
      <Toast
        success={success}
        error={error}
        text="Updated successfully"
        errorMsgs={[{ msg: 'Something went wrong' }]}
      />
      <div>
        <Input
          label="Full Name"
          value={fullName}
          type="text"
          setValue={setFullName}
          placeholder="Your name..."
        />
        <Input
          label="Email"
          value={email}
          type="email"
          setValue={setEmail}
          placeholder="Email..."
        />
        <Input
          label="Phone number"
          value={phoneNumber}
          type="number"
          setValue={setPhoneNumber}
          placeholder="Phone Number"
        />
        <p className="py-8">Region</p>
        <select
          defaultValue={region}
          onChange={(e) => setRegion(e.currentTarget.value)}
          className="mb-8 w-full rounded-full border-[1px] border-gray-400 px-24 py-8 "
        >
          <option value="select" selected>
            Sélectioner
          </option>
          <option value="Ariana">Ariana</option>
          <option value="Béja">Béja</option>
          <option value="Ben Arous">Ben Arous</option>
          <option value="Bizerte">Bizerte</option>
          <option value="Gabes">Gabes</option>
          <option value="Gafsa">Gafsa</option>
          <option value="Jendouba">Jendouba</option>
          <option value="Kairouan">Kairouan</option>
          <option value="Kasserine">Kasserine</option>
          <option value="Kebili">Kebili</option>
          <option value="La Manouba">La Manouba</option>
          <option value="Le Kef">Le Kef</option>
          <option value="Mahdia">Mahdia</option>
          <option value="Médenine">Médenine</option>
          <option value="Monastir">Monastir</option>
          <option value="Nabeul">Nabeul</option>
          <option value="Sfax">Sfax</option>
          <option value="Sidi Bouzid">Sidi Bouzid</option>
          <option value="Siliana">Siliana</option>
          <option value="Sousse">Sousse</option>
          <option value="Tataouine">Tataouine</option>
          <option value="Tozeur">Tozeur</option>
          <option value="Tunis">Tunis</option>
          <option value="Zaghouan">Zaghouan</option>
        </select>
        <Input
          label="City"
          value={city}
          type="text"
          setValue={setCity}
          placeholder="Name..."
        />
        <Input
          label="Street"
          value={street}
          type="text"
          setValue={setStreet}
          placeholder="Last Name..."
        />
        <Input
          label="Zip Code"
          value={postalCode}
          type="number"
          setValue={setPostalCode}
          placeholder="ZipCode..."
        />
        <button
          type="button"
          className="my-20 w-full cursor-pointer rounded-full bg-yellow-500 py-8 text-center font-medium"
          onClick={handleUpdateUser}
        >
          Update
        </button>
      </div>
    </div>
  );
};
