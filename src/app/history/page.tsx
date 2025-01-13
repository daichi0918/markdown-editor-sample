'use client';
import * as React from 'react';
import { Button } from '../../components/button';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { Header } from '../../components/header';
import Link from 'next/link';

const HeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
`;

const History: React.FC = () => {
  const router = useRouter();
  return (
    <>
      {/* <h1>History</h1>
      <Button onClick={() => router.push('/editor')}>エディタへ戻る</Button> */}
      <HeaderArea>
        <Header title="履歴">
          <Link href={'/editor'}>エディタに戻る</Link>
        </Header>
      </HeaderArea>
      <Wrapper>TODO: 履歴表示</Wrapper>
    </>
  );
};

export default History;
