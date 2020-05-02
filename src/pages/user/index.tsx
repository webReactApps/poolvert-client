import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/user/main');
  }, [])
  return <></>;
};
