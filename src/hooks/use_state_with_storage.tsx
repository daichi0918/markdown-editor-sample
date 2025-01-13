'use client';

import { useState, useEffect } from 'react';

export const useStateWithStorage = (
  init: string,
  key: string
): [string, (s: string) => void] => {
  const [value, setValue] = useState<string>(init); // 初期値は直接 `init` を使う

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(storedValue); // クライアントサイドで `localStorage` から値を取得
    }
  }, [key]);

  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue);
    localStorage.setItem(key, nextValue);
  };

  return [value, setValueWithStorage];
};
