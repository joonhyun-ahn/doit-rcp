import { useMemo } from 'react';
import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const initializeStore = () => {
  const store = configureStore({ reducer: rootReducer, middleware: [] });
  return store;
};

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
