'use client';
import { createGlobalStyle } from 'styled-components';
import Editor from '../../components/editor';

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
