'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { useStateWithStorage } from '../hooks/use_state_with_storage';
import ReactMarkdown from 'react-markdown';
import { putMemo } from '../indexeddb/memos';
import { Button } from './button';
import { SaveModal } from './save_modal';
import { Header } from './header';
import Link from 'next/link';

// const Header = styled.header`
//   align-content: center;
//   display: flex;
//   justify-content: space-between;
//   font-size: 1.5rem;
//   height: 2rem;
//   left: 0;
//   line-height: 2rem;
//   padding: 0.5rem 1rem;
//   position: fixed;
//   right: 0;
//   top: 0;
// `;

// const HeaderControl = styled.div`
//   height: 2rem;
//   display: flex;
//   align-content: center;
// `;

const HeaderArea = styled.div`
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`;

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`;

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`;

interface Props {
  text: string;
  setText: (text: string) => void;
}

export const Editor: React.FC<Props> = (props) => {
  const { text, setText } = props;

  // const saveMemo = (): void => {
  //   putMemo('TITLE', text);
  // };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HeaderArea>
        <Header title="Markdown Editor">
          <Button onClick={() => setShowModal(true)}>保存する</Button>
          <Link href={'/history'}>履歴を見る</Link>
        </Header>
      </HeaderArea>
      <Wrapper>
        <TextArea
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <Preview>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Preview>
      </Wrapper>
      {showModal && (
        <SaveModal
          onSave={(title: string): void => {
            putMemo(title, text);
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};
