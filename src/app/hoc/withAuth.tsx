'use client';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 * 인증이 필요한 페이지에서 사용할 HOC
 * @param Component: 렌더링할 컴포넌트
 */
const withAuth = <P extends object>(Component: ComponentType<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        console.log('로그인이 필요합니다.');
        // router.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };
  return WithAuth;
};

export default withAuth;
