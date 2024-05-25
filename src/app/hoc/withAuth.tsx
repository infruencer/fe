'use client';

import { useModal } from '@/hooks/useModal';
import { setUser } from '@/redux/auth';
import { useRouter } from 'next/navigation';
import React, { ComponentType, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

/**
 * 인증이 필요한 페이지에서 사용할 HOC
 * @param Component: 렌더링할 컴포넌트
 */
const withAuth = (Component: ComponentType) => {
  const WithAuth: FC = (props) => {
    const { Alert } = useModal();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSession = async () => {
      const response: any = await fetch('/api/session').then((res) => res.json());
      if (!response.data.accessToken) {
        await Alert('알림', '로그인이 필요합니다.');
        router.push('/login');
      }
      dispatch(setUser(response.data));
    };

    useEffect(() => {
      handleSession();
    }, []);

    return <Component {...props} />;
  };
  return WithAuth;
};

export default withAuth;
