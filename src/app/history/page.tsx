'use client';
import * as React from 'react';
import { Button } from '../../components/button';
import { useRouter } from 'next/navigation';

const History: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <h1>History</h1>
      <Button onClick={() => router.push('/editor')}>エディタへ戻る</Button>
    </>
  );
};

export default History;
