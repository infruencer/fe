'use client';
import PageContainer from '@/components/layout/PageContainer';
import React from 'react';
import withAuth from '../hoc/withAuth';

const MyDiary = () => {
  return <PageContainer>MyDiary</PageContainer>;
};

export default withAuth(MyDiary);
