'use client';
import { createGlobalStyle } from 'styled-components';
import Editor from '../app/editor/page';

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}
`;

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <Editor />
    </>
  );
}
