import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { rootReducer } from './rootReducer';

// resux package 버전 영향 받음
// @reduxjs/toolkit : ^1.8.5 -> configureStore() middleware 오류 해결
// react-redux : ^8.0.2
// redux : ^4.2.0

const initializeStore = () => {
  const store = configureStore({ reducer: rootReducer, middleware: () => [] });
  return store;
};

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
