'use client';
import { IChildrenProps } from '@/interfaces/common.interface';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { FC } from 'react';
import { styled } from 'styled-components';

/**
 * 메인 레이아웃
 * @param children: 자식 컴포넌트
 */
const Main: FC<IChildrenProps> = ({ children }) => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  return (
    <Container>
      <GoogleOAuthProvider clientId={clientId || ''}>{children}</GoogleOAuthProvider>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 80px);
`;
