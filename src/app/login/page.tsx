'use client';
import React, { FC } from 'react';
import styled from 'styled-components';
import logo from '@/public/static/images/logo_big.png';
import Image from 'next/image';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { Button } from '@/components/ui/Button';

/**
 * 로그인 페이지
 */
const Login: FC = () => {
  /**
   * 구글 로그인
   */
  const handleGoogleLogin = () => {};

  /**
   * 로그인
   */
  const handleLogin = () => {};

  return (
    <Container>
      <Image src={logo} alt={'logo'} width={330} height={68} />
      <Buttons>
        <Button text="구글 로그인" onClick={handleGoogleLogin} theme={ButtonTheme.GOOGLE} />
        <Button text="이메일 로그인·회원가입" onClick={handleLogin} theme={ButtonTheme.ORANGE} />
      </Buttons>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 218px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
