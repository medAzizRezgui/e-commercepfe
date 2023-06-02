import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { User } from '../../types/User';

export const useGetUser = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [jwt, setJwt] = useState('');
  useEffect(() => {
    const getUser = () => {
      const res = window.localStorage.getItem('user');
      // const tokenRes = window.localStorage.getItem('token');
      if (res) {
        setUser(JSON.parse(res));
      }
      if (!res) {
        router.push('/auth');
      }
    };
    const getToken = () => {
      const res = window.localStorage.getItem('jwt');
      // const tokenRes = window.localStorage.getItem('token');
      if (res) {
        setJwt(JSON.parse(res));
      }
      if (!res) {
        router.push('/auth');
      }
    };
    getUser();
    getToken();
  }, []);

  return { user, jwt };
};
