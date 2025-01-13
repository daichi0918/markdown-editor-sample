'use client';
import { createGlobalStyle } from 'styled-components';
import { Editor } from '../../components/editor';
import { useStateWithStorage } from '../../hooks/use_state_with_storage';

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`;

const StorageKey = '/editor:text';

export default function Main() {
  const [text, setText] = useStateWithStorage('', StorageKey);
  return (
    <>
      <GlobalStyle />
      <Editor text={text} setText={setText} />
    </>
  );
}
